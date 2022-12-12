var inputfeild = document.getElementById('inputfeild')
var addtodo = document.getElementById('addtodo')
var todos = document.getElementById('todos')

// console.log()

function addval() {
    if (inputfeild.value == ""){
        alert ("Enter TODO")
    }else{
        console.log(inputfeild)
    var li = document.createElement('li')
    var litext = document.createTextNode(inputfeild.value)
    li.appendChild(litext)
    todos.appendChild(li)
    
    // add button
    
    var edittext = document.createElement ('BUTTON')
    var editbtntext = document.createTextNode("Edittodo")
    edittext.appendChild(editbtntext)
    edittext.setAttribute("onclick","edittodo(this)")
    li.appendChild(edittext)
    todos.appendChild(li)
    inputfeild.value=" "
    
    // del button
    
    
    var delt = document.createElement ('BUTTON')
    var delttext = document.createTextNode ('Delete')
    delt.appendChild(delttext)
    delt.setAttribute("onclick","delt(this)")
    li.appendChild(delt)
    todos.appendChild(li)
    
}
    
}


function edittodo(element){
    var newvalue=prompt("Enter the Value")
    console.log(element.parentNode.firstChild.nodeValue)
    element.parentNode.firstChild.nodeValue=newvalue
}

function delt(element){
    element.parentNode.remove()
}

 function delall(){
     todos.innerHTML = ""
 }