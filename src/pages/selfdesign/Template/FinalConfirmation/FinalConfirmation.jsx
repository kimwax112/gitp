import React from "react"; 
import "./FinalConfirmation.css";
import "../../../CosMain/CosMainCss.css"
import { Sidebar,Content,BreadCrumb } from '../../../../components'



const FinalConfirmation = () => {
  
    return (
      <div className="clothes-container">
        <div className="layout1">
          <aside className="sidebar">
          <Sidebar activePage={4}/>
          </aside>
          <div className="content1">
            <BreadCrumb activePage={4} />
          <h3>사이트 제공 템플릿으로 디자인</h3>
          <h2>4.최종확인</h2>
          <Content/>
          </div>  
        </div>
      </div>
    );
};

export default FinalConfirmation;