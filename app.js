var list=document.getElementById('list');
function enter(){
    var input=document.getElementById('todo');
    var li=document.createElement('li');
    var lit=document.createTextNode(todo.value);
    li.appendChild(lit);
    console.log(li);

var deletebtn=document.createElement("button");
var deltext=document.createTextNode('Delete');
deletebtn.setAttribute("class","btn btn-danger del");
deletebtn.setAttribute("onclick","deleteitem(this)");
deletebtn.appendChild(deltext);
li.appendChild(deletebtn);
 
// list.appendChild(li);


var editbtn=document.createElement('button');
var edittext=document.createTextNode('Edit');
editbtn.appendChild(edittext);
editbtn.setAttribute("class","btn btn-info edit");
editbtn.setAttribute("onclick","edititem(this)")
li.appendChild(editbtn);
list.appendChild(li);
}
function deleteitem(e){
 e.parentNode.remove();
}

function edititem(e){
var editValue=prompt("Enter you updated value");
e.parentNode.firstChild.nodeValue=editValue;
}

function deleteAll(){
list.innerHTML=" ";
}