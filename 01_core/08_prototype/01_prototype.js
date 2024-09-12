
// 프로토타입

/*
    모든 객체는 자신의 부모 객체로 연결되는
    프로퍼티인 [prototype] 을 가지고 있음..
    이 때 상속을 받는 부모 객체를 프로토타입 이라고 부른다..
    객체가 특정 프로퍼티나 메소드를 찾을 때 먼저 그 객체에서 찾고
    없으면 객체의 프로토타입에서 찾는다..
    프로토타입이 또 다른 프로토타입을 가지며 부모 객체를 따라 올라가고
    프로토타입 체인이 형성된다.
*/

const obj = {};
console.log(obj.toString());

console.log(Object.prototype.hasOwnProperty("toString"));

const obj2 = {
    toString(){
        return "custom toString";
    }
};

console.log(obj2.toString());

// Object.create 를 이용한 상속

const user = {
    greet(){
        console.log(`안녕, ${this.name}`);
    }
};

const student = Object.create(user);
student.name = "홍길동";
student.study = function(){
    console.log(`${this.name}은 공부중이야..`);
}
student.greet();
student.study();


// __proto__ 방식
const user2 = {
    greet(){
        console.log("hello");
    }
};
const student2 = {
    name: "유관순"
}

student2.__proto__ = user2;
student2.greet();

/*
    __proto__는 사용하지 않는 것을 권장한다..
    안전성, 성능, 명확 관련 문제가 많기 때문이다..  의도하지 않거나 잘못된 상속관계를 가질수가 있다!
    자바스크립트엔진가 직접 건드리기 때문에 성능 이슈가 발생할 수 도 있다!!
*/


// 그!래!서!

// 최근 ES6 이후로는 extends 를 이용한 클래스 기반 상속을 많이 사용한다. 가독성이 좋고, 유지보수가 좋다!

class User{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`안녕하세요 ${this.name}`);
    }
}

class Student extends User{
    constructor(name, grade){
        super(name);   // name을 쓰려면 this를 쓰기전에 반드시 부모생성자를 먼저 호출해야한다!
        this.grade = grade;
        }
        study(){
            console.log(`${this.name} 님은 ${this.grade}학년에서 공부중.`)
        }
}
const student1 = new Student("홍길동",3);

student1.greet();
student1.study();
