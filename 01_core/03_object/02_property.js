
// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.. cf) 멤버는 필드와 메소드로 구성된다.

let student = {
    name : "유관순",
    age : 16
}

console.log(student);

let obj = {
    normal : "normal value",
    '@ s p a c e @' : "space value",
    "":"",
    0:1,      // 키값으로 문자열로 변환되며 위로 올라가고, 숫자끼리는 오름차순정렬이 된다. 나머지는 입력 순
    var : "var",
    normal : "new normal"
};

let key2 = "test";
obj[key2] = "test value";  //실행될 때 할당된값이 key값으로 들어간것이다! //프로퍼티키를 동적으로 생성한것이다!

console.log(obj);

