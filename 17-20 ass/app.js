

//3
for(i=1;i<=10;i++)
{
    console.log(i)
}


//4
var a=prompt("Enter a number to show its multiplication table")
var b=prompt("Enter length of multiplication table")
for(i=1;i<=b;i++)
{
    console.log(a+'x'+i+'='+(a*i))
}

//10
function mul5(){
    var num=5
    while(num<=100)
    {
        document.write(num+' ')
        num+=5
    }
}

mul5();