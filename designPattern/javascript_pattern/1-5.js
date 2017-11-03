/**
 * eval로 프로퍼티를 접근 하는 방법은 피하고 [] 로 접근 하자
 */

var obj = {name:'jhLee'}
var property = 'name';
console.log(eval('obj.'+property)); // stupid

console.log(obj[property]); // greate