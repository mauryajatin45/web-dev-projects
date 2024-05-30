const inputBox = document.getElementById('add_text');
const listitem = document.getElementById('list-items');


function adddata(){
    if(inputBox.value === ''){
        alert('Please enter your task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listitem.appendChild(li);
        let div = document.createElement("div")
        div.innerHTML = "\u00d7"
        li.appendChild(div)
    }
    inputBox.value = "";
}
