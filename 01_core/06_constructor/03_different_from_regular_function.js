

// 일반 함수와 다른점
function Student(name,age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다.`;
    }
}

// 일반 함수와 생성자 함수의 특별한 형식적 차이는 없다..
// new 연산자와 함께 호출하면 생성자 함수로 동작한다..
// 만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다..

const student = Student("강감찬", 35);

console.log(student); //리턴이 없기 때문에 undefined가 출력 된다. new 가없어서 함수로 동작한다!!
console.log(age);

// ES6에서는 new.target 을 지원한다..
// 생성자 함수가 new 없이 호출 되는 것을 방지하기 위해
function Dog(name,age){

    if(!new.target){  // new.target이 Falsy면 !에 의해 true가 되므로 new Dog();을 반환해준다!
        return new Dog(name,age);
    }
    this.name = name;
    this.age = age;
}

// 대부분의 빌트인 생성자 함수(Object, String, Number ...)은
// new 연산자와 함께 호출 되었는지를 확인한 후 적절하게 반환한다..
const obj = Object(); //new를 자동으로 추가해서 호출해준다!
console.log(obj);
