/*
아래는 자바스크립 변수 선언 및 출력 예시
여러줄 출력 가능
*/
/*
let value = 1;  //let 변수 선언 한줄
console.log(value); // value 변수에 선언된 값을 화면에 출력 한줄
value2 = 2;  //value변수 안에 2값을 대입
console.log(value); //다시  value변수값을 출력 
console.log(value2);
*/

//상수 선언 예제
const a = 1;
// const a = 2; 이렇게 해도 오류 발생, 한번 선언된 것은 불변
//a = 2; //a가 상수로 선언되어 있어서 값을 바꾸면 에러 
const PI = 3.14;
console.log(PI); //상수 출력

//변수 선언(중복된 이름으로도 사용이 가능)
var b = 3;
var b = 5;
console.log(b);

// String(문자 데이터)
// 따옴표를 사용합니다.
let myName = "HEROPY";
let email = 'thesecon@gmail.com';
let hello = `Hello ${myName}?!`
//object 
let obj2 ={
    myName:"HEROPY",
    email : 'thesecon@gmail.com',
    hello : `Hello ${myName}?!`
};
console.log(obj2);
console.log(typeof(obj2));

//콘솔 탭에서 출력
console.log(myName); // HEROPY
console.log(email); // thesecon@gmail.com
console.log(hello); // Hello HEROPY?!
//viewport(body)로 출력
document.write(myName + '<br>'); 
//화면에 출력 및 줄바꿈
document.write(email + '<br>'); 
document.write(hello + '<br>'); 
// 예시 활용 
let main = "안녕"
let main2 = `Hello ${main}`
console.log(main2);

// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냅니다.
let number = 123;
let opacity = 1.57;
console.log(number); // 123
console.log(opacity); // 1.57
document.write(number + '<br>'); // 123
document.write(opacity + '<br>'); // 1.57

// Boolean(불린 데이터)
// true, false 두 가지 값밖에 없는 논리 데이터입니다.
let checked = true; // 1 참 
let isShow = false; // 0 거짓
console.log(checked); // true
console.log(isShow); // false


//typeof(변수이름) -> 결과값은 데이터 타입 출력

console.log(typeof(myName));//문자
console.log(typeof(number));//숫자
console.log(typeof(isShow));//불리언 

// Undefined
// 값이 할당되지 않은 상태를 나타냅니다.
let undef;
let obj = { abc: 123 };
console.log(undef); // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined

// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장합니다. { }
let user = {
 // Key: Value,
 name: 'HEROPY',
 age: 85,
 isValid: true
};
console.log(user.name); // HEROPY
console.log(user.age); // 85
console.log(user.isValid); // true

// Null
// 어떤 값이 의도적으로 비어있음을 의미합니다.
let empty = null;
console.log(empty); // nul
