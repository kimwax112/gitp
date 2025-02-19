import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  width: 120px;
  height: 40px;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #9dbbd5;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 20px;
  text-align: center;

  &:hover {
    background-color: #bbb;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background: white;
  width: 350px;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const PopupFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PopupButton = styled.button`
  width: 50%;
  padding: 10px;
  background: ${(props) => (props.primary ? "white" : "#f0f0f0")};
  color: ${(props) => (props.primary ? "red" : "black")};
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? "#ffdddd" : "#e0e0e0")};
  }
`;

const NextButton = ({ selectedItems }) => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleNextClick = () => {
    if (selectedItems.length === 0) {
      alert("선택된 원단이 없습니다.");
      return;
    }
    setIsPopupOpen(true);
  };

  const handleConfirm = () => {
    setIsPopupOpen(false);
    navigate("/Size");
  };

  return (
    <>
      <Button onClick={handleNextClick}>다음</Button>

      {isPopupOpen && (
        <PopupOverlay>
          <PopupContainer>
            <p>선택된 원단:</p>
            <ul>
              {selectedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <PopupFooter>
              <PopupButton onClick={() => setIsPopupOpen(false)}>취소</PopupButton>
              <PopupButton onClick={handleConfirm}>확인</PopupButton>
            </PopupFooter>
          </PopupContainer>
        </PopupOverlay>
      )}
    </>
  );
};

export default NextButton;
