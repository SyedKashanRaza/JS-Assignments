function  as(){
var aa=document.getElementById('name')
console.log("Username : "+aa.value)
var ab=document.getElementById('pwd')
console.log("Password : "+ab.value)
var ac=document.getElementById('dob')
console.log("Date of Birth : "+ac.value)
var ad=document.getElementById('email')
console.log("Emaid Address : "+ad.value)
var ae=document.getElementById('flag')
console.log("Country : "+ae.value)

var items=document.getElementsByClassName('asa');
				var selectedItems="";
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox' && items[i].checked==true)
						selectedItems+=items[i].value+"\n";
				}
console.log("Accounts: "+selectedItems)
 
            var ele = document.getElementsByName('Gender'); 
              
            for(i = 0; i < ele.length; i++) { 
                  
                if(ele[i].type="radio") { 
                  
                    if(ele[i].checked) 
                        console.log(ele[i].name + ": " 
                                + ele[i].value) 
                } 
            } 

}