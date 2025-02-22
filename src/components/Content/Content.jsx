import React from "react";
import { useNavigate } from "react-router-dom";
import "./Content.css"; 
import Sizespecbutton from "../../pages/selfdesign/Template/Size/Sizespecbutton";
import Sizespec from "../../pages/selfdesign/Template/Size/Sizespec";

        
const Content = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleSave = () => {
        console.log("디자인이 저장되었습니다!");
        alert("디자인이 저장되었습니다!");
    };

    return(
        <div className="Content">
            {/* 본문 영역 */}
            <main className="content">

            <br />

            {/* 디자인 이름 입력 */}
            <label className="design-name">
                디자인 이름<span className="required">*</span>
            </label>
            <br />
            <input type="text" placeholder="디자인 이름 입력" />

            <div className="options">
                <p>원단</p>
                <p className="text1">원단명: 원단1</p>
                <p className="text1">색상: Red</p>
                <p>의류 종류</p>
                <p className="text1">상의</p>
            </div>

            {/* 옷 이미지 & 치수 테이블 */}
            <div className="design-preview">
                 <Sizespec/>
            </div>

            {/* 버튼 */}
            <div className="button-group">
                <Sizespecbutton label="이전" onClick={() => navigate(-1)} />
                <Sizespecbutton label="다음" onClick={handleSave} />
            </div>
            </main>
        </div>
    ); 
};
export default Content;