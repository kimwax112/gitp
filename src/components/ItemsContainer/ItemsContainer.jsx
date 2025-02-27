import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1070px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  padding: 30px 50px;
  border: 0.8px solid black;
  position: relative;
`;

const ItemBox = styled.div`
  width: 210px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  background-color: ${(props) => (props.selected ? "#799fc4" : "white")};
  cursor: pointer;
`;

const InnerBox = styled.div`
  width: 90%;
  height: 75%;
  background-color: ${(props) => (props.selected ? "white" : "#799fc4")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ItemText = styled.div`
  font-weight: bold;
  height: 35px;
`;

const NextButton = styled.button`
  position: absolute;
  width: 100px;
  height: 35px;
  bottom: 20px;
  right: 30px;
  padding: 10px 20px;
  border: none;
  background-color: #9dbbd5;
  font-size: 14.8px;
  cursor: pointer;
  border-radius: 20px;
  text-align: center;

  &:hover {
    background-color: #bbb;
  }
`;

const ItemsContainer = ({ items, activeTab, selectedItem, setSelectedItem, handleNextClick }) => {
  return (
    <Container>
      {items[activeTab]?.map((item, index) => (
        <ItemBox key={index} selected={selectedItem === item} onClick={() => setSelectedItem(item)}>
          <InnerBox selected={selectedItem === item}>
            {selectedItem === item && <div>선택됨</div>}
          </InnerBox>
          <ItemText>{item}</ItemText>
        </ItemBox>
      ))}
      <NextButton onClick={handleNextClick}>다음</NextButton>
    </Container>
  );
};

export default ItemsContainer;
