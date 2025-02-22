import React, { useState } from "react";
import "../../CosMain/CosMainCss.css";
import "./Upload.css";
import { Edit } from "./UploadClick"; // Edit 컴포넌트 불러오기

export default function Upload() {
  const [fileBoxes, setFileBoxes] = useState([
    { id: 1, fileName: "파일을 올려주세요", showEdit: false, image: null }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  // FileBox를 최대 3개까지만 생성하도록 제한
  const addFileBox = () => {
    if (fileBoxes.length < 3) {
      setFileBoxes(prevBoxes => [
        ...prevBoxes, 
        { id: prevBoxes.length + 1, fileName: "파일을 올려주세요", showEdit: false, image: null }
      ]);
    } else {
      alert("최대 3개까지만 생성할 수 있습니다.");
    }
  };

  const toggleEdit = (id) => {
    setFileBoxes(prevBoxes =>
      prevBoxes.map(file =>
        file.id === id ? { ...file, showEdit: !file.showEdit } : file
      )
    );
  };

  const removeFileBox = (id) => {
    setFileBoxes(prevBoxes => prevBoxes.filter(file => file.id !== id));
  };

  const handleUpload = (event, id) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      const fileNameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
      reader.onloadend = () => {
        setFileBoxes(prevBoxes =>
          prevBoxes.map(fileBox =>
            fileBox.id === id
              ? { ...fileBox, fileName: fileNameWithoutExt, image: reader.result, showEdit: true }
              : fileBox
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
    if (!isComposing) {
      setSearchQuery(event.target.value);
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (event) => {
    setIsComposing(false);
    setSearchQuery(event.target.value);
  };

  const filteredFiles = fileBoxes.filter(file =>
    file.fileName
      .normalize("NFC")
      .trim()
      .toLowerCase()
      .includes(searchQuery.normalize("NFC").trim().toLowerCase())
  );

  return (
    <div>
      <div className="WholeWrapper">
        

        <div className="Container">
          <div className="Title">
            <h2 className="title">디자인 파일 업로드</h2>
          </div>
          <div className="InputWrapper">
            <h3 className="title2">디자인 이름</h3>
            <input 
              type="text" 
              className="title2input" 
              placeholder="파일명 검색"
              value={inputValue}
              onChange={handleSearchChange}
              onCompositionStart={handleCompositionStart}
              onCompositionEnd={handleCompositionEnd}
            />
          </div>

          <div className="UploadpageWrapper">
            <div className="UploadpageWrapper2">
              <div className="FileContainer">
                <div className="FileUpload">
                  <h3>파일 목록</h3>
                  {filteredFiles.length > 0 ? (
                    filteredFiles.map((file) => (
                      <div key={file.id} className="FileBoxWrapper">
                        <div className="FileBox">
                          <div className="fileNameWrapper">
                            <p className="fileName">{file.fileName}</p>
                          </div>
                          <div className="ButtonGroup">
                            <button className="deleteButton" onClick={() => removeFileBox(file.id)}>삭제</button>
                            <input 
                              type="file" 
                              accept="image/*" 
                              style={{ display: "none" }} 
                              id={`upload-${file.id}`}
                              onChange={(event) => handleUpload(event, file.id)}
                            />
                            <button className="uploadButton" onClick={() => document.getElementById(`upload-${file.id}`).click()}>
                              업로드
                            </button>
                          </div>
                        </div>
                        <Edit show={file.showEdit} toggleEdit={() => toggleEdit(file.id)} image={file.image} />
                      </div>
                    ))
                  ) : (
                    <p>검색된 파일이 없습니다.</p>
                  )}

                  {/* 버튼들을 일반 흐름에 배치 */}
                  <div className="ButtonContainer">
                    <button className="resetButton" onClick={() => setFileBoxes([])}>초기화</button>
                    <button className="saveButton">저장</button>
                  </div>
                  <div className="createFile">
                    <button 
                      className="createButton" 
                      onClick={addFileBox} 
                      disabled={fileBoxes.length >= 3}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 디자인 파일 업로드 끝 */}
        </div>
    </div>
  );
}
