
// 함수 표현식


let hello = function(name){  //함수 선언문과 달리 이름을 함수 이름 생략가능하다!
    return`${name}님 안녕하세요`;
}

console.log(hello("홍길동"));

let calc = function add(a,b){
    return a+b;   
}    //호출 할 때는 calc로 불러야한다! (표현식에 담겨있으면 함수이름을 불러도 호출이 안된다!)

console.log(calc(10,20));
/* console.log(add(10,20)); add는 인식 못해서 오류가 난다.*/
