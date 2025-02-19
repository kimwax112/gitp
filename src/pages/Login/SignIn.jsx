import React from 'react'
import './SignIncss.css';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  
  return (
    <div>
      
      <div className='divmcover'>
        <div className='loginWrapper'>
        <div className='divm-wrapperr'>
          <div className='divmmm'>
            <p style={{fontSize:'30px'}}>
            디자인사이에서 어떤 서비스를<br/>
            이용하고 싶으세요?
            </p>
            <br/>
            원하는 회원가입 유형을 선택하세요
            <br/>
            <br/>


            <br/>
            <font size="2"> 서비스를 의뢰하고싶다면</font>
            <br/>
            <button style = {{marginTop:'10px'}}  onClick={() => navigate('/Sign2')} className='mainbarooo'>의뢰인으로 가입</button>
            <br/>
            <font size="2">옷을 제작할 디자이너시라면</font>
            <br/>
            <button style = {{marginTop:'10px'}} onClick={() => navigate('/Sign2')} className='mainbarooo'>디자이너로 가입</button>

           
          </div>

        </div>
        </div>

      </div>
</div>
  )
}
