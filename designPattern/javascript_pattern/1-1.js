
/**
 * 함수안에서의 전역 변수 선언을 피하자.
 * 함수안에서 전역 변수를 실행 하는 행위는
 * 전역 객체에 오염을 줄 수 있기 때문에 자재하자.
 */

 function to_bi(){
     var a = b = 10;
     return a;
 }
 var b = 30
 var ret = to_bi();
 console.log(ret * b);

 function as_is(){
     var _a ,_b;
     _a = _b = 10;
     return _a;
 }

 var _b = 30;
 var _ret = as_is();
 console.log(_ret * _b);