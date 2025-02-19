import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import "./FabricItem.css";
import NextButton from "../../../../components/NextButton/NextButton";

// 14개의 개별 원단 아이템 데이터 배열
const fabricItemsData = [
  { id: 1, imageSrc: "default-image-path1.jpg", name: "면", desc: "모든 의류에 적합합니다.", initialColor: "#0099ff" },
  { id: 2, imageSrc: "default-image-path2.jpg", name: "폴리에스터", desc: "내구성이 좋고 관리가 쉽습니다.", initialColor: "#00ccff" },
  { id: 3, imageSrc: "default-image-path5.jpg", name: "울", desc: "따뜻하고 보온성이 뛰어납니다.", initialColor: "#663399" },
  { id: 4, imageSrc: "default-image-path6.jpg", name: "트위드", desc: "세련되고 독특한 질감입니다.", initialColor: "#ff66cc" },
];

function FabricItem() {
  // 여러 아이템 선택 가능하도록 배열로 관리
  const [selectedIds, setSelectedIds] = useState([]);

  // 아이템 클릭 시 선택/해제
  const handleClickItem = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  // 선택된 원단 이름 목록 생성
  const selectedItems = fabricItemsData
    .filter((item) => selectedIds.includes(item.id))
    .map((item) => item.name);

  return (
    <div>
      {/* 원단 목록 */}
      <div className="fabric-select">
        {fabricItemsData.map((item) => {
          const isSelected = selectedIds.includes(item.id);
          return (
            <div
              key={item.id}
              className={`fabric-item ${isSelected ? "selected" : ""}`}
              onClick={() => handleClickItem(item.id)}
            >
              <div className="fabric-image">
                <img src={item.imageSrc} alt="원단 이미지" />
              </div>
              <p className="fabric-name">{item.name}</p>
              <ColorPicker
                initialColor={item.initialColor}
                onColorChange={(newColor) =>
                  console.log(`Fabric item ${item.id} 새 색상: ${newColor}`)
                }
              />
              <p className="fabric-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* NextButton 컴포넌트 사용, 선택된 원단 목록 전달 */}
      <NextButton selectedItems={selectedItems} />
    </div>
  );
}

export default FabricItem;
