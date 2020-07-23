//1
function power(num,pow){
    var num=+prompt("Enter Number: ")
    var pow=+prompt("Enter Power: ")
    var a=num
    for(i=1;i<pow;i++){
        num=num*a
    }   
    console.log(num)
}

//6
function vowelRem(){
var text=prompt("Enter Text of max 15 characters")
var newText=text.replace(/a/g,"")
var newText=newText.replace(/e/g,"")
var newText=newText.replace(/i/g,"")
var newText=newText.replace(/o/g,"")
var newText=newText.replace(/u/g,"")

var newText=text.replace(/A/g,"")
var newText=newText.replace(/E/g,"")
var newText=newText.replace(/I/g,"")
var newText=newText.replace(/O/g,"")
var newText=newText.replace(/U/g,"")
console.log(newText)
}

// 8
function converter()
{
    var a=document.getElementById('km')
    var b =a.value*1000
    console.log("your value in meters are: " + b +" meters")

    var b =a.value*100000
    console.log("your value in centimeters are: " + b +" centimeters")

    
    var b =a.value*39370.1
    console.log("your value in inches are: " + b +" inches")

    
    var b =a.value*3280.84
    console.log("your value in feets are: " + b +" feets")

}

// 10
function cashier(){
    var a=document.getElementById('amount')
    var b =a.value/100
    if(a.value%100==0)
    {
        console.log(b + " HUNDRED Note")
    }

    else 
    {
        console.log(Math.floor(a.value/100) + " HUNDRED Note")
        var b =a.value%100
        if (b%50==0)
        {
            console.log(b/50 + " FIFTY Note")
        }

        else
        {
            console.log(Math.floor(b/50) + " FIFTY Note")
            var c=b%50
            if(c%10==0)
            {
                console.log(c/10 + " TEN Notes")
            }
        }
    }
}