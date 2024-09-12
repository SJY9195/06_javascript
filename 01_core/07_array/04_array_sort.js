

// 배열 정렬 기준

let numbers = [];

for(let i=0; i<10; i++){
    numbers[i] = Math.floor(Math.random() * 100) +1; //내림하기 때문에 +1
}
console.log(`정렬 전 numbers : ${numbers}`);

numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`);  //자바스크립트는 기본적으로 문자열 정렬을 한다! 그래서 앞자리에 맞춰 정렬을 한다!

// 배열은 기본적으로 문자열 정렬이 되므로 한자리수, 두자리수가 올바르지
// 않게 정렬 되는 모습을 확인할 수 있음..
// 다른 정렬 기준을 사용하려면 매개변수로 compare 함수 전달


function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}

/*numbers.sort(compare);
console.log("매개변수로 compare 전달 후 숫자 오름차순 정렬");
console.log(numbers);*/

numbers.sort((a,b)=>a-b); // a-b 가 양수면 sort가 자체적으로 순서를 바꾼다
console.log(numbers);



