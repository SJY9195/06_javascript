
// 빌트인 전역 함수

// isFinite
// 전달 받은 인수가 정상적인 유한수인지 검사하는 함수
// 유한수이면 true, 무한수이면 false (NaN도 false)
console.log(isFinite(10));
console.log(isFinite('10'));
console.log(isFinite(null));

console.log(isFinite(Infinity));
console.log(isFinite(NaN));
console.log(isFinite("abc"));
console.log("--------------------------");

// isNaN
// 전달 받은 인수가 NaN 인지 검사하여 결과를 불리언으로 반환
// 전달 받은 인수가 숫자가 아닌 경우 숫자로 타입 변환 후 검사 진행
console.log(isNaN(NaN));
console.log(isNaN(10));

console.log(isNaN("abc"));
console.log(isNaN(""));  // 빈문자열은 0이니까 숫자취급되어 false이다!
console.log(isNaN(true)); //true는 1로 변환되서 반환!
console.log(isNaN(undefined));

console.log("--------------------------------");

// parseFloat  문자열을 숫자로 바꿔준다!
console.log(parseFloat("10.01"));

// 공백으로 구분 된 문자열은 첫 번째만 반환
console.log(parseFloat("10 23 30"));

// 숫자가 아닌 문자열은 제외하고 반환
console.log(parseFloat("10cm"));

// 앞 뒤 공백은 무시한다..
console.log(parseFloat("  1004   "));

// encodeURI
// URI 를 문자열로 전달 받아 어떤 시스템에서도 읽을 수 있게 변환
const uri = "http://greedy.com?name=홍길동&job=student";
const enc = encodeURI(uri);
console.log(enc);

// decodeURI
// 인코딩 된 URI 를 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);

