const html = document.documentElement
const body = document.body
const div = document.querySelector('div')

div.addEventListener('click', function() {
    console.log('DIV')
})

body.addEventListener('click', function() {
    console.log('BODY')
}, true)

html.addEventListener('click', function() {
    console.log('HTML')
}, true)
