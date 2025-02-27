import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import './Welcomecss.css';
export default function Welcome() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

 
  const [isSignup, setIsSignup] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [usernameCheckMessage, setUsernameCheckMessage] = useState("");
  const [email, setEmail] = useState("");



  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`http://localhost:8081/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  
    let data;
    try {
        data = await response.json();
    } catch (error) {
        console.error("Invalid JSON response:", error);
        setMessage("로그인실패");//서버에서 아무것도 응답하지 않음
        return;
    }

    if (!response.ok) {
        setMessage(data.message || "로그인 실패");
        return;
    }

    console.log(data);
    localStorage.setItem("username", data.username);
    setMessage("로그인 성공!");
    setTimeout(() => {
      navigate('/CosMain');  // 회원가입 성공 시 Hello 컴포넌트로 이동
    }, 1000);

    
    };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() && !password.trim()) {
      setMessage("회원가입 정보를 입력해 주십시오.");
      return;
    }

    if (!username.trim()) {
      setMessage("아이디가 입력되지 않았습니다.");
      return;
    }

    if (!password.trim()) {
      setMessage("비밀번호가 입력되지 않았습니다.");
      return;
    }
    /*if (!isUsernameValid) {
      setMessage("아이디 중복확인을 해주십시오.");
      return;
    }*/

    if (password !== confirmPassword) {
      setMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    const response = await fetch(`http://localhost:8081/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email}),
    });

    const data = await response.json();
    if (response.ok && data.message === "회원가입 성공!") {
      setMessage(data.message);
      setIsSignup(false);
    } else {
      setMessage(data.message);
    }
  };
   // 회원가입 화면으로 이동 시 초기화
   const handleGoToSignup = () => {
    setUsername("");
    setPassword("");
    setMessage("");
    setIsSignup(true);
  };

  // 로그인 화면으로 이동 시 초기화
  const handleGoToLogin = () => {
    setUsername("");
    setPassword("");
    setMessage("");
    setConfirmPassword("");
    setIsSignup(false);
    setUsernameCheckMessage("");
  };

  const handleCheckUsername = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/check-username/?username=${username}`
    );
    const data = await response.json();
    if (!username.trim()) {
      setMessage("입력 이후 중복확인을 진행하십시오");
        return;
    } else {
      if(data.exists){ 
       
        setIsUsernameValid(false);
        setUsernameCheckMessage("중복 Id입니다!");
      }else{
      setIsUsernameValid(true);
      setUsernameCheckMessage("사용 가능한 Id입니다.");
      }
    }
  };
  return (
    <div>
      
      <div className='divmcover'>
        <div className='loginWrapper'>
        <div className='divm-wrapperr'>
          <div className='divmm'>
            <p style={{textAlign:'center', fontSize:'50px'}}>
            Login
            </p>
            <form className="form1" onSubmit={handleLoginSubmit}>

            <input  value={username} className="loginput" type="text" onChange={(e) => setUsername(e.target.value)}></input>
            <br/>
            <input value={password} className="loginput" type="text" onChange={(e) => setPassword(e.target.value)}></input>
            <br/>
            <div style={{textAlign:'left'}}>
            <input type="checkbox"></input>아이디 저장
            </div>
            
            <br/>
            <button type='submit' style = {{marginTop:'10px'}}className='mainbaroo'>Sign in</button>
            </form>
            <div className='MenuBarr'> 
                <nav>
                    <ul>
                        <li><a href='#'>아이디 찾기</a></li>
                        <li style={{paddingLeft:'5px',paddingRight:'5px'}}><a href='#'>비밀번호 찾기</a></li>
                        <li><a href='#'>회원가입</a></li>
                        
                    </ul>
                </nav>            
            </div>
          </div>

        </div>

        {/* "여기도 영역임"을 divmcover 내부에서 divm-wrapper 아래로 배치 */}
        <div className='extra-sectionn'>
          <div style={{textAlign:'center'}}>sns계정으로 로그인<br/>{message}</div>
          <button className='mainbaroo2' 
            style={{backgroundColor:'green', color:'white'}}
            
           >Naver</button>      
          <button className='mainbaroo2' 
          style={{backgroundColor:'Yellow'}}>kakao</button>
          <button className='mainbaroo2' 
          style={{backgroundColor:'grey', color:'white'}}>Google</button>
        </div>
        </div>

      </div>
</div>
  )
}
