// 변수 i를 선언 한다. 이 변수는 아래 for문을 사용하여 값의 인덱스를 저장할 것이다.
var i = 0; 
// 해당 인덱스변수 i가 10보다 작을 때 까지 인덱스를 1씩 증가 하여 실행 한다.
for ( i = 0 ; i <= 10 ; i++ ){ 
    //document객체의 함수 write를 사용하여 브라우저 상에 문자열을 찍는다.
    document.write('Hello javascript!');
    //<br/>테그를 사용하여 줄 바꿈 기호를 추가 할 것이다. ascii = 10, 13
    //ASCII 10은 LF(Line Feed)라는 의미로 현재 줄을 종료 하는 것이고
    //ASCII 13은 CR(Cariage Return)라는 의미로 최초 자리수로 이동 하는 것이다.
    //보통 관례상 window에는 10과 13을 동시에 사용 하여 2바이틑 할당 하는 대신
    //linux는 LF만을 사용하여 1바이트를 전송하게 된다.
    //이는 이종 os간의 바이트 전송시에 알아 두어야 할 사항이다.
    document.write('<br/>');
}