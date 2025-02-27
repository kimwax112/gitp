import React from "react";
import styled from "styled-components";

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
  height: 130px;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PopupMessage = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  width: 100%;
  padding: 10px 0;
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

const PopupComponent = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay>
      <PopupContainer>
        <PopupMessage>의류가 선택되지 않았습니다.</PopupMessage>
        <PopupFooter>
          <PopupButton onClick={onClose}>취소</PopupButton>
          <PopupButton onClick={onConfirm}>확인</PopupButton>
        </PopupFooter>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default PopupComponent;
