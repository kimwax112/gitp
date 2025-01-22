import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TopCop from './top/TopCop';


export default function Daf() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

 
  const [isSignup, setIsSignup] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [usernameCheckMessage, setUsernameCheckMessage] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();


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
    navigate('/welcome');

    
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
     <div className="active-login-container">
      <div className="login">
        <h1>{isSignup ? "회원가입" : "로그인(수정 찬범)"}</h1>
        {isSignup ? (
          <form className="form1" onSubmit={handleSignupSubmit}>
            <input
              type="text"
              className={`input-text ${!isUsernameValid ? "invalid" : ""}`}
              placeholder="아이디 입력"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/*<button
              type="button"
              className="dupcheck"
              onClick={handleCheckUsername}
            >
              중복 확인
            </button>*/}
            <span>{usernameCheckMessage}</span>
            <br />
          
            <input
              type="password"
              className="input-password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              className="input-password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <input
              type="email"
              className="input-email"
              placeholder="이메일 입력"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {message && <p style={{ color: "red" }}>{message}</p>}
            <button type="submit" className="mpbutton">
              회원가입
            </button>
            <button
              type="button"
              className="mpbutton"
              onClick={handleGoToLogin}
            >
              돌아가기
            </button>
          </form>
        ) : (
          <form className="form1" onSubmit={handleLoginSubmit}>
            <input
              type="text"
              className="input-text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              className="input-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <p>성공여부:{message}</p>
            <button type="submit" className="mpbutton">
              로그인
            </button>
            <button
              type="button"
              className="mpbutton"
              onClick={handleGoToSignup}
              
            >
              회원가입
            </button>
            
          </form>
        )}
        
      </div>
      
    </div>
  )
}
