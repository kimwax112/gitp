import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer, Navbar } from "./components"
import RouterComponent from "./RouterComponent"// 라우터 관리 파일 분리

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <RouterComponent /> {/* 라우팅 담당 컴포넌트 */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
