// dom == document object model
// 자바스크립트 = 객체지향언어
// bom = browser object model 웹브라우저의 기본 객체
let hello = 'hello js';
// window.alert(hello);
// let qa = window.prompt('1+1?');
// window.alert('정답은'+qa+'입니다')
// let ox = window.confirm('자바스크립트는 객체지향언어다.'); //확인=true(참), 취소 = false(거짓)
// window.alert(ox);
//객체 속성
//객체 메서드()
//객체 속성 메서드()

//아이디 객체 변수 대입하기
//변수선언키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1');
const loginBtn = document.getElementById('btn1');
const payBtn =  document.getElementById('pay');
const price =  document.getElementById('price');
console.log(btn1);
btn1.style.color = 'red';
console.log(loginBtn);
console.log(payBtn);
console.log(price);
//클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first');
const li_second = document.getElementsByClassName('second');
const li_last = document.getElementsByClassName('last')[0];
console.log(li_first, li_second, li_last);
console.log(li_first[0])

//태그 객체 변수 생성하기
const header = document.getElementsByTagName('header');
const h1 = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');
const aTag = document.getElementsByTagName('a');
console.log(header, h1, nav, aTag);
console.log(aTag[0]);
console.log(aTag[1]);
console.log(aTag[2]);

//innerHTML 속성 활용
//객체 속성 //읽기
//객체 속성 = 대입값 // 수정or삭제
console.log(header.innerHTML); //undefined -  파일이 존재하지 않음
console.log(header[0].innerHTML); //자식, 자손 읽기
console.log(h1[0].innerHTML);
console.log(btn1.innerHTML);
console.log(li_first[0].innerHTML);

h1[0].innerHTML = '로<br>고';
payBtn.innerHTML = '결제할랑말랑<br>돈쓸랑말랑';
aTag[2].innerHTML = ''; //빈문자열 ==문자열을 비운다 (삭제)
btn1.innerHTML = '';
li_first[1].innerHTML = '1234567890';
price.innerHTML = '<h1>10,000원인듯 1,000,000인듯 가물가물</h1>';
price.style.filter = 'blur(5px)';
nav[0].style.backgroundColor = 'lightblue';
nav[0].style.textAlign = 'center';
nav[0].style.boxShadow = '0 0 10px #000';
nav[0].style.background = 'linear-gradient(90deg, lightcoral, lightblue)';