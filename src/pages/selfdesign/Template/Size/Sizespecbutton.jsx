import React from "react";
import "./Sizespecbuttoncss.css";

export default function Sizespecbutton({ label, onClick }) {
  return (
    <button className="sizespecbutton" style={{ backgroundColor: "#9DBBD5" }} onClick={onClick}>
      {label}
    </button>
  );
}
