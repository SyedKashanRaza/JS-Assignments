//1
var a = prompt('Enter a number')
console.log(a)
console.log(Math.round(a))
console.log(Math.floor(a))
console.log(Math.ceil(a))

//2
var a = prompt('Enter a number')
console.log(a)
console.log(Math.round(a))
console.log(Math.floor(a))
console.log(Math.ceil(a))

//3
var a = prompt("Enter Number")
if(a<0){
    a=0-a
    console.log(`Absolute value is: ${a}`)
}
else{
    console.log(`Absolute value is: ${a}`)
}

//4
var a=Math.random()
a=a*6
console.log((Math.floor(a))+1)

//6
var a=Math.random()
a=a*100
console.log(Math.floor(a))

//8
function check(){
var a=8
var b=document.getElementById('sec')
if(a==b.value){
    console.log("Cong")
}

else{
    console.log("Try Again")
}
}