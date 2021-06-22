# 스트릭트 모드 사용
* strict 모드는 ES5(ECMA Script 5)에 추가된 키워드 이다.
* strict 모드 사용 시 엄격모드가 적용 되 그간 묵인 되었던 에러가 표출 된다.

```javascript
"use strict"
var v = "Hi I'm strict mode script!";

// 함수에서 strict 선언
function strict() {
    'use strict'
    function f(){
        
    }
}

```

## strict 모드 적용
```javascript
// 선언하지 않고 변수 사용 (x)
"use strict";
testvar = 4;

// get으로 선언된 객체 수정 (x)
"use strict"
var obj = {
    get x() {
        return 17;
    }
}
obj.x = 5;


// arguments를 변수 또는 함수, 매개 변수의 이름으로 사용할 수 없음
"use strict"; 
arguments++; 
var obj = { set p(arguments) { } }; 
try { } catch (arguments) { } 
function arguments() { } 
var f = new Function("arguments", "'use strict'; return 17;");

// this의 값이 null 또는 undefined인 경우 전역 객체로 변환하지 않습니다.
"use strict";
function fun() { return this; }
console.log(fun());
console.log(fun.call(2));
console.log(fun.apply(null));
console.log(fun.call(undefined));
console.log(fun.bind(true)());

```

## strict mode js 병합
* 스트릭트 모드와 일반 모드의 파일은 절대 병합하지 마라
```javascript
(function() {
    // file1.js
    "use strict";
    function f() {
        // ...
    }
})();
(function() {
    // file2.js
    "use strict";
    function f() {
        // ...
    }
})();

```

# 전역변수 사용 죄소화
* 전역 변수를 정의하는 것은 모든 사람과 공유하는 공통의 네임스페이스를 더럽히고 뜻하지 않게 이름이 충돌할 만한 가능성을 만든다.
* 전역 변수는 프로그램의 구분된 요소들 간에 불필요한 결합을 초래 한다.
* 라이브러리나 컴포넌트는 프로그램의 다른 부분에서 사용할 수 있도록 전역 변수 이름을 정의해야 한다. 그러한 경우가 아니라면 지역변수로 유지하는 것이 최선이다.
```javascript
var i, n, sum;
function averageScore(players) {
    sum = 0;
    for (i = 0, n = players.length; i < n; i ++) {
        sum += score(players[i]);
    }
    return sum / n;
}

function score(player) {
    sum = 0;
    for (i = 0, n = player.levels.length; i < n; i++) {
        sum += player.levels[i].score;
    }
    return sum;
}

//다음과 같이 변경한다.
function averageScore(players) {
    var i, n, sum;
    sum = 0;
    for (i = 0, n = players.length; i < n; i ++) {
        sum += score(players[i]);
    }
    return sum / n;
}

function score(player) {
    var i, n, sum;
    sum = 0;
    for (i = 0, n = player.levels.length; i < n; i++) {
        sum += player.levels[i].score;
    }
    return sum;
}

```

# 클로저
```javascript
function sandwichMaker() {
    var magicIngredient = 'peanut butter';
    function make(filling) {
        return magicIngredient + " and " + filling;
    }
}

var f = sandwichMaker();
f("jelly");
f("bananas");
f("marshmallows");
```
* 클로저는 자바스크립에서 가장 우아하고 표현력이 높은 기능 중 하나이고, 많은 유용한 코딩관례들의 중심이 된다.
* 자바스크립트는 클로저를 생성하기 위한 더 편리하고 일반적인 문법은 제공하는데, 함수 표현식이 바로 그것이다.

```javascript
function sandwichMaker(magicIngredient) {
    return function(filling) {
        return magicIngredient + " and " + filling;
    }
}
```


# eval
* 직접적인 eval을 사용하지 말고 간접적인 eval을 사용하라
```javascript
var x = "global";
function test() {
    var x = "local";
    return eval("x"); // 직접적인 eval
}

var x = "global";
function test() {
    var x = "local";
    var f = eval; // 간접적인 eval
    return f(x);
}
```
