//ES6 DOM 쉽게 관리할 수 있는 for ~ in ~of ~ Each
const study = ['html', 'css','javascript','design']
//기본 for 문법 for(변수생성;조건식;증감식){실행결과}
for(let i=0; i<=study.length-1; i++){
    console.log(study[i])
}
//for ~in (index number)
for(let i in study){
    console.log(i)
}
//for ~of 문법 (DOM)
for(let i of study){
    console.log(i)
}
const a = document.querySelectorAll('.box a')
for(let i in a){
    console.log(i) //DOM index+기본속성 출력
}
for(let i of a){
    console.log(i) //DOM 객체 출력
    i.addEventListener('mouseover',function(){
        console.log(this)
        i.style.backgroundColor = 'aqua'
    })//mouseover end
    i.addEventListener('mouseout',function(){
        i.style.backgroundColor = 'lightcoral'
        i.style.color = 'white'
    })//mouseout end
    i.addEventListener('click',function(){
        window.alert('준비중입니다.')
    })//click end
}//for of boxA end
//for in 인덱스 위주 제어
//for of 객체 위주 제어
//forEach 인덱스, 객체, 배열 동시제어
const num = [20,21,22,23,24,25]
/*
    객체.forEach(function(객체매개변수, 인덱스매개변수, 배열매개변수){
        매개변수를 활용한 실행 속성 및 메서드 작성위치
    })
    * 매개변수명은 의미만 맞게 자유로이 설정 가능
    * 매개변수 순서에 따라 객체,인덱스,배열 지정이니 순서 주의
    * 매개변수 필요한 대상만 작성 가능
*/
// num.forEach(function(t, i, a){})
// num.forEach(function(dom, in, ar){})
a.forEach(function(target, index, array){
    console.log(target)
    console.log(`index=${index}`)
    console.log(`array=${array}`)
    console.log('--------------')
    target.addEventListener('mousedown',function(){
        target.style.color = 'red'
    })
})