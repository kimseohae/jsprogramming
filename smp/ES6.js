/**
 * ES6에서 새로 나온 개념
 * 일반
 *      let = 블록 범위 지원
 *      const = 상수 지원
 *      defaultValue 지원
 *      스프레드 표현식/확장 표현식 지원 ( ... )
 *      클레스 지원
 * 
 * 문법
 *      템플릿 리터럴 = ${출력}
 *      객체 단위에서 []접근 지원
 *      함수 접근자 v : k() => k() 지원
 *      분할 할당 지원
 * 
 * 객체
 *      Array.prototype.find, findIndex
 * 
 * 객체 해체 할당 = 객체가 지니는 프로퍼티를 해체하여 할당한다.
 */

    // let
    // 블록 단위로 범위를 지정 하는게 가능해 졌다.
    // [[var]]
    for(var vVar = 0 ; vVar < 10 ; vVar++);
        console.log(vVar === 10);
    // [[let]]
    for(let vLet = 0 ; vLet < 10 ; vLet++);
    try{
        console.log(vLet === 10);
    }catch(e){
        console.log('let declare is block support')
    }

    // const
    // 상수의 사용이 가능하게 되었다.
    // [[es5]]
    var o = (function(name){return function(){return name;}})('jhLee');
    console.log(o())

    // [[es6]]
    const v = 'jhLee';
    try{ v = 'shLee'; }catch(e){ }
    console.log(v);

    // defaultValue
    // 파라미터로 넘어 오지 않은 데이터를 초기화 하는데 사용
    // [[es5]]
    function es5f(a,b,c){
        a = a||10;
        b = b||5;
        c = c||1;
        console.log('es5',a,b,c);
    }
    
    es5f(undefined,1,undefined);

    // [[es6]] null은 임의적인 값이므로 기본값으로 치환하지 않는다.
    function es6f(a=10,b=5,c=1){
        console.log('es6',a,b,c);
    }
    es6f(undefined,1,undefined);


    // 스프레드 표현식/확장 표현식 지원
    // 동적인 파라미터를 처리 하는데 사용
    // [[es5]]
    function spf5(arr){
        var a = new Array();
        if(arguments.length > 1){
            for(z in arguments) {
                a.push(arguments[z])
            }
        } else {
            a.push(arr);
        }
        console.log('es5',a);
    }
    spf5(1);
    spf5(1,2,3);
    // [[es6]]
    function spf6(a,...b) {
        b.unshift(a);
        console.log('es6',b);
    }
    spf6(1);
    spf6(1,2,3);


    // 템플릿 리터럴
    // 문자열 가운데 ` 문자열과 ${}을 사용하여 이스케이핑한다
    const name = 'jhLee';
    const age = 30;
    // [[es5]]
    const a = 'name is '+name+'\tage is '+age;
    console.log(a);
    // [[es6]]
    const b = `name is ${name}\tage is ${age}`;
    console.log(b);


    // 객체 단위에서 []접근 지원
    // 객체 리터럴을 생성 할 떄 [] 접근 자를 사용해 초기화 가능
    // [[es5]]
    var o = {varsion : 'es5',name : 'jhLee'};
    o['addreess-'] = '대구광역시 중구 동인동';
    
    console.log(o)

    // [[es6]]
    var o = {
        varsion : 'es6',
        name : 'jhLee',
        ['addreess-'] : '대구광역시 중구 동인동'
    }
    console.log(o);

    // 함수 접근자 v : k() => k() 지원
    // 객체상에서 함수를 선언시에 f : function(){} 으로 할당 하던걸 f(){}으로 할당 가능
    // [[es5]]
    var o = {
        f : function(){
            console.log('es5');
        }
    }
    o.f();
    // [[es6]]
    var o = {
        f(){
            console.log('es6'); 
        }
    }
    o.f();


    // 분할 할당 지원 (변수 할당)
    // 객체에 할당 된 프로퍼티를 분할하여 재 할당 가능
    // [[es5]]
    var arr = [1,2,3,4,5];
    var obj = {a:1,b:2,c:3,d:4,e:5};
    var a1,b1,c1,d1,e1;
    a1 = arr[0];b1 = arr[1];c1 = arr[2];d1= arr[3];e1 = arr[4];
    console.log('(arr)es5',a1,b1,c1,d1,e1);

    a1 = obj.a;b1 = obj.b;c1 = obj.c;d1 = obj.d;e1 = obj.e;
    console.log('(obj)es5',a1,b1,c1,d1,e1);

    // [[es6]]
    var arr = [1,2,3,4,5];
    var obj = {aa:1,bb:2,cc:3,dd:4,ee:5};
    var a1,b1,c1,d1,e1;
    [a1,b1,c1,d1,e1] = arr;
    console.log('(arr)es6',a1,b1,c1,d1,e1);

    var {a1:aa,b1:bb,c1:cc,d1:dd,e1:ee} = obj;
    console.log('(obj)es6',a1,b1,c1,d1,e1);
    var {aa,bb,cc,dd,e = 100} = obj;
    console.log('(obj)es6',aa,bb,cc,dd,e);


    // 분할 할당 지원 (파라미터 할당)
    // 아규먼트로 넘어온 프로퍼티를 분할하여 재 할당 가능
    // [[es5]]
    function fnc(args){
        var name = args.name;
        var age = args.age;
        console.log('es5',name,age);
    }
    fnc({name:'jhLee',age:30});

    // [[es6]]
    function fnc({name,age}){
        console.log('es6',name,age);
    }
    fnc({name:'jhLee',age:30});
    function fnc({name :n ,age : a}){
        console.log('es6',n,a);
    }
    fnc({name:'jhLee',age:30});


    //클래스 지원
    // [[es5]]
    var Car = function (id, speed) {
        this.id = id;
        this.run(speed);
    };
    Car.prototype.run = function (speed) {
        console.log('es5',speed);
    };
    new Car('kia', 1000);
    

    // [[es6]]
    class CarEs6 {
        constructor (id, speed) {
            this.id = id;
            this.run(speed);
        }
        run (speed) {
            console.log('es6',speed);
        }
    }
    new CarEs6('kia', 500);




    // Array.prototype의 find와 findIndex 메서드 추가
    // 해당 값의 인덱스를 반환한다.
    // [[es5]]
    var i =[ 1, 3, 4, 2 ].filter(function (x) { return x > 3; })[0]; // 4
    console.log('es5',i);
    // [[es6]]
    var i =[ 9, 8, 7, 6, 5, 4, 3 ].find(x => x > 3); // 4
    var fi =[ 3, 4, 2, 1, 6, 4 ].findIndex(x => x > 3); // 2
    console.log('es6',i);
    console.log('es6',fi);