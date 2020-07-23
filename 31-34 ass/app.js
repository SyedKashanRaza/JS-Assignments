//1
var newdate= new Date();
document.write("<h2>Task 1</h2>")
document.write(newdate,"<br>")

//2
var months=["january","februrary","march","Aprill","May","june","july","August","September","October","November","December"]
var d = new Date();
var currentMonth = d.getMonth();
document.write("<h2>Task 2</h2>")
document.write(months[currentMonth],"<br>")

//3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
document.write("<h2>Task 3</h2>")
document.write(dayNames[theDay],"<br>")

//4
var a=new Date();
var today=a.getDay();
if(today==5||today==6){
    document.write("<h2>Task 4</h2>")
    document.write("It's Fun Day!!","<br>")
}

//5
var a=new Date();
var today=a.getDate();
if(today<16){
    document.write("<h2>Task 5</h2>")
    document.write("First Fifteen Days of Month","<br>")
}
else
{
    document.write("<h2>Task 5</h2>")
    document.write("Last Fifteen Days of Month","<br>")
}

//6
var a=new Date();
var milli=a.getTime();

document.write("<h2>Task 6</h2>")
document.write(a,"<br>")
document.write("Ellapsed Milliseconds since january 1,1970:"+milli,"<br>")
document.write("Ellapsed Minutes since january 1,1970:"+(milli/60000),"<br>")

//7
var a=new Date();
var time=a.getHours();
document.write("<h2>Task 7:Alert</h2>")
if(time<12){
    alert("It's AM")
}
else
{
    alert("It's PM")
}

//8 
var a= new Date("Dec 31, 2020");
document.write("<h2>Task 8</h2>")
document.write("Later Date: "+a, "<br>")

//9
var a= new Date("June 18, 2015");
var b= new Date("Apr 20, 2020");
var c=b.getTime()-a.getTime();
c=c/(1000*60*60*24)
document.write("<h2>Task 9</h2>")
document.write(c+" days have passed since !st Ramdan,2015", "<br>")

//10
var a= new Date("Jan 1, 2015");
var b= new Date();
var c=b.getTime()-a.getTime();
c=c/(1000)
document.write("<h2>Task 10</h2>")
document.write(c+" seconds had passed since beginning of 2015", "<br>")


//11
var d = new Date();
var a = new Date();
d.setHours(a.getHours()-1);
document.write("<h2>Task 11</h2>")
document.write("current date: "+a ,"<br>")
document.write("1 hour ago: "+d ,"<br>")

//12
var d = new Date();
var a = new Date();
d.setFullYear(1920);
document.write("<h2>Task 12</h2>")
document.write("current date: "+a ,"<br>")
document.write("100 years back: "+d ,"<br>")

//13
var a=prompt("Enter Your Age: ")
var d = new Date();
var currentYear = d.getFullYear();
var b=currentYear-a
document.write("<h2>Task 13</h2>")
document.write("Your birth year is: "+b)

//14
var a=prompt("Customer Name: ")
var b=prompt("Month: ")
var c=prompt("Number of units: ")
var d=prompt("Charges per unit: ")
var latePay=250

var net=c*d
net=net.toFixed(2)
var late=net+latePay
late=late.toFixed(2)

document.write("<h2>Task 14</h2>")
document.write("<h1>K-Electric Bill</h1>")
document.write("Customer Name: "+a ,"<br>")
document.write("Month: "+b ,"<br>")
document.write("Number of units: "+c ,"<br>")
document.write("Charges per unit: "+d ,"<br>")
document.write("Net Amount Payable (within Due Date): "+net ,"<br>")
document.write("Late Payment Surcharge "+latePay ,"<br>")