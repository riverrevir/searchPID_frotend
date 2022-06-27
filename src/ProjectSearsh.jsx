import React, { useState} from "react";
import {AiTwotoneHome} from "react-icons/ai"; //홈아이콘

const backUrl = "http://localhost:8080";

function Category({ onClickBackButton }) {

  const [프로젝트ID,set프로젝트ID] = useState("");
  const [소분류, set소분류] = useState("");

  const [data,setData] = useState([]);

  const handleProjectSearch = () => {
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    fetch( //서버 요청
      `${backUrl}/api/ship/project?page=0&size=100&Project=${프로젝트ID}`,
      data
    )
      .then(async (res) => {
        console.log("프로젝트검색성공");
        const result = await res.json();
        console.log(result);
        setData(result.shipInfos);
      })
      .catch((rej) => {
        console.log("프로젝트검색실패");
        console.log(rej);
      });
  };

  const handleCategoriSearch = () => {
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    fetch(
      //서버 요청
      `${backUrl}/api/ship/category?page=0&size=100&subCategory=${소분류}`,
      data
    )
      .then(async (res) => {
        console.log("소분류검색성공");
        const result = await res.json();
        console.log(result);
        setData(result.shipInfos);
      })
      .catch((rej) => {
        console.log("소분류검색실패");
        console.log(rej);
      });
  };
  const SelectBox3 = () => {
    return (
      <select 
        value={소분류}
        onChange={(e)=>{
        const selected_third = e.target.value;
        set소분류(selected_third);
        console.log(selected_third); 
      }}>
        <option key="third_all" value="">전체</option>
        <option key="01" value="01">A</option>
        <option key="02" value="02">B</option>
        <option key="03" value="03">C</option>
        <option key="04" value="04">D</option>
        <option key="05" value="05">E</option>
        <option key="06" value="06">F</option>
      </select>
      
    );
  };
  return (
    <div className="search">
      <div className="main_img">
        <h1>PID 프로젝트 사이트</h1>
      </div>
      
      <hr style={{margin:0}}></hr>
      
      <form className="search_1">

        <input style={{
          height: 37,
          width: 100,
          borderRadius:10,
          borderWidth:1.5,
          marginTop:5,
          marginBottom:0
        }}type={"button"}
        onClick={onClickBackButton}
        value={"홈"}
        />

        <input style={{
          height: 20,
          width: 150,
          borderRadius:5,
          borderWidth:1.5,
          margin:0
        }}
        type="text" 
        id="pid" 
        placeholder="프로젝트ID" 
        value={프로젝트ID} 
        onChange={(e) => set프로젝트ID(e.target.value)}></input>

        <input style={{
          height: 37,
          width: 100,
          borderRadius:10,
          borderWidth:1.5,
          marginTop:5,
          marginBottom:0
        }}type="button" 
        id="pid_s" 
        value="검색" 
        onClick={handleProjectSearch}></input>

        <SelectBox3></SelectBox3>
        {/* <input
            style={{
              height: 20,
              borderRadius: 5,
              borderWidth: 1.5,
              marginTop: 0,
              marginRight: 10,
            }}
            type="text"
            id="third"
            placeholder="설계사"
            value={소분류}
            onChange={(e) => set소분류(e.target.value)}
        /> */}
        <input
            style={{
              height: 37,
              width: 100,
              borderRadius: 10,
              borderWidth: 1.5,
              marginTop: 5,
              marginBottom: 0,
            }}
            type="button"
            id="item_s"
            value="검색"
            onClick={handleCategoriSearch}
          />
      </form>

      <hr></hr>
      <table>
        <th style={{ padding: 10 }}>이미지</th>
        <th style={{ padding: 10 }}>이미지 이름</th>
        <th style={{ padding: 10 }}>이미지 타입</th>
        <th style={{ padding: 10 }}>심볼 이름</th>
        {data.map((e) => {
          return (
            <tr>
              <td>
                <img
                  className="symbolImg"
                  alt="symbolImg"
                  src={`${backUrl}/api/img?imgName=${e.imgName}&imgType=${e.imgType}`}
                  style={{ width: 200, height: 200 }}
                />
              </td>
              <td>{e.imgName}</td>
              <td>{e.imgType}</td>
              <td>{e.symbolName}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Category;
