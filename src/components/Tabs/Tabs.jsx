import React from "react";
import styled from "styled-components";

const TabsWrapper = styled.ul`
  display: flex;
  width: 1171px;
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 2px solid #ddd;
  text-align: center;

  li {
    width: 140px;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 15px 15px 0 0;
    border: 0.8px solid black;
    border-bottom: none;
    background-color: #fff;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li.active {
    background-color: #eee;
  }
`;

const Tabs = ({ categories, activeTab, setActiveTab }) => {
  return (
    <TabsWrapper>
      {categories.map((category, index) => (
        <li
          key={index}
          className={index === activeTab ? "active" : ""}
          onClick={() => setActiveTab(index)}
        >
          {category}
        </li>
      ))}
    </TabsWrapper>
  );
};

export default Tabs;
