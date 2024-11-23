const btn=document.getElementById('btn');
const input=document.getElementById('input')
const container=document.getElementById('container')



btn.addEventListener("click",()=>{
    if (!input.value.trim()) {
    alert("Task cannot be empty!");
    return;
}


const li=document.createElement('li');
li.className="added-li"

const checkbox=document.createElement('input');
checkbox.type='checkbox';
// checkbox.className="task-checkbox";


const span=document.createElement('span');
span.textContent=input.value;
span.className = "task-text"
input.value='';


const editbtn=document.createElement('button');
editbtn.className="editbtn";
editbtn.innerHTML="<i class='bx bxs-edit-alt'></i>";


const dltbtn=document.createElement('button');
dltbtn.className="dltbtn";
dltbtn.innerHTML="<img src=delete-removebg-preview.png id=img>";


li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(editbtn);
li.appendChild(dltbtn);


const ul=document.getElementById('ul');
ul.appendChild(li);
dltbtn.addEventListener("click",()=>{
    ul.removeChild(li);




})


editbtn.addEventListener("click", () => {
    if (editbtn.innerHTML.includes('edit-alt')) {
    
        const inputField = document.createElement('input');
        inputField.type = 'text';
     
        inputField.value = span.textContent;
        inputField.className = "edit-input";

        li.replaceChild(inputField, span); // Replace span with input
        editbtn.innerHTML = "<i class='bx bx-check'></i>";
        
        
        editbtn.inputField = inputField;
    } else {
        // Save the edited task
        const newText = editbtn.inputField.value.trim();
        if (!newText) {
            alert("Task cannot be empty!");
            return;
        }

        span.textContent = newText;
        li.replaceChild(span, editbtn.inputField);
        editbtn.innerHTML = "<i class='bx bxs-edit-alt'></i>";

        delete editbtn.inputField;
    }
});


})