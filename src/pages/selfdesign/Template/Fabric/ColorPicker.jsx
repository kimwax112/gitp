import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./ColorPicker.css";

const ColorPicker = ({ initialColor = "#ff0000", onColorChange }) => {
  const [color, setColor] = useState(initialColor);
  const [showPicker, setShowPicker] = useState(false);

  const handleChangeComplete = (colorResult) => {
    setColor(colorResult.hex);
    if (onColorChange) {
      onColorChange(colorResult.hex);
    }
  };

  // 밝기에 따라 글자색 결정
  const buttonTextColor =
    parseInt(color.replace("#", ""), 16) > 0xffffff / 2 ? "#000" : "#fff";

  return (
    <div className="color-picker-container">
      <div style={{ marginBottom: "8px" }}>
        {/* 컬러 피커 열기/닫기 버튼 */}
        <button
          style={{
            backgroundColor: color,
            color: buttonTextColor,
            padding: "6px 10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => setShowPicker(!showPicker)}
        >
          {showPicker ? "닫기" : "색깔 선택"}
        </button>
      </div>

      {/* showPicker가 true일 때만 SketchPicker 표시 */}
      {showPicker && (
        <SketchPicker
          color={color}
          width={150}                 // 원하는 너비(px 단위)
          onChangeComplete={handleChangeComplete}
        />
      )}
    </div>
  );
};

export default ColorPicker;
