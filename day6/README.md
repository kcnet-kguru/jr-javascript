# DOM
## DOM 이란
* HTML 문서를 작성할 때에는 HTML 콘텐츠를 다른 HTML 콘텐츠 내에 캡슐화하게 되는데, 이를 통해 트리(tree)로 표현 가능한 계층 구조가 만들어 진다.
* 브라우저는 HTML 문서를 로딩 시 이 계층 구조를 해석해서 마크업이 어떻게 캡슐화 되었는지를 보여주는 노드 개체 트리를 생성한다.
* 브라우저는 HTML 코드를 해석해서 트리 형태로 구조화된 노드들을 가지고 있는 문서(DOM)를 생성한다.

<image width="634" src="https://wit.nts-corp.com/wp-content/uploads/2019/02/-2"/>
<image width="634" src="https://wit.nts-corp.com/wp-content/uploads/2019/02/-3"/>

* DOM은 브라우저에서 보이는 것이 아니다.(렌더링과 HTML 구조와는 다르다.)

## Node
* HTML 문서가 브라우저에 의해 해석되어 실제 문서를 나타내는 노드 개체들의 트리 구조로 변환된다는 것

### Node 개체 유형
* DOCUMENT_NODE(예: window.document)
* ELEMENT_NODE(예: &lt;body&gt;, &lt;a&gt;, &lt;p&gt;, &lt;script&gt;, &lt;style&gt;, &lt;html&gt;, &lt;h1&gt;)
* ATTRIBUTE_NODE(예: class="funEdges")
* DOCUMENT_FRAGMENT_NODE(예: document.createDocumentFragment())
<br/>_[참고]: https://programmer-seva.tistory.com/60_
* DOCUMENT_TYPE_NODE(예: &lt;!DOCTYPE html&gt;)
* Java Script 브라우저 환경에서 Node 개체 속성으로 기록되는 상수 값의 속성과 동일
* 다음 인터페이스들은 모두 Node 로 부터 메소드와 프로퍼티를 상속받는다 <br/>
  Document, Element, CharacterData (Text, Comment, CDATASection (en-US)이 상속), ProcessingInstruction (en-US), DocumentFragment, DocumentType, Notation, Entity, EntityReference
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
  <script>
    console.log(Node.ELEMENT_NODE)
  </script>
</body>
</html>

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
  <script>
    for (let key in Node) {
      console.log(key, ' = '+Node[key]);
    }
  </script>
</body>
</html>
```


### Node를 다루기 위한 속성 및 메서드
Node 속성
* baseURI
* childNodes
* firstChild
* isConnected
* lastChild
* nextSibling
* nodeName
* nodeType
* nodeValue
* ownerDocument
* parentElement
* parentNode
* previousSibling

Node 메서드
* appendChild()
* cloneNode()
* compareDocumentPosition()
* contains()
* getRootNode()
* hasChildNodes()
* insertBefore()
* isDefaultNamespace()
* isEqualNode()
* isSameNode()
* lookupNamespaceURI()
* lookupPrefix()
* normalize()
* removeChild()
* replaceChild()


## DOM 이벤트
### 개요
* DOM의 이벤트는 DOM 내의 element, document 개체, window 개체와 관련되어 발생하는 사전 정의된 시점이나 사용자 정의 시점을 말한다.
* 이 시점은 통상적으로 사전에 결정되어 있으며, 이 시점이 발생할 때 실행될 기능 (핸들러/콜백)을 연관시킴으로써 프로개밍적으로 알 수 있다.
* 이 시점은 UI상태, JavaScript 프로그램을 실행하는 환경의 상태, 프로그램 자체의 상태에 의해 발생한다.
* 이벤트를 설정하는 것은 인라인 attribute 이벤트 핸들러, 속성 이벤트 핸들러, addEventListener() 메서드를 사용하여 수행된다.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<!-- 인라인 attribute 이벤트 핸들러 패턴 -->
<body onclick="console.log('fire/trigger attribute event hadler')">
  <div>click me</div>
  <script>
      let elementDiv = document.querySelector('div')
      
      // 속성 이벤트 핸들러 패턴
      elementDiv.onClick = function() {
          console.log('fire/trigger property event handler');
      }
      
      // addEventLister 메소드 패턴
      elementDiv.addEventListener('click', function() {
          console.log('fire/trigger addEventListener')
      }, false)
  </script>
</body>
</html>

```
* DOM에 프로그래밍적으로 이벤트를 연결하는 이 세 가지 패턴 모두 이벤트를 예약하는 것이지만, addEventListener()만이 견고하고 조직화된 솔루션을 제공한다.

