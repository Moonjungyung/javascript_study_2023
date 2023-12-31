//getElement 방식
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a');
const first = document.getElementsByClassName('first');
const last = document.getElementsByClassName('last');
console.log(mainTag,hTag[0],contentsCls[0],boxId, first, last);
console.log(aTag, aTag[0], aTag[1], aTag[2]);
//[ES6]querySelctor 방식
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents');
const boxIdQ = document.querySelector('#box');
const aTagQ = document.querySelectorAll('a');
const firstQ = document.querySelector('.first');
const lastQ = document.querySelector('.last');
console.log(mainTagQ,hTagQ,contentsClsQ,boxIdQ, firstQ, lastQ);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTagQ[2]);

//querySelector,querySelectorAll
//객체가 2개 이상일 때 태그 작성 순서상 한개만 인식하고 싶다면
// ==querySelector()
//객체가 2개 이상일 때 모두 잡아서 구분해서 사용하고 싶다면
// == querySelectorAll()
const firstClsQ = document.querySelector('.fisrt');
console.log(firstClsQ);
const lastClsdQ = document.querySelectorAll('.last');
console.log(lastClsQ[0]);