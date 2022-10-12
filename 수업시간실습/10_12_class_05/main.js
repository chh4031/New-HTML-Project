// Array
const userList1 = [
    {name:'Hong', point:13},
    {name:'Kim', point:29},
    {name:'Lee', point:21},
    {name:'Park', point:17}
];


// Array.map() - 배열 입력후 새로운 배열리턴(단 데이터를 변환시킴), ()안에는 변환함수가 드감 ★시험나옴!!!
const userList2 = userList1.map(user1 => `<h3>Hello, ${user1.name}</h3><p>point:${user1.point}</p>`);
console.log(userList1, userList2);


// Array.filter()
const userList3 = userList1.filter(user1 => user1.point >= 20).map(user2 => `<h3>Hello, ${user2.name}</h3><p>point:${user2.point}</p>`)
console.log(userList1, userList3);
// Array.filter().map() => 함수의 체이닝(filter의 리턴값으로 바로 map()을 활용함.)


// Array.reduce() 다양한 용도, 타입을 바꾼다거나(배열을 객체로) 이전의 결과가 다음에 영향을 미치는 경우에 사용함. reduce안에는 인자 2개 => 변환함수, 초기값
const userObj = userList1.reduce((obj, user)=>{
    obj[user.name] = user.point; // 키값 user.name values는 user.point
    return obj;
}, {}); // 연산이 없어 빈 객체를 넘김. obj는 초기값 {}빈객체가 됨.
console.log(userList1, userObj);


// 위 3개는 매우 중요

