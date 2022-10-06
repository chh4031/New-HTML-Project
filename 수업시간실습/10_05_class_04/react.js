// React 객체는 위의 CDN에서 가져옴.
const element = React.createElement(
    'h1', //태그명, 엘리먼트 생성
    {id: 'hello'}, //속성값은 id:'Hello'
    'Hello, React!' //건텐츠는 Hello, React!
);

const container = document.getElementById('root'); //document.querySelector도 가능
const root = ReactDOM.createRoot(container); //리엑트 돔이 사용할 것 설정
root.render(element); //랜더 추가

// const root17 = document.getElementById('root');
// ReactDOM.render(element,root); // 17버전용

// 모든 작업을 자바스크립트에서 사용함. 남은 html은 싱글페이지라고 함.



// const element = React.createElement(
//     'div', 
//     {id: 'hello'}, 
//     React.createElement('h1', {id:'hello2'}, 'Hello, React2') ;
// );
//  컨텐츠 부분에 다시 element가 들어갈 수 있다.