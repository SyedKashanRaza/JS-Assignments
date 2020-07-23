//1
function city(){
    var a=prompt("Enter a City name")
    a=a.toLowerCase()
    if(a=="karachi")
    {
        alert("Welcome to City of Ligths")
    }
}

//2
function greet(){
    var a=prompt("Enter Your Gender")
    a=a.toLowerCase()
    if(a=="male")
    {
        alert("Good Morning Sir")
    }
    else
    {
        alert("Good Morning Sir")
    }
}

//3
function traffic(){
    var a=prompt("Enter Signal Color")
    a=a.toLowerCase()
    if(a=="red")
    {
        alert("Must stop")
    }
    else if(a=="yellow")
    {
        alert("Ready to move")
    }
    else if(a=="green")
    {
        alert("Move now")
    }
    else
    {
        alert("You entered wrong color")
    }
}

//4
function petrol(){
    var a=+prompt("Enter remaining fuel in car")
    if(a<0.25)
    {
        alert("Please refill the fuel in your car")
    }
}

//5
function alertCheck(){
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}
}

//6
function marks(){
    var a=+prompt("Enter Maths Marks")
    var b=+prompt("Enter English Marks")
    var c=+prompt("Enter Chemistry Marks")
    
    var d=a+b+c
    var per=(d/300)*100
    document.write("Total Marks: 300","<br>")
    document.write("Marks Obtained: "+d,"<br>")
    document.write("Percentage: "+per.toFixed(2)+"%","<br>")
    if(per>=80)
    {
        document.write("Grade: A-one","<br>")
        document.write("Remarks: Excellent","<br>")
    }
    else if(per>=70 && per<80)
    {
        document.write("Grade: A","<br>")
        document.write("Remarks: Good","<br>")
    }
    else if(per>=60 && per<70)
    {
        document.write("Grade: B","<br>")
        document.write("Remarks: You need to improve","<br>")
    }
    else
    {
        document.write("Grade: Fail","<br>")
        document.write("Remarks: Sorry","<br>")
    }
}

//7
function guess(){
    var a=+prompt("Guess the secrte number(1 to 10)")
    var sec=8
    if(a==sec)
    {
        alert("Bingo! Correct Answer")
    }
    else if(a==sec+1)
    {
        alert("Close enough to the correct answer")
    }
    else
    {
        alert("Wrong Answer")
    }
}

//8
function div3(){
    var a=+prompt("Enter a number")
    if(a%3==0)
    {
        alert("Number is divisible by 3")
    }
    else
    {
        alert("Number is not divisible by 3")
    }
}

//9
function evenOdd(){
    var a=+prompt("Enter a number")
    if(a%2==0)
    {
        alert("Number is even")
    }
    else
    {
        alert("Number is odd")
    }
}

//10
function temp(){
    var a=+prompt("Enter Temperature")
    if(a>=40)
    {
        alert("It is too hot outside")
    }
    else if(a>=30 && a<40)
    {
        alert("The Weather today is Normal")
    }
    else if(a>=20 && a<30)
    {
        alert("Today’s Weather is cool")
    }
    else if(a>=10 && a<20)
    {
        alert("OMG! Today’s weather is so Cool")
    }
}

//11
function calc(){
    var a=+prompt("Enter First Number")
    var b=+prompt("Enter Second Number")
    var op=prompt("Enter Operator")

    if(op=='+')
    {
        var c=a+b
        alert(`Answer is ${c}`)
    }

    else if(op=='/')
    {
        var c=a/b
        alert(`Answer is ${c}`)
    }

    else if(op=='-')
    {
        var c=a-b
        alert(`Answer is ${c}`)
    }

    else if(op=='*')
    {
        var c=a*b
        alert(`Answer is ${c}`)
    }

    else if(op=='%')
    {
        var c=a%b
        alert(`Answer is ${c}`)
    }
    
    else
    {
        alert("Wrong Opertor")
    }
}