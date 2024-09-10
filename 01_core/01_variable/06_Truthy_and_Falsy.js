
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truethy Falsy 로 구분한다..
// 암묵적 타입 변환이 일어난다..

let test1;
console.log(!!test1);  // undefined 는 Falsy 이므로 !는 true !!는 false이다!! false로 출력하고 싶을때 쓴다!!


// 객체 리터럴
let test = {
    a : null,
    b : 0,
    fun(){   //fun = function
        console.log("testtest");
        return "test";
    }
};
// test = null 이면 오류가 난다!
if(test?.b){       //'test?' 는 test가 null인지 아닌지 확인해준다! test가 null 이면 값을 꺼낼 수없으니까 오류뜨므로 먼저 확인해주는게 좋다!
    console.log(true);
}else{
    console.log("false");   //test.b 값은 0이므로 Fasly 이므로 false가 출력된다!!
}

test.b ? console.log(true) : console.log(false);

console.log(test.fun());
