import '../css/test.css';
function test() {

  return (
    <div className="App">
      <div className='main_img'>
        <img src="logo192.png"></img>
        <h1>PID 도면 관리 시스템</h1>
      </div>
      <hr></hr>
      <div className='search'>
        <form className='search_1'>
          <input type="text" id='pid' placeholder='프로젝트ID'></input>
          <input type="submit" id='pid_s' value="검색"></input>
        </form>

        <form className='search_2'>
          <input type="text" id='first' placeholder='대분류'></input>
          <input type="text" id='second' placeholder='중분류'></input>
          <input type="text" id='third' placeholder='소분류'></input>
          <input type="submit" id='item_s' value="검색"></input>
        </form>
      </div>
      <hr></hr>
    </div>
  );
}

export default test;

