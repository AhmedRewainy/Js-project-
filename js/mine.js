var listName =document.getElementById("new_item");
var listNameValue;
var inPuts=[];
var count=0;
   

function add()

{
    listNameValue=listName.value;
    alert(""+listNameValue+"");
    if(listNameValue.length !=0)
    {
        inPuts.push(listNameValue);
        count++;
        listName.value="";
        var temp ="";
        for(var i=0; i< count; i++)
        {
            temp += "<tr><td>"+inPuts[i]+"</td></tr>"
        }
        document.getElementById("tableBody").innerHTML = temp;
    }
}

function    ValidateUserName()
{
    var regex = /^[A-Z];/
    if(regex.test(userName.value) == true)
       { 
            document.getElementById("alertName").style.display="none";  
       }
    else
    {
            document.getElementById("alertName").style.display="block";  
    }
}