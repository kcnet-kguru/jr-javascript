# Function

> 함수는 한 번 정의하면 몇 번이든 실행할 수 있고 호출할 수 있는 자바스크립트 코드 블록이다. 어떤 객체의 프로퍼티로 할당된 함수를 해당 객체의 메서드라 한다.   
> 어떤 함수가 객체 상에서 호출되거나 객체를 통해 호출될 때, 이 객체는 호출 컨텍스트이거나 호출된 함수에서 this 값이다. 새로 생성된 객체를 초기화하는데 쓰이는 함수를 생성자라 한다.


### 함수 정의하기
함수 구성요소
* 함수 이름 식별자
* 쉼표로 구분된 0개 혹은 임의 개수의 식별자들과 이 식별자들을 둘러싼 한 쌍의 괄호
* 0개 혹은 임의 개수의 자바스크립트 구문을 포함하는 한 쌍의 중괄호

```javascript
function printprops(o) {
    for(var p in o) {
        console.log(p + ":" + o[p] + "\n");
    }
}

// 데카르트 좌표
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}

// 팩터리얼 재귀 함수
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}


var square = function(x) { return x*x; }

// 함수 표현식은 이름을 포함할 수 있는데, 이러한 이름은 재귀 호출에 유용하게 사용된다.
var f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// 또한, 함수 표현식은 다른 함수의 전달인자로 사용 될 수 있다.
data.sort(function(a, b) { return a-b;});

```

> 함수 이름
> 함수 이름은 짧게 쓰기보다는 함수를 잘 설명할 수 있는 이름을 선택해야 한다. 보통 함수 이름은 동사 또는 동사로 시작하는 구문이다.

### 함수 형식
```javascript

// 함수 선언식
function fn() {
    
}

// 함수 표현식
var fn2 = function() {
    
}

// 익명 함수
(function() {
        
    })
```

### 함수 hoisting
```javascript
// 함수 선언식의 경우 맨 위로 끌어올려(hoisted) 진다. 그렇기 때문에 value 값은 undefined 가 된다.
var value=30;
function hoistingExam(){
    console.log("value="+value);
    var value =10;
    console.log("value="+value);
}

hoistingExam();
//실행결과
/*
value= undefined
value= 10
*/
//-----------------------------------

//함수 표현식의 경우 hoisting 이 일어나지 않기 때문에 에러가 발생한다.
hoistingExam2();
var hoistingExam2 = function(){
    var hoisting_val =10;
    console.log("hoisting_val ="+hoisting_val);
}
//실행결과
/*
hoistingExam2 of object is not a function
*/

```


### 함수의 return
함수 대부분은 return 구문을 포함하고 있다. return 구분은 함수 실행을 중단하고, return 구문 다음에 있는 표현식 값을 (호출자가 있다면) 호출자에게 반환한다.  
만약 return 구문 다음에 표현식이 없다면 undefined 값을 반환한다. 만약 함수가 return 구문을 포함하지 않는다면, 함수 몸체 내의 구문이 실행된 다음 호출자에게 그저 undefined 값을 반환할 뿐이다.


### 중첩 함수
```javascript
// 중첩된 함수는 해당 함수가 속한 함수의 매개변수와 변수에 접근할 수 있다.
function hypotenuse(a, b) {
    function square(x) { return x * x}
    return Math.sqrt(square(a) + square(b));
}

```

### 함수 호출하기
함수를 정의했더라도 함수 몸체의 자바스크립트 코드는 함수를 호출하지 않으면 실행되지 않는다. 자바스크립트 함수는 네 가지 방법으로 호출할 수 있다.
* 일반적인 함수 형태
* 메서드 형태
* 생성자
* 해당 함수의 call()과 apply() 메서드를 통한 간접적 방식

```javascript
// 일반적인 함수 형태
printprops({x:1});
var total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
var probability = factorial(5)/factorial(13);

// 메서드 형태
var calculator = {
    operand1: 1,
    operand2: 1,
    add: function() {
        this.result = this.operand1 + this.operand2;
    }
}
calculator.add();
console.log(calculator.result);

// 생성자
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
}

```

### 메서드 체이닝
메서드가 객체를 반환하면, 메서드의 반환 값을 후속 호출의 일부로 사용할 수 있다. 이는 단일 표현식만으로 일련의 메서드를 호출을 하용할 수 있게끔 한다.
```javascript
$(":header").map(function() {return this.id }).get().sort();
```
메서드 체이닝은 객체 이름은 한 번만 사용하고 메서드는 여러 번 호출할 수 있는 방식이다.

### this
this는 키워드이며 변수나 속성 이름이 아니다. 자바스크립트 문법은 this에 값을 할당하는 것을 허용하지 않는다.  
변수와 달리 , this 키워드에는 범위가 없고 중첩 함수는 호출자의 this 값을 상속하지 않는다. 만약 중첩 함수가 메서드 형태로 호출되면, 중첩 함수에서의 this 값은 그 함수가 속한 객체이다.
만약 중첩 함수가 함수 형태로 호출되면, 중첩 함수의 this 값은 global 객체(일반 모드) 또는 undefined(엄격한 모드) 중 하나다.

```javascript
var o = {
    m: function() {
        var self = this;
        console.log(this === 0); // true: this 는 객체 o이다.
        
        f();
        function f() {
            console.log(this === o);
            console.log(self === o);
        }
    }
}
o.m();
```

### 값으로서의 함수
```javascript
function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}
var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));

var operators = {
    add: function(x, y) { return x + y },
    subtract: function(x, y) { return x - y },
    multiply: function(x, y) { return x*y },
    divide: function(x, y) { return x/y },
    pow: Math.pow
}

function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === 'function')
        return oprators[operation](operand1, operand2);
    else throw '알 수 없는 연산자';
}

var j = operate2('add', 'hello', operate2('add', ' ', 'world'));

```


### 클로저
대다수의 현대 프로그래밍 언어와 마찬가지로 자바스크립트 또한 어휘적 유효 범위(lexical scoping)를 사용한다. 이는 함수를 호출하는 시점에서의 변수 유효 범위가 아니라,  
함수가 정의되었을 때의 변수 유효범위를 사용하여 함수가 실행 된다는 뜻이다.  
함수 객체와 함수의 변수가 해석되는 범위의 조합은 컴퓨터 과학 문헌에서 클로저(closure)라고 일컫는다.
```javascript
var scope = "global scope";
function checkscope() {
    var scope = 'local scope';
    function f() { return scope; }
    return f();
}
checkscope()    // => 'local scope'

//------------------------------------

var scope = "global scope";
function checkscope() {
    var scope = 'local scope';
    function f() { return scope; }
    return f;
}
checkscope()()
```
