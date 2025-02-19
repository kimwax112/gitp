import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Fabric/Fabric.css";
import Sizespec from "./Sizespec";
import Sizespecbutton from "./Sizespecbutton";
import { Sidebar } from "../../../../components";
import BreadCrumb from "../../../../BreadCrumb/BreadCrumb";

const Size = () => {
  // selectedSize state 추가
  const [selectedSize, setSelectedSize] = useState(null);

  const navigate = useNavigate();

  // "저장하기" 버튼 클릭 시
  const handleSave = () => {
    if (!selectedSize) {
      alert("사이즈를 선택하시오");
    } else {
      // 선택된 사이즈 알림 후 다음 페이지 이동
      alert(`${selectedSize} 사이즈가 선택되었습니다.`);
      navigate("/FinalConfirmation");
    }
  };

  return (
    <div className="clothes-container">
     
      {/* 헤더 */}
      
    <div className="layout1">
      <div className="layout1">
          <aside className="sidebar">
            <Sidebar activePage={3} />
          </aside>
       


      <div className="content1">
        
          <BreadCrumb activePage={3} />
          <h3>사이트 제공 템플릿으로 디자인</h3>
          <h2>3.사이즈 스펙 선택</h2>
          <br></br>

        <Sizespec selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        <div className="footer button_size">
          <Sizespecbutton label="초기화" onClick={() => setSelectedSize(null)} />
          <Sizespecbutton label="이전" onClick={() => navigate(-1)} />
          <Sizespecbutton label="저장하기" onClick={handleSave} />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Size;
