import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome'; //Welcome 파일 임포트하겠다.
import Welcome2 from './components/welcometo';
import Counter2 from './components/Counter2';
import Counter from './components/Counter1';

function App() { //리턴값이 element(실행시 화면에 나온 내용들)

  // 데이터를 가져왔다고 가정하는것
  const userList = [
    {name : 'Hong', point:13},
    {name : 'Kim', point:29},
    {name : 'Lee', point:21},
    {name : 'Park', point:17},
  ];

  return (
    <div className="App">
      <h1>Hello React!</h1>
        {/* welcome 함수형 컴포넌트 사용 */}
        <Welcome id='Hello' name={userList[1].name}></Welcome>
        <Welcome name='Kim'></Welcome>
        <Welcome name='Lee'></Welcome>

        {/* 여러명이 와도 이렇게 출력가능 */}
        {userList.map(
          user=><Welcome name={user.name}></Welcome>
        )}

        {/* Welcome 클래스형 컴포넌트 사용 */}
        <Welcome2 name='Park'></Welcome2>

        {/* Counter2 컴포넌트 사용 */}
        <Counter2></Counter2>

        <Counter></Counter>

    {/* 위와 같이하면 재활용이 쉬워진다, 값만 바꾸면 같은 내용을 다른값으로 사용가능 */}
    </div>
  );
}

// 컴포넌트는 최상위 엘리먼트 1개만 되야함. 그래서 div안에 Welcome씀 즉 하나의 엘리먼트에서 사용되므로.
// 두개 쓸라면 공색이나 div로 묶어야함.
// jsx에서의 주석 {/* */}
// 리엑트는 컴포넌트를 기능별로 만들어 가는것

export default App; //App이라는 함수 하나만 외부에서 쓰겠다



/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */


      // 컴포넌트는 함수와 클래스로 만듬
      // 데이터를 넘길때는 html 태그형식으로 해서 넘겨줌
      // 받을 때는 객체로 받음 name은 키 Lee는 값
      // 함수에서는 리턴으로 하고
      // 클래스에서는 render를 사용
      // 컴포넌트를 또 만들때는 jsx코드를 사용함.
      
      // 리엑트에서 만들고자 하는건 엘리먼트
      // 엘리먼트 재사용을 위해 컴포넌트를 만듬

      // 컴포넌트 호출할때 변경되는 값은 프라퍼티로 넘김
      // 컴포넌트에서는 props로 받음
      // 컴포넌트 안에서 처리할 데이터를 처리할때
      // 화면을 다시 그리고 싶으면 state로 정의
      // 나머지는 일반 변수로 쓸수 있으나 화면을 처리하진않음
      // 클래스에서 컴포넌트 정의는 생성자에서 정의해야함 this.state 
      // 함수형에서는 useState라는 훅 이란 함수를 사용
      // 초기값을 넘겨주면 두개의 변수를 받음(배열형태)
      // 첫번째는 state로 쓸 변수, 그 변수를 변경할 함수가 두번째
      // 첫번째 값을 가져와서 쓰고, 변경시는 두번째 함수