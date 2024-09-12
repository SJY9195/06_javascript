
// 배열 메소드

const arr = [];
const arr2 = Array();

// indexOf
// indexOf : 배열에서 요소가 위치한 인덱스를 리턴
// lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
// includes : 배열에 해당 요소 포함 여부 리턴
const foodList = ["물회", "삼계탕", "냉면", "수박", "물회"];

console.log(`"foodList.indexOf("물회") : ${foodList.indexOf("물회")}`);
console.log(`"foodList.indexOf("물회",1) : ${foodList.indexOf("물회")}`);
console.log(`"foodList.indexOf("삼겹살") : ${foodList.indexOf("삼겹살")}`);

console.log(`"foodList.lastindexOf("물회") : ${foodList.lastIndexOf("물회")}`);
console.log(`"foodList.lastindexOf("물회",1) : ${foodList.lastIndexOf("물회",1)}`);
console.log(`"foodList.lastindexOf("삼겹살") : ${foodList.lastIndexOf("삼겹살")}`);

console.log(`"foodList.includes("물회") : ${foodList.includes("물회")}`);
console.log(`"foodList.includes("물회") : ${foodList.includes("삼겹살")}`);


// .push : 배열의 맨 뒤에 요소 추가
// .pop : 배열의 맨 뒤에 요소 반환 후 제거
const chineseFood = ["짜장면", "짬뽕", "탕수육"];

console.log(`push 전 chineseFood : ${chineseFood}`);

chineseFood.push("칠리새우");
chineseFood.push("유린기");

console.log(`push 후 chineseFood : ${chineseFood}`);

console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);

console.log(`pop 후 chineseFood : ${chineseFood}`);

// unshift : 배열의 맨 앞에 요소 추가
// shift : 배열의 맨 앞 요소 반환 후 제거

chineseFood.unshift("탕수육");
chineseFood.unshift("칠리새우");

console.log(`unshift 후 chineseFood : ${chineseFood}`);

console.log(`shift : ${chineseFood.shift()}`);
console.log(`shift : ${chineseFood.shift()}`);

console.log(`shift 후 chineseFood : ${chineseFood}`);

// concat : 두 개 이상의 배열을 결합
const idol1 = ['아이브', '에스파'];
const idol2 = ['뉴진스', '르세라핌'];
const idol3 = ['핑클','SES'];

const mix = idol1.concat(idol2);
console.log(mix);

const mix2 = idol3.concat(idol1,idol2);
console.log(mix2);

// slice : 배열의 요소 선택 잘라내기
// splice : 배열의 index 위치 요소 제거 후 추가

const front = ["html", "css", "javascript", "jQuery"];

// slice(시작인덱스, 종료인덱스)
console.log(`front.slice(1,3) : ${front.slice(1,3)}`);   // 1이상 3미만
console.log(front);

// splice(인덱스, 제거수, 추가값1, 추가값2, ....)
console.log(`front splice(3,0,"React") : ${front.splice(3,0,"React")}`);
console.log(front);

console.log(`front splice(4,1,"flutter") : ${front.splice(4,1,"flutter")}`);  // 4번째 인덱스값을 제거하고 추가!
console.log(front);


// join : 배열을 구분자로 결합하여 문자열로 반환
const snackList = ["사탕", "초콜릿", "껌", "과자"];
console.log(snackList);
console.log(`snackList : ${snackList}`);//템플릿리터럴사용하면 .to String 생략
console.log(`snackList.join() : ${snackList.join()}`); 
console.log(`snackList.join("/") : ${snackList.join("/")}`);

// reverse : 배열의 순서를 뒤집음
console.log(`[1,2,3,4,5].reverse : ${[1,2,3,4,5].reverse()}`);