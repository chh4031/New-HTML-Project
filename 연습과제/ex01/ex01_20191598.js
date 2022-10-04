// 1~n 사이 값중 k의 배수만 더하는 함수 작성
// 조건 : n과 k는 1보다 큰 양수
// k입력 없을시 2값 디폴트
// 소프트웨어개발실습2 101분반 소프트웨어학과 20191598 조현호 
// html에 연결하여 실행하지 않으면 prompt 시 오류 발생!

// 조건에 부합하는 결과값이 도출되도록 하는 범위 내에서 응용함.
/* ★ 과제는 1~n 사이값인데 사용자가 배열의 크기를 10으로 지정하고 각 입력값을 넣음.
 단 이때 사용자가 아무값이나 넣을수도 있음. 그러나 과제 조건에 부합하려면 1 2 3 4 5 6 7 8 9 10 이런식으로 입력하면 됨.
 즉 배열 크기 10일시 1 2 3 4 5 6 7 8 9 10를 입력해서 결과값을 도출할 수 있음.
 사용자에게 좀더 자유로운 입력환경을 제공하기 위해 이렇게 설계함.
 10이란 크기의 배열안에 1~10의 값 이외에도 아무숫자가 들어갈수가 있음. 그러면 들어간 숫자에서 해당 배수에 해당하는 숫자를 더하게 됨. ★*/

const func_add = (arr, {k = 2}) =>{ // k 값 디폴트 
    // console.log(arr.length);// 테스트용
    let result1=0; //,result2=0;
    for(let i=0;i<=arr.length;i++){
        result1 = (arr[i]%k) == 0 ? result1+=arr[i] : result1;//삼항연산자로 축약
        
        // if((arr[i]%k)==0){
        //     result1 += arr[i];//k의 배수의 숫자합
        // }else{
        //     result2 += arr[i];//k의 배수를 제외한 숫자의 합
        // }

    }
    return result1;
};

let arr1=[], arr2=[], input_value, arr_size, k_value;
arr_size = Number(prompt("Array size?"));//배열의 크기지정
for(let i = 0;i < arr_size;i++){//배열의 크기만큼 반복
    input_value = prompt("Enter value, If you want stop=> enter <stop>");//도중에 중단기능
    // console.log(arr_size); //테스트용
    if(input_value != 'stop'){
        if(input_value!=Number(input_value) || Number(input_value) < 0){//조건식, 문자를 걸러내고, 음수값을 걸러내기 위한 구문
            console.log("Error! Retry please.");
            arr_size+=1;//잘못된 값을 입력시에 사용자가 입력하려 한 사이즈만큼 입력해야 하므로 +1
        }else{
            if(!arr2.includes(Number(input_value))){//중복값을 걸러내는 구문
                arr2.push(Number(input_value));
                arr1.push(Number(input_value));
                arr1.sort(function(a, b){ return a - b;});//숫자 정렬을 정확히 하기 위한 함수(비교함수)
            }else{
                console.log("Duplicate value");
            }
        }
    }else{
        console.log('Stop creating array!');
        break;
    }
}

// console.log(typeof(arr1[0])); //테스트용

// let arr1 = [],result = 0;
// for(let i=1;i<=100;i++){
//     arr1.push(i);
// }
// console.log(arr1);
// 함수구현 확인을 위한 테스트 구문

k_value = Number(prompt("Enter multiple:"));

result = func_add(arr1,k_value);// 함수에 대입
console.log(result);// 최종 결과 확인

// 비교함수에 대해
// a - b의 값이 -이면 a가 더 작음
// a - b의 값이 0이면 같음
// a - b의 값이 +이면 a가 더큼
// sort()의 매개변수로 주어서 2개씩 계속 비교해 나감

