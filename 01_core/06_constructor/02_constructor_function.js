
// 생성자 함수

// 객체 리터럴에 의한 객체 생성
const student1 = {
    name : "유관순",
    age : 16,
    getInfo(){
        return `${this.name}은 ${this.age}세 입니다.`
    }
};

// 생성자 함수에 의한 객체 생성
// 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 
// 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

function Student(name, age){  // 생성자 함수는 대문자로 시작..
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name} 은 ${this.age} 세 입니다.`;
    }
}

const student3 = new Student("장보고", 30);
const student4 = new Student("홍길동", 20);   // JS에서 인스턴스는 클래스에 의해 만들어진 객체 뿐만 아니라 생성자에 의해 만들어진 객체도 포함한다.
                                                //cf) 모든 오브젝트(객체)는 인스턴스가 아니다! 모든 인스턴스는 객체이다!
// 메소드 호출
console.log(student3.getInfo());
console.log(student4.getInfo());


class test {
    constructor(name,age,getInfo){
        this.name = name;
        this.age = age;
        this.getInfo = getInfo;
    }
}

const student5 = new test("이순신", 30, function(){});   //student5는 인스턴스이다. (클래스에서 생성된 객체이므로)
console.log(student5);