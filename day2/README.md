# 자바스크립트 - 객체와 배열

## 객체

<ul>
   <li>자바스크립트 기본 데이터 타입은 객체</li>
   <li>이름과 값으로 구성된 프로퍼티들의 정렬되지 않은 집합</li>
   <li>객체는 객체가 가진 고유 프로퍼티를 유지하는 것 외에 '프로토타입'이라고 하는 다른 객체의 프로퍼티를 상속받는다</li>
   <li>객체의 메서드들은 일반적으로 상속받는 프로퍼티 이고, 이를 '프로토타입 상속' 이라고 한다.</li>
   <li>Object Type Mehtod: hasOwnProperty, toString, valueOf</li>
</ul>

### 프로토 타입
<ul>
    <li>프로토타입을 이용하면 객체와 객체를 연결하고 한쪽 방향으로 상속을 받는 형태를 만들수가 있다</li>
    <li>객체와 객체를 연결해서 상속받는 다는 것은 다른 말로 객체와 객체를 연결해 멤버함수나 멤버 변수를 공유한다는 뜻</li>
    <li>프로토타입 체인의 핵심은 엔진이 사용하는 __proto__라는 속성</li>
    <li>직접 개발코드로 접근하지는 말 것(Object.getPrototypeOf 활용)</li>
    <li>객체의 연결을 통한 단방향 공유 관계를 프로토타입 체인 이라 한다.</li>
</ul>

```javascript
// 속성 상속
var f = function () {
    this.a = 1;
    this.b = 2;
}

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;
```

```javascript
var o = {
    a: 2,
    m: function(b) {
        return this.a + 1;
    }
}
console.log(o.m())

var p = Object.create(o);
p.a = 12;
console.log(p.m());
```
### 객체 분류
<ul>
    <li>
        네이티브 객체: ECMAScript 명에에 정의된 객체이거나 객체 클래스 <br/>
        (ex: Array, Function, Date, RegExp)
    </li>
    <li>
        호스트 객체: 브라우저 같이 자바스크립트 인터프리트가 내장된 호스트 환경에 정의된 객체 <br/>
        (ex: HTMLElement: 웹페이지 구조가 클라이언트 측 자바스크립트로 표현)
    </li>
    <li>사용자 정의 객체: 자바스크립트 코드의 실행으로 생성된 객체</li>
</ul>

### 주의
복잡한 코드를 작성하여 이용하기 전에 프로토타입 기반의 상속 모델을 이해하는 것이 중요하다. 
또한 프로토타입 체인의 길이는 성능을 저해하지 않도록 줄이는 방법을 고안해야 한다. 
또한 빌트인 프로토타입은 새로운 자바스크립트 기능과 호환성을 갖기 위한 이유가 아닌 이상 절대 확장해서는 안된다.


## 배열
```javascript
var array = [];
var array2 = [1, "Hello", [1, 2, 3], { hi: 1 }]
console.log(array2[0]);
console.log(array2[1]);

var b = [[1, { x:1, y:2 }], [2, { x:3, y:4 }]];

var count = [1, , 3]

//배열이 리터럴 문법은 제일 마지막에 쉼표를 추가 할 수 있다. 그러므로 [ , , ,]의 원소 개수는 세 개가 아니라 두 개다.

```
```javascript
var a = ["world"];
var value = a[0];
a[1] = 3.14;
i = 2;
a[i] = 3;
a[i + 1] = 'hello';
a[a[1]] = a[0];

```

### 배열의 길이
```javascript
[].length
['a', 'b', 'c'].length;
a = [1, 2, 3, 4, 5];
a.length = 3;
a.length = 0;
a.length = 5;
```
### 배열의 메서드
```javascript
// join()
var a = [1, 2, 3];
a.join();
a.join(" ");
a.join("");

var b = new Array(10);
b.join("-");


// reverse()
var a = [1, 2, 3]
a.reverse().join();

// sort()
var a = new Array("banana", "cherry", "apple");
a.sort();
var s = a.join(", ");

//concat()
var a = [1, 2, 3];
a.concat(4, 5);
a.concat([4, 5])
a.concat([4,5], [6, 7]);
a.concat(4, [5, [6, 7]]);


//map()
a = [1, 2, 3];
b = a.map(function(x) { return x*x});

//filter()
a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3});
everyother = a.filter(function(x, i) { return i%2==0});

```
