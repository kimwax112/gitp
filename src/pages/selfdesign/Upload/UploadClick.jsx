import React from "react";
import "./Upload.css"; // ✅ 스타일 적용

export const Edit = ({ show, toggleEdit, image }) => {
    return (
        <div className="EditWrapper">
            {/* ✅ Edit UI 토글 */}
            <p onClick={toggleEdit} className="EditText">
                편집하기 
            </p>

            {/* ✅ Edit 화면이 열려있을 때만 표시 */}
            {show && (
                <div className="EditBox">
                    <h3></h3>

                    {/* ✅ 이미지가 있으면 표시 */}
                    {image ? (
                        <img src={image} alt="미리보기" className="previewImage" />
                    ) : (
                        <p>이미지를 업로드하세요.</p>
                    )}

                    {/* ✅ 닫기 버튼 */}
                    <button onClick={toggleEdit} className="closeButton">닫기</button>
                </div>
            )}
        </div>
    );
};
