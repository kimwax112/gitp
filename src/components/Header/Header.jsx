import React from "react";

export default function Header () {
  return (
<div className='LogoStuff'>
<img src="image/image.png" alt="이미지없음"></img>
<div className='Buttons1' style={{marginLeft:'auto'}}>
Sample 님, 환영합니다!
<button className='ButtonAtLogo' style={{backgroundColor:'#2C2F31'}}>로그아웃</button>
<button className='ButtonAtLogo' style={{backgroundColor:'#4A6171'}}>고객센터</button>
</div>
</div> 
  )
}