
// in 연산자

// 프로퍼티 존재 여부 확인
// for 문과 함께 객체 내부 키 순회

let student = {
    name : "유관순",
    age : 16,
    test : undefined
}

console.log("name" in student); // student 객체 안에 키가 있는지 확인
console.log("age" in student);
console.log("test" in student);
console.log("height" in student);

// for in 반복문

for(let key in student){
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
}
