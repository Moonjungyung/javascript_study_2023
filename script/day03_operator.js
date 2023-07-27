//자바스크립트 연산자
let a = 10;
let b = 5;
let c = 1;
console.log(`${a}+${b}=${a+b}`);
console.log(a+'+'+b+'='+(a+b));
console.log(`${a}-${c}=${a-c}`);
console.log(`${b}x${c}=${b*c}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`);
console.log('---------------------');
//연결연산자
console.log('10'+10); //1010 연결연산자
console.log(10+10); //20 더하기연산자
console.log(typeof('10'+10)); //string
console.log(typeof(10+10)); //number
console.log('----------------------');
let age = 20;
// age = age+1;
age += 1 // age = age+1
console.log(`${age}살`);
age -= 1 // age = age-1
console.log(age);
age %= 3 //age = age%3
console.log(age);
age *= 5 //age = age*5
console.log(age);
age /= 3 //age = age/3
console.log(age);
console.log('----------------------');
//복합 대입 연산자를 이용한 태그 생성방법
let cart_li = '<ul>' //빈 장바구니(초기)
//참기름 1개 장바구니 담기
cart_li += '<li>참기름 1개</li>';
cart_li += '<li>베이글 2개</li>';
cart_li += '</ul>';
console.log(cart_li);
console.log('----------------------');
//태그생성메서드 createElement('생성태그명')
let cartNewLi = document.createElement('ul');
const cart_content = document.querySelector('#cart .contents');
cartNewLi.innerHTML += '<li>참기름 1병</li>';
cartNewLi.innerHTML += '<li>베이글 2개</li>';
console.log(cartNewLi);
cart_content.appendChild(cartNewLi)
