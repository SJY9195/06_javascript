
// 프로퍼티 값 변경, 추가, 삭제

let dog = {
    name : "뽀삐"
}

dog.name = "흰둥이";
// dog['name'] = "흰둥이";
console.log(dog);

// 프로퍼티 동적 추가
dog.age = 5;
console.log(dog);
// dog['age'] = 5;

// 프로퍼티 삭제
// delete 연산자는 객체의 프로퍼티를 삭제한다.
// 존재하지 않는 프로퍼티를 삭제하면 에러 없이 무시된다.
delete dog.age;
console.log(dog);
delete dog.age;  //에러없이 무시된다.
console.log(dog); 