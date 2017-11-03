/**
 * for in문에서의 hasOwnProperty메서드를 사용하여 
 * 부모 프로퍼티를 오염 시킬 가능 성을 배재하자.
 */

var man = {
    hands : 2,
    legs : 2,
    heads : 1
};
var human = {
    body : 1
};

man.__proto__ = human;

// 부모의 프로퍼티를 같이 뽑아 온다.
// for(v in man)console.log(v);

// 해결 방법
// 1. 부모의 프로퍼티의 속성값을 변경하자.

/*
var p = man.__proto__;
for(vp in p){
    Object.defineProperty(p,vp,{enumerable : false});
}
for(v in man)console.log(v);
*/

// 2. hasOwnProperty를 사용하여 자신의 속성만을 도출하자
for(v in man)
    if(Object.prototype.hasOwnProperty.call(man,v))
        console.log(v);
