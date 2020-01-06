var input  = document.getElementById("userinput");
var button  = document.getElementById("button");
var ul = document.querySelector("ul");

function getLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
          li.appendChild(document.createTextNode(input.value));
          ul.appendChild(li);
          input.value ="";
}

function addAfterClick() {
    if(getLength() > 0) {
        createListElement();
    }  
}

function addAfterEnter(event) {
    if(getLength() > 0 && event.keyCode == 13 ) {
        createListElement();
    }  
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterEnter);