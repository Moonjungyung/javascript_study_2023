//배열과 객체
const array1 = ['html','css','js']
//전체 배열 출력(테스트용 전체 정상 확인 및 인덱스번호 확인)
console.log(array1)
//개별 배열 직접출력(이벤트, 속성, 메서드 동적 결과 제작)
console.log(array1[0])
//DOM 변수 생성
const li = document.querySelectorAll('ul li')
console.log(li) //전체 정상 출력, 인덱스 번호 확인 등
console.log(li[1]) //개별 출력(이벤트, 속성, 메서드 활용)
// ------------------- 객체
// 배열은 2개 이상의 데이터가 서로 연관되어 있어야 한다.
//쇼핑몰 옵션 :size배열, color배열, option배열 개별구성
// const product_size = ['S','M','L',]
// const product_color = ['white','black','yellow']

//객체는 2개 이상의 데이터가 속성: 값으로 이루어져 있기 때문에
//큰 분류만 같다면 다양한 속성을 하나의 객체로 취급할 수 있다.
const shop = {
    size : ['S','M','L'],
    color  : ['white','black','yellow']
}
console.log(shop)
console.log(shop.size[1])
console.log(shop.color[1])
const cat1 = {
    color : 'black',
    age : 1
}
console.log(cat1) //전체 확인
console.log(cat1.color) //객체,속성 개별출력
console.log(cat1.age)
//객체 내 속성값으로 배열 삽입한 경우
const cat2 = {
    color : ['white', 'brown', 'black'],
    age:2
}
console.log(cat2)