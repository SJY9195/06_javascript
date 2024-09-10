

// null 병합 연산자
// ES11 에서 도입된 연산자로 좌항의 연산자가 null 또는 undefined 인 경우
// 우항의 피연산자를 반환하고 그렇지 않으면 좌항의 피연산자를 반환한다.
// 변수의 기본 값을 설정할 때 유용하다. cf) default와 비슷한 개념이다!

let test = null ?? '기본 값';
console.log(test);

// 단, 빈 문자열은 false 취급한다.null이나 undefined으로 취급이 안되서 그값 자체를 반환한다!
let value = '' ?? '기본 값'; //빈문자열이 출력된다. null이나 undefined이 아니라서 좌항이 반환된다는걸 보여주는것!!
console.log(value);