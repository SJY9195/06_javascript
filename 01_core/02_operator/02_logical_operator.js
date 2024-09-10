
// 논리 연산자
// ||, &&, !

// OR , AND 연산자 표현식의 결과가 때로는 불리언이 아닐 수 있다..
//자바스크립트는 True , False 이전에 Truesy, Falsy로 구분한다!!
console.log('apple' || 'banana');  // 둘다 true일 때는 앞에 것을 출력!
console.log(false || 'banana');   // or 는 false true를 비교할 때 true 값을 출력!

console.log('apple' && 'banana'); // AND 연산자에서는 둘다 true일 경우 뒤에 것을 출력!
console.log(false && 'banana'); // false가 Falsy이므로 false가 출력된다.
console.log(null && 'banana'); // null 이 Falsy이므로 null이 출력된다.

let num = 1;

if(num % 2 == 0){
    console.log("짝수입니다.");
}else{
    console.log("홀수입니다.");
}

num % 2 == 0 && console.log("짝수입니다."); //num % 2 == 0 이 false 이므로 출력 안된다!
num % 2 == 0 || console.log("홀수입니다."); //num % 2 == 0 이 false이고 console.log("홀수입니다.") 이므로 뒤에 값인 "홀수입니다." 가 출력된다!

let obj = null;
// 객체라고 기대하는 변수가 null 또는 undefined 일 때

/* let val = obj.value; // 이상태로 실행하면 obj 가 null이므로 안에 값이 없으므로 에러난다! */
let val = obj && obj.value; // 이렇게 AND 연산자를 해주면 에러가 안나고 obj가 Falsy이고, null 값을 뱉어주므로 예외처리를 해 줄 수있다!