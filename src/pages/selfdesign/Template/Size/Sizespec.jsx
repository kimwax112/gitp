import React, { useState, useEffect } from "react";
import "./Sizespeccss.css";

function Sizespec({ selectedSize, setSelectedSize }) {
  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

  const initialRows = [
    { category: "A", label: "총 기장", values: [20.0, 21.5, 23.0, 24.5, 26.0, 27.5, 29.0], type: "highlight" },
    { category: "B", label: "가슴 단면", values: [33.0, 35.5, 38.0, 40.5, 43.0, 45.5, 48.0], type: "highlight" },
    { category: "C", label: "밑단 단면", values: [44.0, 46.5, 49.0, 51.5, 54.0, 56.5, 59.0], type: "highlight" },
    { category: "D", label: "소매 기장", values: [33.0, 33.5, 34.0, 34.5, 35.0, 35.5, 36.0], type: "highlight" },
    { category: "E", label: "어깨 단면", values: [27.0, 29.5, 32.0, 34.5, 37.0, 39.5, 42.0], type: "normal" },
    { category: "F", label: "허리 단면", values: [33.0, 35.5, 38.0, 40.5, 43.0, 45.5, 48.0], type: "normal" },
    { category: "G", label: "암홀 (직선)", values: [20.2, 20.9, 21.6, 22.3, 23.0, 23.7, 24.4], type: "normal" },
    { category: "H", label: "소매단 단면", values: [17.7, 18.4, 19.1, 19.8, 20.5, 21.2, 21.9], type: "normal" },
    { category: "I", label: "소매통 단면", values: [18.7, 19.4, 20.1, 20.8, 21.5, 22.2, 22.9], type: "normal" },
    { category: "J", label: "목 너비", values: ["디자인 선택 후 산출"], type: "disabled", colspan: 7 },
    { category: "K", label: "목 파임", values: ["디자인 선택 후 산출"], type: "disabled", colspan: 7 }
  ];

  const [rows, setRows] = useState(initialRows);
  const [editable, setEditable] = useState({
    xs: true,
    s: false,
    m: false,
    l: false,
    xl: false,
    "2xl": false,
    "3xl": false,
  });

  useEffect(() => {
    // selectedSize가 null일 경우 editable 상태와 테이블 값 초기화
    if (selectedSize === null) {
      setEditable({
        xs: true,
        s: false,
        m: false,
        l: false,
        xl: false,
        "2xl": false,
        "3xl": false,
      });

      // 테이블의 값도 초기화
      setRows(initialRows);
    }
  }, [selectedSize]);

  const handleCellClick = (size) => {
    // 클릭한 사이즈를 활성화하고, 나머지 사이즈는 비활성화
    const newEditable = { ...editable };
    Object.keys(newEditable).forEach((key) => {
      newEditable[key] = key === size;
    });
    setEditable(newEditable);
    setSelectedSize(size);  // 선택된 사이즈 상태 업데이트
  };

  // 텍스트 입력 변경 처리 함수
  const handleInputChange = (rowIndex, event) => {
    const newRows = [...rows];
    const newValue = event.target.value;

    const valueToUse = newValue.trim() === '' ? '0' : newValue;

    // 값이 숫자일 경우만 처리
    if (!isNaN(valueToUse)) {
      const numericValue = parseFloat(valueToUse);
      const diff = numericValue - rows[rowIndex].values[0];
      newRows[rowIndex].values = rows[rowIndex].values.map((value, index) => value + diff * index);
      newRows[rowIndex].values[0] = numericValue; // 첫 번째 값만 변경
      setRows(newRows);
    } else {
      event.preventDefault();
    }
  };

  return (
    <div className="table-container">
      <img style={{ width: "600px" }} src="/image/size.png" alt="이미지가 없습니다"></img>
      <table className="sizespec-table">
        <thead>
          <tr>
            <th style={{ width: "150px" }} colSpan={2}>
              (단위 : cm)
            </th>
            {sizes.map((size, index) => (
              <th
                key={index}
                onClick={() => setSelectedSize(size)}
                className={selectedSize === size ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                {size && size.toLowerCase ? size.toLowerCase() : ''} {/* null이 아닌 경우에만 toLowerCase 호출 */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={row.type}>
              <td className="category">{row.category}</td>
              <td>{row.label}</td>
              {row.colspan ? (
                <td colSpan={row.colspan} className="merged-cell">
                  {row.values[0]}
                </td>
              ) : (
                row.values.map((value, colIndex) => (
                  <td key={colIndex}>
                    {/* 첫 번째 값만 입력창으로 바꾸고 나머지는 자동 계산 */}
                    {colIndex === 0 ? (
                      <input
                        type="text"
                        value={value}
                        onChange={(event) => handleInputChange(rowIndex, event)}
                        style={{ width: "30px" }}
                        disabled={!selectedSize || !editable[selectedSize.toLowerCase()]}
                      />
                    ) : (
                      typeof value === "number" ? value.toFixed(1) : value
                    )}
                  </td>
                ))
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sizespec;