
//산술 연산자
let a = 1;
a++; // a = a + 1; 후순위 연산자
++a; // a = a + 1; 선순위 연산자 
console.log(a); //3

//a = 1;
console.log(a++);// console.log(a); a = a+1;
console.log(++a);// a = a+1; conxole.log(a):

a = 1;
a--; 
console.log(a);

//대입연산자 
a = 1;
a += 3; //  a = a + 3
a -= 3; // a = a - 3
a *= 3; // a = a * 3
a /= 3; // a = a / 3
console.log(a);

//논리연산자 
a  = !true; // ! -> Not연산자 
console.log(a);

//And연산자: 양쪽의 값이 둘다 true일때
b = true && true;// true
console.log(b);
c = true && false;  // false
console.log(c);
//OR 연산자 : 적어도 1개 값이 true일떄 전부 true
let t = true || false;
t = false || true;
t = true || true;
console.log("정담입니다.",t);
//console.log( 8 > 3 && 5 == 5); //false &&true -> false -> ==같다.


a = 3 * 6;
b = 17.5;
tf = a>b;
document.write(a,"<br>");
document.write(b, "<br>");
document.write(tf);