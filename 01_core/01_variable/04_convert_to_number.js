// 숫자 타입으로 변환

console.log("=== 숫자 타입으로 변환 ===");

// 산술 연산자
console.log(10 - '5');  // '+'를 제외하고는 자동으로 정수형으로 변환해준다!
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % "java"); //말이 안되는 연산은 NaN이 뜬다!

// 비교 연산자
console.log(10 > '5');

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');
console.log(+'1');
console.log(+"javascript");
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
console.log(+[]);