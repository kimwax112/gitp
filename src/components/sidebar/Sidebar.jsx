import React from "react";
import "./Sidebar.css"; // 필요한 스타일링 파일

const Sidebar = ({ activePage }) => {
  return (
    <div className="final-confirmation-container">
      {/* 왼쪽 카테고리 */}
      <aside className="sidebar">
        <h3>사이트 제공 템플릿으로 디자인</h3>
        <hr />
        <ul>
          <li className={activePage === 1 ? "active" : ""}>1. 의류 종류 선택</li>
          <li className={activePage === 2 ? "active" : ""}>2. 원단 선택</li>
          <li className={activePage === 3 ? "active" : ""}>3. 사이즈 스펙 입력</li>
          <li className={activePage === 4 ? "active" : ""}>4. 최종 확인</li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;