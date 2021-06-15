# 이벤트 플로우

* 이벤트가 발생되면 DOM을 따라 흘러가거가거나 전파되면서 다른 노드와 JavaScript 개체들에서 동일한 이벤트를 발생시킨다.
* 이벤트 프름은 캡처 단계(즉 DOM 트리 줄기 -> 가지)나 버블링 단계(DOM 트리 가지 -> 줄기), 혹은 양쪽 모두 발생하도록 프로그래밍 할 수 있다.


<img width="634" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdifxy2lIDsntJv_q__hl2Ul2OTVwLidLgVw&usqp=CAU"/>

## 이벤트 개체에서 이벤트 속성 얻기
* 기본적으로 이벤트에서 호출되는 핸들러나 콜백 함수에는 이벤트와 관련된 모든 정보를 가지고 있는 매개변수가 전송된다.
* 다음 코드에서는 이 이벤트 개체에 접근하여, load 이벤트와 click 이벤트의 모든 속성과 값을 출력하는 예를 보여준다.

```html
<!DOCTYPE html>
<html lang="en">
    <body>
        <div>click me</div>
        <script>
            document.querySelector('div').addEventListener('click', function(event) {
                Object.keys(event).sort().forEach(function(item) {
                    console.log(item + ' = ' + event[item])
                }, false)
            })
            
            this.addEventListener('load', function(event) {
                Object.keys(event).sort().forEach(function(item) {
                    console.log(item+ ' = ' +event[item])
                }, false)
            })
        </script>
    </body>
</html>

```


## 이벤트가 호출된 노드나 개체가 아닌 이벤트의 대상을 참조
* 이벤트의 진원지를 알아야 할 떄 사용할 수 있다.
```html
<!DOCTYPE html>
<html lang="en">
    <body>
        <div>click me</div>
        <script>
            document.body.addEventListener('click', function(event) {
                console.log(event.target)
            }, false)
        </script>
    </body>
</html>

```

## preventDefault()를 사용하여 기본 브라우저 이벤트를 취소하기
* 브라우저는 HTML 페이지를 사용자에게 보여줄 대 사정에 구성된 여러 이벤트를 제공한다.
* 브라우저 이벤트는 브라우저 기본 이벤트를 호출하는 노드나 개체에 연결된 이벤트 핸들러 함수 내부에서 preventDefault() 메서드를 호출해서 막을 수 있다.
* preventDefault() 메서드는 이벤트가 전파되는 것(버블링이나 캡처 단계)를 중지 시키지 않는다.
```html
<!DOCTYPE html>
<html lang="en">
    <body>
        <a href="google.com">no go</a>
        <input type="checkbox" />
        <textarea></textarea>
        <script>
            document.querySelector('a').addEventListener('click', function(event) {
                event.preventDefault()
            }, false)
            
            document.querySelector('input').addEventListener('click', function(event) {
                event.preventDefault()
            }, false)
            
            document.querySelector('textarea').addEventListener('keypress', function(event) {
                event.preventDefault()
            }, false)
            
            document.body.addEventListener('click', function(event) {
                console.log('the event flow still flow')
            })
        </script>
    </body>
</html>
```


## stopPropagation()을 사용하여 이벤트 흐름을 중지시키기
```html
<!DOCTYPE html>
<html lang="en">
    <body>
        <div>click me</div>
        <script>
            document.querySelector('div').addEventListener('click', function() {
                console.log('me too, but nothing from the event flow!')
            }, false)
            
            document.querySelector('div').addEventListener('click', function(event) {
                console.log('invoked all click events attatched, but cancel capture and bubble event phases')
                event.stopPropagation();
            }, false)
            
            document.querySelector('div').addEventListener('click', function() {
                console.log('me too, but nothing from the event flow')
            }, false)
            
            document.body.addEventListener('click', function() {
                console.log('What, denied from being invoked')
            }, false)
        </script>
    </body>

</html>
```

## 이벤트 위임
* 이벤트 위임(delegate)은 간단히 말해 이벤트 프름을 활용하여 단일 이벤트 수신기가 여러 개의 이벤트 대상을 처리할 수 있게 하는 프로그래밍 행위를 말한다.
* 이것이 가능한 이유는 이벤트 흐름 때문이며, 특히 그 중에서 버블링 단계임을 잊지 말기 바란다.
```html
<!DOCTYPE html>
<html lang="en">
    <body>
    <p>Click a table cell</p>
    <table border="1">
        <tbody>
            <tr><td>row 1 column 1</td><td>row 1 column 2</td></tr>
            <tr><td>row 2 column 1</td><td>row 2 column 2</td></tr>
            <tr><td>row 3 column 1</td><td>row 3 column 2</td></tr>
            <tr><td>row 4 column 1</td><td>row 4 column 2</td></tr>
            <tr><td>row 5 column 1</td><td>row 5 column 2</td></tr>
            <tr><td>row 6 column 1</td><td>row 6 column 2</td></tr>
        </tbody>
    </table>
    <script>
        document.querySelector('table').addEventListener('click', function(event) {
            if(event.target.tagName.toLowerCase() === 'td') {
                console.log(event.target.textContent)
            }
        })
    </script>
    </body>
</html>
```
