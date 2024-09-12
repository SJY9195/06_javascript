
// 전역 객체, 전역 함수

// 코드가 실행되기 이전에 자바스크립트 엔진이
// 어떤 객체보다도 먼저 생성해놓는 특수한 객체
// 어떤 객체에도 속하지 않은 객체

// 전역 프로퍼티

// Infinity - 무한대를 나타내는 숫자 값
console.log(global.Infinity === Infinity); // global 생략 가능
// 양의 무한대
console.log(10/0);
// 음의 무한대
console.log(-10/0);
console.log(typeof Infinity);

// NaN : 숫자가 아님을 나타내는 숫자
console.log(global.NaN);
console.log(Number('abc'));
console.log(typeof NaN);

// undefined // cf)변수가 선언만 되고 초기화값이 들어가지 않았을때 undefined가 뜬다!
console.log(global.undefined);
console.log(typeof undefined);
