//1
function date(){
    var newdate= new Date();
    document.write(newdate)
}

//2
function greet(){
    var first=prompt("Enter First Name: ")
    var last=prompt("Enter Last Name: ")
    alert("Hello "+first +" "+last)
}

//3
function add(){
    var first=+prompt("Enter First Num: ")
    var last=+prompt("Enter Second Num: ")
    var result=first+last
    document.write(result) 
}

//5
function square(){
    var num=+prompt("Enter Num for Square: ")
    num=num*num
    document.write(num)
}

//6
function factorial(){
    var num=+prompt()
    var a=1
    for(i=num;i>0;i--){
        a=i*a
    }
    document.write(a)
}

//7
function counting(){
    var a=+prompt()
    var b=+prompt()
    for(i=a;i<=b;i++)
    {
        document.write(i ,"<br>")
    }
}

//10
function palindrome(){
    
    var nam=prompt("Enter Word:");
    var check = "";
    for(i=nam.length-1;i>=0;i--)
    {
        check+=nam[i];
    }
    
    if (check===nam)
    {
        console.log(check + " is palindrome");
    }
}

//14
function calculateHypotenuse(){

    var base=+prompt("Enter Base Value: ")
    var perpendicular=+prompt("Enter Perpendicular Value: ")

    function calculateSquare(num){
        num=num*num
        return num
    }

    var newBase= calculateSquare(base)
    var newPerpendicular= calculateSquare(perpendicular)

    var hypotenuse=newBase+newPerpendicular
    hypotenuse=Math.pow(hypotenuse,(1/2))

    document.write("Hypotenuse is: "+hypotenuse)
}

