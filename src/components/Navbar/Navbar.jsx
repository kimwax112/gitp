import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // 스타일 파일 유지

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-menu">
      <h1>중개 플랫폼</h1>
      <a href="#">전체 메뉴</a><br/>
      
        <div className="dropdown">
          <a href="#">직접 의류 디자인</a>
          <div className="dropdown-menu">
            <Link to="/clothes">사이트 제공 템플릿으로 디자인</Link>
            <Link to="/Upload">디자인 파일 업로드</Link>
            <Link to="/BrandDP">브랜드 디자인 검색</Link>
          </div>
        </div>
        <a href="#">제작 의뢰 맡기기</a>
        <a href="#">대화방</a>
        <a href="#">계약 관리</a>
      </nav>
    </header>
  );
};

export default Navbar;