
// 비교 연산자
// 좌항과 우항의 비교 연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다.
// if 문이나 for 문과 같은 제어문의 조건식에서 주로 사용한다..

/*
    동등비교 / 일치비교
    동등비교 : (==, !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
    일치비교 : (===, !==) 연산자는 타입과 값이 모두 일치하는지 비교한다.
    즉, == 는 타입변환을 고려해주고, ===는 타입변환을 고려 않는다! 
*/

// 숫자 1, 문자 '1', true 비교
console.log(`1=='1' : ${1=='1'}`);  //${} 는 {}안에 있는 결과값을 반환 해 주는 역할을 한다! 
console.log(`1 == true : ${1 == true}`);
console.log(`1 === '1' : ${1 === '1'}`);
console.log(`1 === true : ${1 === true}`);

// 숫자 0, 문자 '0', 빈문자열 '', false 비교
console.log(`0 == '0' : ${0 =='0'}`);
console.log(`0 == '' : ${0 ==''}`);
console.log(`0 == false : ${0 == false}`);
console.log(`0 === '0' : ${0 === '0'}`);
console.log(`0 === '' : ${0 ===''}`);
console.log(`0 === false : ${0 === false}`);

// null, undefined 비교
console.log(`null == undefined : ${null == undefined}`);  // null, undefined 는 특별 규칙에 의해 자료형이 변환되지않아도 두값이 같다고 나온다!
console.log(`null === undefined : ${null === undefined}`);

// NaN는 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);

console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`);

// 문자열끼리도 비교가 가능하다.
console.log(`hello === hello : ${'hello' === 'hello'}`);
console.log(`hello !== hello : ${'hello' !== 'hello'}`);

// 대소 비교  
console.log(`apple < banana : ${'apple' < 'banana'}`); //문자열 비교는 아스키코드로 한다!
console.log(`cat < Zoo : ${'cat' < 'Zoo'}`);  //cf) 소문자가 더 큰값이므로 cat이 더 크다!

