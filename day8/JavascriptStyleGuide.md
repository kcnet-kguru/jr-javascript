# Airbnb Javascript 스타일 가이드
## Types
* Primitives: primitive type 은 그 값을 직접 조작합니다.
  * string
  * number
  * boolean
  * null
  * undefined
* Complex: complex type은 참조를 통해 값을 조작합니다.
  * object
  * array
  * function
    

## Object
* Object 를 만들 때는 리터럴 구문을 사용하십시오.
```javascript
//bad
var item = new Object();

// good
var item = {};
```

## Array
* 배열을 만들때 리터럴 구문을 사용하십시오.
```javascript
// bad
var item = new Array();

// good
var items = []
```
* 길이를 알 수 없는 경우 Array#push를 사용하십시오.
```javascript
var someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```

* 배열을 복사 할 필요가 있는 경우 Array#slice를 사용하십시오.
```javascript
var len = items.length,
    itemsCopy = [],
    i;

// bad
for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i];
}

// good
itemsCopy = items.slice();

```

## Strings

- 문자열은 작은 따옴표`''`를 사용하십시오.

```javascript
  // bad
  var name = "Bob Parr";

  // good
  var name = 'Bob Parr';

  // bad
  var fullName = "Bob " + this.lastName;

  // good
  var fullName = 'Bob ' + this.lastName;
  ```

- 80 문자 이상의 문자열은 문자열 연결을 사용하여 여러 줄에 걸쳐 기술 할 필요가 있습니다.
- Note : 문자열 연결을 많이하면 성능에 영향을 줄 수 있습니다. [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40)

```javascript
  // bad
  var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

  // bad
  var errorMessage = 'This is a super long error that \
  was thrown because of Batman. \
  When you stop to think about \
  how Batman had anything to do \
  with this, you would get nowhere \
  fast.';


  // good
  var errorMessage = 'This is a super long error that ' +
    'was thrown because of Batman.' +
    'When you stop to think about ' +
    'how Batman had anything to do ' +
    'with this, you would get nowhere ' +
    'fast.';
  ```

- 프로그램에서 문자열을 생성 할 필요가 있는 경우 (특히 IE는) 문자열 연결 대신 Array#join을 사용하십시오. [jsPerf](http://jsperf.com/string-vs-array-concat/2).
```javascript
  var items,
      messages,
      length,
      i;

  messages = [{
      state: 'success',
      message: 'This one worked.'
  },{
      state: 'success',
      message: 'This one worked as well.'
  },{
      state: 'error',
      message: 'This one did not work.'
  }];

  length = messages.length;

  // bad
  function inbox(messages) {
    items = '<ul>';

    for (i = 0; i < length; i++) {
      items += '<li>' + messages[i].message + '</li>';
    }

    return items + '</ul>';
  }

  // good
  function inbox(messages) {
    items = [];

    for (i = 0; i < length; i++) {
      items[i] = messages[i].message;
    }

    return '<ul><li>' + items.join('</li><li>') + '</li></ul>';
  }
  ```


## Functions

- 함수식(Function expressions)
```javascript
  // 익명함수식(anonymous function expression)
  var anonymous = function() {
    return true;
  };

  // 명명된 함수식(named function expression)
  var named = function named() {
    return true;
  };

  // 즉시실행 함수식(immediately-invoked function expression (IIFE))
  (function() {
    console.log('Welcome to the Internet. Please follow me.');
  })();
  ```

- (if 및 while 등) 블록 내에서 변수에 함수를 할당하는 대신 함수를 선언하지 마십시오. 브라우저는 허용하지만 (마치 'bad news bears'처럼) 모두 다른 방식으로 해석됩니다.
- **Note:** ECMA-262에서는`block`은 statements의 목록에 정의되어 있습니다 만, 함수 선언은 statements가 없습니다. [이 문제는 ECMA-262의 설명을 참조하십시오. ](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).
```javascript
  // bad
  if (currentUser) {
    function test() {
      console.log('Nope.');
    }
  }

  // good
  var test;
  if (currentUser) {
    test = function test() {
      console.log('Yup.');
    };
  }
  ```

- 매개 변수(parameter)에 `arguments`를 절대 지정하지 마십시오. 이것은 함수 범위로 전달 될`arguments`객체의 참조를 덮어 쓸 것입니다.
```javascript
  // bad
  function nope(name, options, arguments) {
    // ...stuff...
  }

  // good
  function yup(name, options, args) {
    // ...stuff...
  }
  ```
## Variables

- 변수를 선언 할 때는 항상 `var`를 사용하십시오. 그렇지 않으면 전역 변수로 선언됩니다. 전역 네임 스페이스를 오염시키지 않도록 Captain Planet도 경고하고 있습니다.
```javascript
  // bad
  superPower = new SuperPower();

  // good
  var superPower = new SuperPower();
  ```

- 여러 변수를 선언하려면 하나의 `var`를 사용하여 변수마다 줄바꿈하여 선언하십시오.
```javascript
  // bad
  var items = getItems();
  var goSportsTeam = true;
  var dragonball = 'z';

  // good
  var items = getItems(),
      goSportsTeam = true,
      dragonball = 'z';
  ```

- 정의되지 않은 변수를 마지막으로 선언하십시오. 이것은 나중에 이미 할당된 변수 중 하나를 지정해야하는 경우에 유용합니다.
```javascript
  // bad
  var i, len, dragonball,
      items = getItems(),
      goSportsTeam = true;

  // bad
  var i, items = getItems(),
      dragonball,
      goSportsTeam = true,
      len;

  // good
  var items = getItems(),
      goSportsTeam = true,
      dragonball,
      length,
      i;
  ```

- 변수의 할당은 스코프의 시작 부분에서 해주십시오. 이것은 변수 선언과 Hoisting 관련 문제를 해결합니다.
```javascript
  // bad
  function() {
    test();
    console.log('doing stuff..');

    //..other stuff..

    var name = getName();

    if (name === 'test') {
      return false;
    }

    return name;
  }

  // good
  function() {
    var name = getName();

    test();
    console.log('doing stuff..');

    //..other stuff..

    if (name === 'test') {
      return false;
    }

    return name;
  }

  // bad
  function() {
    var name = getName();

    if (!arguments.length) {
      return false;
    }

    return true;
  }

  // good
  function() {
    if (!arguments.length) {
      return false;
    }

    var name = getName();

    return true;
  }
  ```

## Whitespace

- 탭에는 공백 2개를 설정하십시오.
```javascript
  // bad
  function() {
  ∙∙∙∙var name;
  }

  // bad
  function() {
  ∙var name;
  }

  // good
  function() {
  ∙∙var name;
  }
  ```
- 중괄호({})의 앞에 공백을 하나 넣어주십시오.
```javascript
  // bad
  function test(){
    console.log('test');
  }

  // good
  function test() {
    console.log('test');
  }

  // bad
  dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog'
  });

  // good
  dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog'
  });
  ```
- 파일의 마지막에는 빈 줄을 하나 넣어주십시오.
```javascript
  // bad
  (function(global) {
    // ...stuff...
  })(this);
  ```
```javascript
  // good
  (function(global) {
    // ...stuff...
  })(this);

  ```

- 메소드 체인이 길어지는 경우 적절히 들여쓰기(indentation) 하십시오.
```javascript
  // bad
  $('#items').find('.selected').highlight().end().find('.open').updateCount();

  // good
  $('#items')
    .find('.selected')
      .highlight()
      .end()
    .find('.open')
      .updateCount();

  // bad
  var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
      .attr('width',  (radius + margin) * 2).append('svg:g')
      .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
      .call(tron.led);

  // good
  var leds = stage.selectAll('.led')
      .data(data)
    .enter().append('svg:svg')
      .class('led', true)
      .attr('width',  (radius + margin) * 2)
    .append('svg:g')
      .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
      .call(tron.led);
  ```

## Type Casting & Coercion(강제)

- 문의 시작 부분에서 형을 강제합니다.
- Strings:
```javascript
  //  => this.reviewScore = 9;

  // bad
  var totalScore = this.reviewScore + '';

  // good
  var totalScore = '' + this.reviewScore;

  // bad
  var totalScore = '' + this.reviewScore + ' total score';

  // good
  var totalScore = this.reviewScore + ' total score';
  ```

- 숫자는`parseInt`를 사용하십시오. 항상 형변환을 위한 기수(radix)를 인수로 전달하십시오.
```javascript
  var inputValue = '4';

  // bad
  var val = new Number(inputValue);

  // bad
  var val = +inputValue;

  // bad
  var val = inputValue >> 0;

  // bad
  var val = parseInt(inputValue);

  // good
  var val = Number(inputValue);

  // good
  var val = parseInt(inputValue, 10);
  ```

- 어떤 이유에 의해 `parseInt` 가 병목이 되고, [성능적인 이유](http://jsperf.com/coercion-vs-casting/3)로 Bitshift를 사용할 필요가 있을 경우,
  하려고 하는것에 대해, why(왜)와 what(무엇)의 설명을 코멘트로 남겨주십시오.
 ```javascript
  // good
  /**
   * parseInt가 병목을 일으키므로
   * Bitshift로 문자열을 수치로 강제적으로 변환하는 방법으로
   * 성능을 개선시킵니다.
   */
  var val = inputValue >> 0;
  ```

- Booleans:
```javascript
  var age = 0;

  // bad
  var hasAge = new Boolean(age);

  // good
  var hasAge = Boolean(age);

  // good
  var hasAge = !!age;
  ```
