import React, { useState } from "react";
import { useForm } from "react-hook-form";

const backUrl = "http://localhost:8080";

function Project({ onClickBackButton }) {
  // 2. const {onClickBackButton} = props
  // 1. const onClickBackButton = props.onClickBackButton;

  const [testValue, setTestValue] = useState("");

  const [대분류, set대분류] = useState("");
  const [중분류, set중분류] = useState("");
  const [소분류, set소분류] = useState("");

  const [data, setData] = useState([]);

  const handleClickSearch = () => {
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    fetch(
      //서버 요청
      `${backUrl}/api/ship/category?page=0&size=100&largeCategory=${대분류}&middleCategory=${중분류}&subCategory=${소분류}`,
      data
    )
      .then(async (res) => {
        console.log("성공");
        const result = await res.json();
        console.log(result);
        setData(result.shipInfos);
      })
      .catch((rej) => {
        console.log("실패");
        console.log(rej);
      });
  };

  const handleChangeTestInput = (e) => {
    setTestValue(e.target.value);
  };

  const SelectBox1 = () => {
    return (
      <select 
        value={대분류}
        onChange={(e)=>{
        const selected_first = e.target.value;
        set대분류(selected_first); 
        console.log(selected_first);
      }}>
        <option key="first_all" value="">전체</option>
        <option key="01" value="01">벨브</option>
        <option key="02" value="02">모듈</option>
      </select>
    );
  };

  const SelectBox2 = () => {
    return (
      <select 
        value={중분류}
        onChange={(e)=>{
        const selected_second = e.target.value;
        set중분류(selected_second); 
      }}>
        <option key="second_all" value="">전체</option>
        <option key="01" value="01">벨브</option>
        <option key="02" value="02">게이트벨브</option>
        <option key="03" value="03">sum벨브</option>
        <option key="04" value="04">second벨브</option>
        <option key="05" value="05">third벨브</option>
        <option key="01" value="01">모듈</option>
        <option key="02" value="02">fi모듈</option>
      </select>
      
    );
  };
  
  const SelectBox3 = () => {
    return (
      <select 
        value={소분류}
        onChange={(e)=>{
        const selected_third = e.target.value;
        set소분류(selected_third); 
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
    <div>
      <div className="main_img">
        <h1>PID 프로젝트 사이트</h1>
      </div>
      <hr style={{margin:0}}></hr>

      
      <div className="search">
        
        <form className="search_2">
          
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

          <SelectBox1></SelectBox1>
          <SelectBox2></SelectBox2>
          <SelectBox3></SelectBox3>
          {/*<input
            style={{
              height: 20,
              borderRadius: 5,
              borderWidth: 1.5,
              marginTop: 0,
              marginRight: 10,
            }}
            type="text"
            id="first"
            placeholder="대분류"
            value={대분류}
            onChange={(e) => set대분류(e.target.value)}
          />
          
          <input
            style={{
              height: 20,
              borderRadius: 5,
              borderWidth: 1.5,
              marginTop: 0,
              marginRight: 10,
            }}
            type="text"
            id="second"
            placeholder="중분류"
            value={중분류}
            onChange={(e) => set중분류(e.target.value)}
          />
          <input
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
            onClick={handleClickSearch}
          />
        </form>
      </div>
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

export default Project;
