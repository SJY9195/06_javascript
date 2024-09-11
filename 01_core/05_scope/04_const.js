
// const
// const 키워드는 상수를 선언하기 위해 사용한다.
// let 키워드와 마찬가지로 블록 레벨 스코프를 가지며
// 변수 호이스팅이 발생하지 않는 것 처럼 동작한다..
// 아래에서는 let 키워드와 다른 점을 중심으로 살펴본다..

//const 키워드는 선언과 동시에 초기화 해야한다..
//const x;
const x = 1;

// 재할당이 금지된다.
//x = 2;

// 일반적으로 상수의 이름은 대문자로 선언하고,
// 스네이크 케이스로 표현한다..

// 할인율
const DISCOUNT_RATE = 0.15;
// 정가
let price = 15000;
// 할인가
let discountPrice = price * (1-DISCOUNT_RATE);
console.log(discountPrice);

// const 키워드로 선언 된 변수에 객체를 할당하면 값을 변경할 수 있다.
const student = {
    name : "홍길동",
    age : 20
}

student.name = "유관순";
console.log(student);
student.height = 180;
console.log(student);
delete student.height;
console.log(student);     //할당 된 값을 변경하는건 가능하다.
student = {akwef};  // 객체 자체를 재할당하는건안된다.
