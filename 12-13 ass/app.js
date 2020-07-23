//2
function larger(){
    var a=+prompt("Enter First Number")
    var b=+prompt("Enter Second Number")
    if(a==b){
        alert("Both are equal")
    }

    else if(a<b){
        alert(`${b} is larger`)
    }

    else{
        alert(`${a} is larger`)
    }
}

//3
function num(){
    var a=+prompt("Enter a number")
    if(a<0)
    {
        alert(`${a} is a negative number`)
    }
    else if(a>0)
    {  
        alert(`${a} is a positive number`)
    }
    else
    {   
        alert("It is a zero")
    }
}

//4
function vowel(){
    var vow=prompt("Enter a character ")
    if(vow=='a'|| vow=='e'||vow=='i'||vow=='o'||vow=='u'){
        alert(true)
    }
    else{
        alert(false)
    }
}

//5
function password(){
    var pwd="abc123"
    var user=prompt("Enter a password")
    if(user==pwd){
        alert("Correct Password")
    }
    else{
        alert("Incorrect Password")
    }
}

//6
function code(){
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else
{greeting = "Good evening";
}
}

//7
function timeAlert(){
var d=new Date();
var time=d.getHours()
if(time>=0 && time<12)
{
    alert("good morning")
}
else if(time>=12 && time<17)
{
    alert("good afternoon")
}
else if(time>=17 && time<21)
{
    alert("good evening")
}
else if(time>=21 && time<0)
{
    alert("good night")
}
}