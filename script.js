const input = document.getElementById('input-box');
const button = document.getElementById('submit-button');
const list = document.getElementById('list');

var elements = [];

button.addEventListener('click',e=>{
    elements = list.children;
    let hasRepeated = false;
    if(elements.length > 0)
    {
        for (let a = 0; a < elements.length; a++) {
            if(input.value === elements[a].innerHTML.replace(elements[a].children[0].outerHTML,''))
            {
                hasRepeated = true;
            }
        }
    }
   
    if(input.value !== "" && input.value[0] !== " " && hasRepeated === false)
    {
        let li = document.createElement("li"); //creates new list element
        li.appendChild(document.createTextNode(input.value)); //appends text to the list element

        let btn = document.createElement("button") //creates new button
        btn.className = "list-button";//gives class to new button
        btn.appendChild(document.createTextNode("delete"));//appends text to new button
        btn.addEventListener('click',e=>{
            btn.parentElement.remove();
        });

        li.appendChild(btn);//appends button to list element
        list.appendChild(li);//appends list element to unordered list
        
        input.value = "";
    }
    
    
});

