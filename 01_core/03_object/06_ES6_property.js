
// 프로퍼티 값 단축 구문

let id = "p-0001";
let price = 30000;

let product = {
    id : id,
    price : price
};
console.log(product);

// ES6 단축 문법

let product2 = {id, price};
console.log(product2);

// 메소드 단축

let dog2 = {
    name : "흰둥이",
    eat : function(food){
        console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
    }
};

dog2.eat("고구마");



// 계산된 프로퍼티 이름  //ES5때는 이렇게 해줘야 한다고 한다

let prefix = 'key';
let index = 0;

let obj = {       
    [prefix+'-'+index++] : index,
    [prefix+'-'+index++] : index,
    [prefix+'-'+index++] : index
};
/* cf) 예전에는 let obj{} 해주고 아래에 따로 [prefix+'-'+index++] : index; 이렇게 작성해줘야했다! 하지만 이제는 그냥 위처럼 안에 넣어도 된다.
let obj = {}
[prefix+'-'+index++] : index;
[prefix+'-'+index++] : index;
[prefix+'-'+index++] : index;
*/
console.log(obj);

let obj2 = {
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index
};
console.log(obj2);