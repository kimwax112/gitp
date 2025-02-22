import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 페이지가 변경될 때 메뉴를 자동으로 닫기
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false); // 메뉴 닫기
    };

    // 페이지 변경될 때마다 호출
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <header className="navbar">
      <nav className="nav-menu">
        {/* 전체 메뉴 버튼 */}
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          전체 메뉴
        </button>

        {/* 기본 메뉴 */}
        <div className="nav-links">
          <a href="#">직접 의류 디자인</a>
          <a href="#">제작 의뢰 맡기기</a>
          <a href="#">계약 관리</a>
          <a href="#">대화방</a>
        </div>
      </nav>

      {/* 전체 메뉴 클릭 시 펼쳐지는 영역 */}
      {isMenuOpen && (
        <div className="dropdown-container">
          <div className="dropdown-section">
            <h3>직접 의류 디자인</h3>
            <Link to="/clothes" onClick={() => setIsMenuOpen(false)}>
              사이트 제공 템플릿
            </Link>
            <Link to="/Upload" onClick={() => setIsMenuOpen(false)}>
              디자인 파일 업로드
            </Link>
            <Link to="/BrandDP" onClick={() => setIsMenuOpen(false)}>
              브랜드 디자인 검색
            </Link>
          </div>
          <div className="dropdown-section">
            <h3>제작 의뢰 맡기기</h3>
            <Link to="/request" onClick={() => setIsMenuOpen(false)}>
              의뢰 등록하기
            </Link>
            <Link to="/designer" onClick={() => setIsMenuOpen(false)}>
              디자이너 고르기
            </Link>
            <Link to="/recruit" onClick={() => setIsMenuOpen(false)}>
              디자이너 구인 게시판
            </Link>
          </div>
          <div className="dropdown-section">
            <h3>계약 관리</h3>
            <Link to="/contract" onClick={() => setIsMenuOpen(false)}>
              계약서 조회 및 처리
            </Link>
            <Link to="/modify" onClick={() => setIsMenuOpen(false)}>
              계약 수정 건의
            </Link>
            <Link to="/cancel" onClick={() => setIsMenuOpen(false)}>
              계약 해지 요청
            </Link>
            <Link to="/refund" onClick={() => setIsMenuOpen(false)}>
              환불 요청
            </Link>
          </div>
          <div className="dropdown-section">
            <h3>대화방</h3>
            <Link to="/chat" onClick={() => setIsMenuOpen(false)}>
              일반 채팅방
            </Link>
            <Link to="/report" onClick={() => setIsMenuOpen(false)}>
              사용자 신고/차단
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;