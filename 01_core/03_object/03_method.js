
// 자바스크립트 함수는 프로퍼티 값으로 사용할 수 있다..

let dog = {
    name : "뽀삐",
    /*eat : function(food){
        console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
    }*/
    eat : (food) => {   // cf) 화살표 함수는 this.를 못쓴다! 
    console.log(`${dog.name}는 ${food}를 맛있게 먹어요`);

    /* 혹은
    eat : (name,food) => {   // cf) 화살표 함수는 this.를 못쓴다! 
    console.log(`${dog.name}는 ${food}를 맛있게 먹어요`);
    dog.eat("뽀삐","고구마");로 해도 된다.
    */
  }
};

dog.eat("고구마");

