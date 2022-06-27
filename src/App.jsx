import React, { useState } from "react";
import CategorySearch from "./CategorySearch";
import ProjectSearsh from "./ProjectSearsh";
import './App.css';

function App() {
  const [viewType, setViewType] = useState(null);

  const handleSelectProject = () => {
    setViewType("project"); //프로젝트로
  };
  const handleSelectCategory = () => {
    setViewType("category"); //카테고리로
  };

  const handleClickBackButton = () => {
    setViewType(null); //메인으로
  };

  return (
    <div
      className="App"
      style={{ width: "100%", height: "100%", backgroundColor: "#ffffff" }}
    >
      {viewType ? (
        viewType === "project" ? (
          <ProjectSearsh onClickBackButton={handleClickBackButton} />
        ) : (
          <CategorySearch onClickBackButton={handleClickBackButton} />
        ) //뷰타입이 프로젝트면 백버튼클릭시 돌아가고 프로젝트가 아니여도(카테고리) 돌아감
      ) : (
        <>
          <div className="main_img">
            <h1>PID 도면 관리 시스템</h1>
          </div>
          <hr></hr>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              style={{
                height: 100,
                borderWidth: 3,
              }}
              onClick={handleSelectProject}
              value={"프로젝트로 검색"}
              type={"button"}
            />

            <input
              style={{
                height: 100,
                borderWidth: 3,
              }}
              onClick={handleSelectCategory}
              value={"분류로 검색"}
              type={"button"}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
