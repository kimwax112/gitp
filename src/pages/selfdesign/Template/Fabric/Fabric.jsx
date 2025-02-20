// Fabric.jsx
import React, { useState } from "react";
import "./Fabric.css"; // CSS 파일 경로가 정확한지 확인 필요
import FabricItem from "./FabricItem";
import styled from "styled-components";
import {Sidebar,BreadCrumb} from '../../../../components';



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

const categories = ["상의", "아우터", "바지", "원피스", "스커트", "스니커즈", "신발", "가방"];
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



const Fabric = () => {
  const [selectedCategory, setSelectedCategory] = useState("상의");
  const [selectedItem, setSelectedItem] = useState(null);
  const [fabricColor, setFabricColor] = useState("#ff0000");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedItem(null); // 새 카테고리 선택 시 선택된 아이템 초기화
  };
  const handleColorChange = (colorHex) => {
    setFabricColor(colorHex);
  };

  return (
    <div className="clothes-container">
      
      

      <div className="layout1">
        <aside className="sidebar">
          <Sidebar activePage={2}/>

       </aside>

        <div className="content1">
        <BreadCrumb />
        <h3>2.원단 선택</h3>
        <FabricItem />
        
           
        

        </div>
      </div>
    </div>
  );
};

export default Fabric;