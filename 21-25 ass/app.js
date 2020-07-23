//1
function greet(){
    var a=prompt("Enter First Name:")
    var b=prompt("Enter Last Name:")
    alert(a+" "+b)
}

//2
function phone(){
    var a=prompt("Enter Your Favourite Phone")
    document.write(a.length)
}

//3
function index(){
    var string="Pakistani"
    document.write(string.indexOf('n'))
}

//4
function hello(){
    var string="Hello World"
    document.write(string.lastIndexOf('l'))
}

//5
function pos(){
    var string="Pakistani"
    document.write(string[3])
}

//6
function greet1(){
    var a=prompt("Enter First Name:")
    var b=prompt("Enter Last Name:")
    document.write( a.concat(" ",b))
}

//7
function city(){
    var city="Hyderabad"
    document.write(city.replace("Hyder","Islam"))
}

//8
function and(){
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    document.write(message.replace(/and/g, "&"))
}

//9
function strNum(){
    var str="472"
    document.write(str,"<br>")
    document.write(typeof(str),"<br>")
    
    str=Number(str)
    document.write(str,"<br>")
    document.write(typeof(str))

}

//10
function upCase(){
    var str="peanuts"
    document.write(str.toUpperCase())
}

//11
function capped(){
    var a=prompt("Enter Input")
    var firstChar = a.slice(0, 1);
    var otherChars = a.slice(1);
    firstChar = firstChar.toUpperCase();
    otherChars = otherChars.toLowerCase();
    var cappedCity = firstChar + otherChars;

    document.write(cappedCity)
}

//12
function point(){
    var Number=35.36
    var a=Number.toString()
    document.write(a.replace(".",""))
}

//14
function bakery(){
    A = ["cake", "apple pie", "cookie", "chips", "patties"]
    var user=prompt("What do you want?")
    var Nuser=user.toLowerCase()
    for(var i=0;i<A.length;i++)
    {
        if(Nuser==A[i])
        {
            alert(user+" is available at index " +i+" in our bakery")
            break;
        }
    }
}

//16
function array(){
    var university = "University of Karachi";
    var arr=university.split("")
    for(var i=0;i<arr.length;i++)
    {
        document.write(arr[i],"<br>")
    }
}

//17
function lpos(){
    var string="Pakistan"
    document.write(string[string.length-1])
}

//18
function count(){
var str = "The quick brown fox jumps over the lazy dog"
 var numChars = str.length;
 var counter=0
 for (var i = 0; i < numChars; i++) {
 if (str.slice(i, i + 3) === "the") {
     counter++
 }
 else if(str.slice(i, i + 3) === "The") {
    counter++
}
}
document.write(counter)
}
