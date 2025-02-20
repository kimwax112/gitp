import React, { useState } from "react";
import styled from "styled-components";
import "./Clothes.css";
import {useNavigate} from "react-router-dom";
import { Sidebar,Tabs,ItemsContainer,BreadCrumb} from '../../../../components'
import { PopupComponent} from '../../../../utils';










// const PopupOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.3);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const PopupContainer = styled.div`
//   background: white;
//   width: 350px;
//   height: 130px;
//   padding: 20px;
//   border-radius: 15px;
//   text-align: center;
//   font-size: 18px;
//   font-weight: bold;
//   display: flex;
//   flex-direction: column;
//   justify-content: center; /* 텍스트 중앙 정렬 */
//   align-items: center;
// `;

// const PopupMessage = styled.div`
//   flex-grow: 1; /* 남은 공간을 차지하여 중앙 배치 */
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const PopupFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   border-top: 1px solid #ccc;
//   width: 100%;
//   padding: 10px 0;
// `;

// const PopupButton = styled.button`
//   width: 50%;
//   padding: 10px;
//   background: ${(props) => (props.primary ? "white" : "#f0f0f0")};
//   color: ${(props) => (props.primary ? "red" : "black")};
//   font-size: 16px;
//   font-weight: bold;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background: ${(props) => (props.primary ? "#ffdddd" : "#e0e0e0")};
//   }
// `;


// const ItemsContainer = styled.div`
//   width: 1070px;
//   height: 400px;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 50px;
//   padding: 30px 50px;
//   border: 0.8px solid black;
//   position: relative;
// `;

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

const Clothes = () => {
  const navigate = useNavigate();
  const categories = ["상의", "아우터", "바지", "원피스", "스커트", "스니커즈", "신발", "가방"];
  const [activeTab, setActiveTab] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const items = {
    상의: ["티셔츠(T-shirt)", "맨투맨(Sweatshirt)", "후드(Hoodie)", "집업(Zip-up Jersey)"],
    아우터: ["코트(Coat)", "자켓(Jacket)"],
    바지: ["청바지(Jeans)", "슬랙스(Slacks)", "조거팬츠(Jogger Pants)"],
    원피스: ["미니 원피스", "맥시 원피스"],
    스커트: ["미니 스커트", "롱 스커트"],
    스니커즈: ["러닝화", "하이탑"],
    신발: ["로퍼", "샌들"],
    가방: ["백팩", "토트백"],
  };
  const handleNextClick = () => {
    if (!selectedItem) {
      setIsPopupOpen(true);
    } else {
      navigate("/fabric");
    }
  };
  // // 다음 버튼 클릭 시 의류 선택 여부 확인
  // const handleNextClick = () => {
  //   if (!selectedItem) {
  //     setIsPopupOpen(true); // 팝업 열기
  //   } else {
  //     console.log("다음 단계로 이동"); // 실제 페이지 이동 로직 추가 가능
  //     navigate("/fabric")
  //   }
  // };

  return (
    <div className="clothes-container">

      {/* 디자인 단계 */}
      <div className="layout1">
        <aside className="sidebar">
          <Sidebar activePage={1} />
          </aside>
      <div className="content1">
      <BreadCrumb />
      <h3>1.의류 선택</h3>
      <Tabs categories={categories} activeTab={activeTab} setActiveTab={setActiveTab} />
      <ItemsContainer
        items={items}
        activeTab={categories[activeTab]}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        handleNextClick={handleNextClick}
      />
      <PopupComponent />

          </div>

          {/* 탭 메뉴 */}
          {/*
          <div className="tab-card">
            <Tabs>
              {categories.map((category, index) => (
                <li key={index} className={index === activeTab ? "active" : ""} onClick={() => setActiveTab(index)}>
                  {category}
                </li>
              ))}
            </Tabs>

            // 아이템 리스트 
            <ItemsContainer>
              {items[categories[activeTab]]?.map((item, index) => (
                <ItemBox key={index} selected={selectedItem === item} onClick={() => setSelectedItem(item)}>
                  <InnerBox selected={selectedItem === item}>{selectedItem === item && <div>선택됨</div>}</InnerBox>
                  <ItemText>{item}</ItemText>
                </ItemBox>
              ))}
              <NextButton onClick={handleNextClick}>다음</NextButton>
            </ItemsContainer>
          </div> 
          */}     

          {/* 팝업 창 */}
          {/* {isPopupOpen && (
            <PopupOverlay>
              <PopupContainer>
                <PopupMessage>의류가 선택되지 않았습니다.</PopupMessage>
                <PopupFooter>
                  <PopupButton onClick={() => setIsPopupOpen(false)}>취소</PopupButton>
                  <PopupButton onClick={() => setIsPopupOpen(false)}>확인</PopupButton>
                </PopupFooter>
            </PopupContainer>
            </PopupOverlay>
          )} */}
          
        </div>
        </div>
      
  );
};

export default Clothes;
