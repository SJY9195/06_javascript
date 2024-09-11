
// length 는 요소의 갯수를 나타내는 0 이상의 정수를 값으로 갖는다..
console.log([].length);
const arr = [1,2,3,4,5];
console.log(arr.length);

// length 프로퍼티 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다..
arr.push(6); // 인자로 전달한 요소 추가
console.log(arr.length);
arr.pop(); // 마지막 요소 제거
console.log(arr.length);

// 현재의 length보다 작은 값을 주면 배열의 길이가 줄어든다.
arr.length = 3;   // 뒤에 요소인 4,5는 짤려서 3까지만나오게된다!!
console.log(arr);

// 현재의 length 보다 큰 값을 할당하면
arr.length = 10;  //안의 요소는 비어져있지만 인데스길이가 그만큼 늘어난다!
console.log(arr);

// 자바스크립트는 배열안의 값을 비어져있어도 실행이 된다. 그래서 잘 보고 안의 요소를 채워줘야 한다!
const arr2 = [null,2, ,4];
console.log(arr2);