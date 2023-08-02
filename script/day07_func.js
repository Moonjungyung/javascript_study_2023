//함수 생성 > 호출
//함수 생성 후 호출식을 작성하지 않으면 함수결과를 볼수없다!
//1. 생성 : function 함수명(매개변수명)(재사용함수문법)
//2. 호출 : 함수명()
function func1(str){//접속 회원에 맞춤형 인사
    console.log(`${str}님 어서오세요!`)
}//생성함수 end
func1('홍길동')
func1('abc1234') //호출
//---------------------
//함수 기능 : 리턴(return) 함수결과값 외부로 반환명령
function func2(a){
    return a+1 //리턴 활용 함수의 결과값만 외부로 반환
}
func2(50) //함수결과값을 출력하는 메서드가 없어 출력X
console.log(func2(50)) //함수결과를 호출앞 메서드에 의해 출력o
// window.alert(func2(100))
document.write(func2(10))
//------------------------------------
function func3(a, b){
    return a*b //함수 내 return은 1개만 존재
}
console.log(func3(10,30))
console.log(func3(2,3))
//------------------------------------
let total = 0
function func4(a){
    total = a
    total++
    return total
    total++ //return 뒤에 있는 js는 실행하지 못함
}
console.log(func4(10))
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2 //30
    num2 = a+b //num2 = 6
    num1 += num2 //36
    return num1 //num1 = 36
}
console.log(func5(2,4))
//-----------------------
const txtInput = document.querySelectorAll('.box .txt')
console.log(txtInput)
txtInput[0].addEventListener('focus',function(){
    bg(txtInput[0],'yellow');
    text(txtInput[0])
})
txtInput[1].addEventListener('focus',function(){
    bg(txtInput[1],'aqua');
})
txtInput[2].addEventListener('focus',function(){
    bg(txtInput[2],'green');
})
//함수 = 반복되는 재사용 문법, 매개변수 = 재사용문법 내 수정데이터
function bg(target,bc){
    return target.style.backgroundColor = bc
}
function text(target){
    return target.style.color = 'blue'
}
//------------
//off -> on 이미지 변경
//마우스를 나갔을 때 on -> off 이미지 변경
const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg) //변수 정상 확인
likeImg.addEventListener('mouseover',function(){
    // likeImg.src = './img/heart_on.png'
    //this = 이벤트 자체 대상
    onoff(this,'heart','on')
})
likeImg.addEventListener('mouseout',function(){
    // likeImg.src = './img/heart_off.png'
    onoff(this,'heart','off')
})
ideaImg.addEventListener('mouseover',function(){
    // ideaImg.src = './img/idea_on.png'
    onoff(this,'idea','on')
})
ideaImg.addEventListener('mouseout',function(){
    // ideaImg.src = './img/idea_off.png'
    onoff(this,'idea','off')
})
function onoff(target,name,status){
    return target.src = `./img/${name}_${status}.png`
}