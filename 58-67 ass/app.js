//Q1
//1
var a=document.getElementById('main-content')

//2
var a=document.getElementById('main-content')
console.log(a.childNodes)

//4
var b=document.getElementById('first-name')
b.value="kashan"

//5
var b=document.getElementById('last-name')
b.value="raza"
var b=document.getElementById('email')
b.value="kashanraza@gmail.com"


//Q2
//1
var a=document.getElementById('form-content')
console.log(a.nodeType)

//2
var a=document.getElementById('lastName')
console.log(a.childNodes.nodeType)

//3
function changeNode(){
var newText=document.createTextNode('Khan')
var text=document.getElementById('lastName').childNodes[0]
text.replaceChild(newText,text.childNodes[0])
}

//4
var as=document.getElementById('main-content')
console.log(as.firstChild)
console.log(as.lastChild)

//5
var a=document.getElementById('lastName')
console.log(a.nextSibling)

var a=document.getElementById('lastName')
console.log(a.previousSibling)

//6
var b=document.getElementById('email')
var bb=b.parentNode
console.log(bb)
console.log(bb.nodeType)
