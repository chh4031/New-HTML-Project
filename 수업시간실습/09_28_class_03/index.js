// input, output
// var input = prompt('Enter string');//기본적인 입력
// alert(input);
// console.log('Start JSBasic');//기본적인 출력



// Variables
// var test = 'test';//var 사용
// const test = 'test';//const 사용
// test = 3;//중간에 3이 들어가면 숫자형이라 아래것이 출력이 안됨.(기존 var), 바뀔때 const이면 오류발생
// console.log(test[0]);



// var test = 'test';
// if(test){//데이터가 존재 true
//     let test = 'example';//hoisting - 프로그램 시작에서 var문을 젤 위로 땡겨버림 -> let으로 해결(블럭안에서 존재)
//     console.log(test);
// }
// console.log(test);//다른 언어는 test가 나와야함. 단 자스는 example이 나옴.



// // Data type
// let s = 'string';
// console.log(typeof s);

// let nl = null;
// console.log(typeof nl);

// let obj = {
//     id : '1234',
//     name : 'Hong'
// };
// console.log(typeof obj);

// let fnc = function f1(){
//     //do something...
// };
// console.log(typeof fnc);



// // Operators
// let n1 = '3';
// let n2 = 3;
// console.log(n1 == n2);//자스에서는 true(내용만 확인), 에러없이 최대한 실행 가능도록 설계된 자스의 특징
// console.log(n1 === n2);//타입까지 비교 false

// let condition = 3;
// let b = condition > 0 ? 100 : 200;//삼항연산
// console.log(b);



// 템플릿 문자열
// const myname = 'hong';
// const newstring = 'hello, ' + myname;//문자열과 함께쓰면 연결해주는 것이 됨. 
// const newstring2 = `Hello, 
//                     ${myname}`;//백틱 `로 씀. 문자열 안에 변수를 포함할 수 있도록. 템플릿 스트링이라함. enter 공백도 가능



//flow control
// let obj2 = {
//     id : '1234',
//     name : 'Hong'
// };

// for(key in obj2) {
//     console.log(key, obj2[key]);
// }//반복을 위한 집합체가 오는것이 자바이나 자스는 배열(of), object(in)이옴 obj2의 필드키값이 key로 들어감.

// let arr = [1,2,3,4,5];
// for(item of arr ){
//     console.log(item);
// };//배열은 키캆이 없으므로 값이 바로 들어감.



// // functions
// function greeting(name, age=20){//name은 매개변수(파라미터)
//     console.log('Hello' + ',' + name);
//     return age+1;
// };//함수 선언
// let newAge = greeting('hong', 21);//함수 호출, hong은 인자(아규먼트)
// console.log(newAge);
// greeting('Hong');//age는 undefined이고, 리턴값은 에러뜸, 그래서 age=20으로 디폴트값을 줌.

// const greeting2 = function (name, age){
//     console.log(`Hello, ${name}`);
//     return age+1;
// };//익명 함수, 정의만 하면 실행할 방법 존재 X(익명이므로), 변수에 할당
// let newAge2 = greeting2('Kim', 25);//이런것이 함수 표현식, 변수이름으로 씀, 함수표현식은 정의전 호출하면 에러, 호이스팅 X
// console.log(newAge2);

// const greeting3 = (name, age=20) => {
//     console.log(`Hello3, ${name}`);
//     return {name : name, age : age+1};//반환값이 2개일때 객체로 반환, 키값 : 반환값 형태
// };//ES6에서 추가된 함수 표현식, 오른값은 리턴값 근데 리턴값없으면 단순 실행 
// //변수에 넣어서 씀. 아니면 정의만 됨. 간단한건 에로우 함수 사용, 길어지면 중괄호로 사용함.하나면 생략 가능
// let newAge3 = greeting3('Cho', 23);
// console.log(newAge3);

// const greeting4 = age => age+1;//매개변수가 1개면 생략가능, return age+1인데 문장 1개라 {}생략, return 도 생략 가능



//객체의 구조분해
// const person1 = {
//     firstName:'Gildong',
//     lastName:'Hong',
//     age:22
// };

// console.log(`Hello, ${person1.lastName} ${person1.firstName} ${person1.age}`);//객체의 값 출력

// const{firstName, lastName} = person1;//person1을 할당함, 왼쪽은 변수값. 객체의 키값을 변수값에 할당시키는 형태
// console.log(`Hello, ${lastName} ${firstName}`);



//배열의 구조분해
// const arr2 = [1, 2, 3, 4, 5];
// const arr_3 = arr2[2];//arr2의 3번재 요소를 가져오고 싶음
// const arr_4 = arr2[3];

// const[,,item3,item4,] = arr2;//비어있는 곳을 뺀 후 해당되는 곳에 변수를 입력함. arr2에서의 값이이 []안의 해당 변수에 맞는 값으로 넣어짐
// console.log(item3, item4);



// // spread operator(...)
// const numbers1 = [1,2,3,4,5];
// const numbers2 = [2,4,6,8,10];

// const numbers3 = [...numbers1, ...numbers2];//해당되는 원소를 쪼개주는 역할(배열형태가 아닌 원소의 형태)
// const [num1, num2, ...restnums] = numbers3;//첫번재 요소와 두번째 요소를 가져와서 넣음. 나머지 요소는 배열 형태로 restnums로 들어감.
// console.log(num1, num2, restnums);

// const fntrest = (first, ...nums) => {//이렇게하면 첫번째요소만 first에 들어가고 나머지는 nums로 들어감. 그런데 []묶고 numbers3값 넣어도 되긴함.
//     console.log(nums);
// };
// fntrest(1,2,3,4,5);

// const user1 = {
//     first: 'Gildong',
//     last: 'Hong',
//     age: 21,
//     membership: 'A'
// };

// const {first, last, ...rest} = user1;//객체에서의 rest에는 first와 last를 뺀 나머지가 들어감.
// console.log(rest);//rest에는 나머지만 출력됨.

// const user2 = {...user1, first: 'Gil', last: 'Lee'};//두번째 객체는 위에거를 복사해서 이름만 바꾸고 싶다. user1의 정보가 user2의 프라퍼티로감.
// //user1의 프라퍼티가 다 들어가있음. 그곳에서의 first의 는 Gil로 덮고, last는 Lee로 덮음. 값만 바뀌게 됨.
// console.log(user2);

// const user3 = {//보통 키명과 변수명(의미를 부여할경우)을 같게할수도 있다. first: first형태임.
//     first,
//     last
// };//위와 같이 변수명과 키명이 같으면 first하나로 퉁쳐버림. (first: first = first)

// for(item of numbers1){
//     numbers3.push(item);
// }//기존 배열 합치는 방식