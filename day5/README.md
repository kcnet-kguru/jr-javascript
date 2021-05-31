# ECMAScript 6

## 1.변수
* var 키워드는 변수를 선언할 때 사용. 크게 로컬 변수(Local Variable)과 글로벌 변수(Global Variable)로 구분한다.
* 변수를 구분하는 이유는 scope 때문
```javascript
one = 100;
function get() {
    one = 300;
    console.log("함수: ", one);
}

get();
console.log("글로벌: ", one)
// [결과]
// 함수 : 300
// 글로벌 : 300
```

### "use strict" 사용
* var 키워드를 사용하여 변수를 선언하도록 하기 위해  ES5에서 "use strict"를 도입
* 근본적인 해결 방법이 아닙

### let
* var 의 문제점을 해결하기 위한 것으로 다음과 같은 특징이 있다
* 함수 안에서 작성한 let 변수는 함수가 스코프
* 함수 안에 if(a == b) { let scope = 축구 } 형태로 코드를 작성 했을 때, sports 변수는 함수가 스코프가 아니라 if문의 블록이 스코프
* 같은 스코프에서 같은 이름의 let 변수를 선언할 수 없다.
* let 변수를 선언하면 호이스팅이 일어나지 않는다.


### let 과 this 키워드
```javascript
var music = "음악"
console.log(this.music) // global scope

let sports = "축구"
console.log(this.sports) // not global

```

### const
* const 키워드는 변수에 할당된 값을 변경할 수 없다. const 변수에 할당된 값은 상수가 된다.
* const 가 값을 변경할 수 없다는 점을 제외하면, let 키워드와 기능이 같고, 스코프도 같다.

## 2.arrow(화살표) 함수
* arrow 함수는 function(param) { 코드 } 형태를 축약한 것
* arrow 함수는 이름이 없는 무명/익명(anonymous) 함수
* arrow 함수는 function 키워드보다 간단하게 함수를 선언할 수 있어 편리
* 모든 경우에 사용할 수 없으며, 함수가 실행되는 환경을 고려해야 함

```javascript
(param) => { code }
param => { code }
() => { code }
(param1, param2, , , , ,paramN) => { code }
param =>( { key: value })
(param1, param2, ...rest) => { code }
([one, two] = [1, 2]) => one + two
({key: sum} = {key: 10 + 20 }) => { code }
```
### arguments 사용
* arrow 함수 블록에서 arguments 프로퍼티를 사용할 수 없다.
* arrow 함수에서 arguments를 사용하면 ReferenceError가 발생한다.

### this와 setTimeout()
```javascript
let Sports = function() {
    this.count = 20;
}

Sports.prototype = {
    plus: function() {
        this.count += 1;
    },
    get: function() {
        setTimeout(function() {
            console.log( this === window );
            console.log( this.plus )
        }, 1000)
    }
}

let newSports = new Sports();
newSports.get();
// true
// undefined

// arrow 함수 사용
Sports.prototype = {
    plus: function() {
        this.count += 1;
    },
    get: function() {
        setTimeout(() => {
            this.plus();
            console.log(this.count)
        }, 1000)
    }
}
let newSports = new Sports();
newSports.get();

// 21
```

### prototype
* prototype에 arrow 함수를 연결하면 화살표 함수 블록에서 this가 인스턴스를 참조하지 못합니다.
