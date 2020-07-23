function inc(){
    var a = document.getElementById('output')
    output.value++
}

function dec(){
    var a = document.getElementById('output')
    output.value--
}

function changeImg(id,src){
    var img=document.getElementById(id)
    img.src=src
}

//3
var index, table = document.getElementById('table');
            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].cells[3].onclick = function()
                {
                    var c = confirm("do you want to delete this row");
                    if(c === true)
                    {
                        index = this.parentElement.rowIndex;
                        table.deleteRow(index);
                    }
                    
                    //console.log(index);
                };
                
            }

            