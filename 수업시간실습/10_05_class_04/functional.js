// 함수형 프로그래밍
// const logger = function(message){
//     console.log(message);

// };
// const arr = [1, 2, function add(){}];

// arr[2]();


// const myLogger = function(logger){
//     logger("myLog");
// };

// myLogger((message)=>console.log(message));


// const createLogger = function(logger){
//     return function(message){
//         logger(message);
//     }
// };

// const newlogger = createLogger(message => console.log(message));

// newlogger('My message');



// Array 함수
const users = ['Hong', 'Kim', 'Lee', 'Park'];
const userString = users.join(',');// 문자열을 만들어줌, 중간은 구분자임
console.log(userString);


const userList = [
    {name : 'Hong', age : 21},
    {name : 'Kim', age : 27},
    {name : 'Lee', age : 23},
    {name : 'Park', age : 25}
];

// let userList2 = [];
// for(item of userList){
//     if(item.name[0] === 'H'){ //item 값이 바뀌면 출력값이 전부 다 바뀌게 될 수도 있는 문제의 발생, 또한 복잡해서 코드를 읽어봐야 알 수 있다.
//         userList2.push(item); // 또한 userList의 값이 바뀔 수 있다.
//     }
// }

const userList2 = userList.filter(user=>user.name[0]==='H');// 배열의 각 요소를 안에 있는 파라미터로 넘겨준다. 그리고 원소의 갯수만큼 반복, 조건에 만족하면 새로운 배열에 원소를 넣고, 만족안하면 패스, 최종 수행 후 배열을 리턴
// 위의 코드는 복잡하지 않고 필터하는 것을 바로 알 수 있다. (원소, 필터링할 요소)
// 이는 불변성을 만족(userList 바뀌지 않고 새로운 배열에 넣음.), 순수함수도 만족(외부에 영향이 없음), 또한 고차함수(파라미터로 함수를 넘겨줌)
console.log(userList, userList2);
// fiter 조건에 맞는 원소만으로 새로운 배열을 생성해줌.


const userList3 = userList.map(user => `Hello, ${user.name}`);//리턴값을 새로운 배열에 넣어줌. Hello + name요소를 붙여서 반환시켜줌, 그리고 하나의 배열을 만들어서 리턴시켜줌.
console.log(userList, userList3);

const userList4 = userList.map(user => {//{}를 쓸 시 return도 있어야함. map는 변경을 하고 싶을 때 사용함.
    user.age = user.age + 1;
    return user;
})
console.log(userList, userList4);
// map 배열에 각 원소를 변환해서 새로운 배열을 생성


const olderUser = userList.reduce((older, user)=>older.age > user.age ? older:user);//다양한 형태로 사용가능함. reduce는 2개값을 받음 앞에거가 예전값, 그 다음것이 최신값
console.log(userList, olderUser);//결국 나이가 가장 많은 사람이 리턴됨. 즉 order은 객체의 젤 처음값이 되고, 리턴값을 해서 나온것이 다시 order로 가거나 user로 들어가서 결정된다. 그렇게 계속 반복

const userList5 = userList.reduce((obj, user)=>{
    obj[user.name] = user.age;
    return obj;//리턴값은 다음의 arr의 값에 들어감. 초기값을 {}로 지정해서 처음에는 {}값이 드감
}, {});//arr의 초기값 지정 가능 초기값이 {}에 드감
console.log(userList, userList5);
// 처음에는 비어있는 {}임 한바퀴 돌면 Hong:22값이 리턴됨. 그다음호출에는 obj로 들어가짐. Hong:25 Kim:24의 값이 들어감 그다음은 Kim:24가 obj에 드가고 Lee:22가 리턴되고 Hong:25 Kim:24 Lee:22가 됨. 다하면 Park까지 나옴.
//reduce 다양한 목적으로 사용됨.
//fiter + map으로 사용가능 이러한 것을 호출의 체이밍이라고 함.