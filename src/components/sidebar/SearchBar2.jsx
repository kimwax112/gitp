import React from 'react'
import { useState } from "react";
import "./SearchBar2css.css";


export default function SearchBar2() {
  const [selectedOption, setSelectedOption] = useState("선택하세요");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    alert(`선택한거: ${selectedOption}, 검색어: ${searchTerm}`);
  };
  return (
    <div className="search-bar-container">
    <div className="dropdown-container">
      <select
        className="dropdown"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="선택하세요">이미지소스</option>
        <option value="패션잡지">패션잡지</option>
        <option value="포트폴리오">포트폴리오</option>
        <option value="기본샘플">기본샘플</option>
      </select>
    </div>
    <input
      type="text"
      className="search-input"
      placeholder="검색어 입력"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button className="search-button" onClick={handleSearch}>
      검색
    </button>
  </div>
  )
}
