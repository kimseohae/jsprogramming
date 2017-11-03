/**
 * 전역 변수라 하여도 var를 암시적으로 선언 하여 할당 하자
 * var a = 10; 으로 선언한 변수는 {value: 10, writable: true, enumerable: true, configurable: false}
 * 에서 볼 수 있듯이 configurable: false 수정여부가 false로 수정 불가능 하게 선언된 반면
 * b = 20으로 전역 변수로 선언되어진 경우 {value: 20, writable: true, enumerable: true, configurable: true}
 * 에서 볼 수 있듯이 수정 여부가 configurable: true 로 수정 삭제가 마음대로 일어 날 수 있다.
 * 즉 원치 않는 삭제 대상이 될 가능성이 있으니 유의 하여 사용 하자.
 */
var a = 10;
b = 20;
(function(){
    c = 30;
})();
console.log(a)
console.log(Object.getOwnPropertyDescriptor(global,'a'))
console.log(Object.getOwnPropertyDescriptor(global,'b'))

delete a;
delete b;
delete c;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);