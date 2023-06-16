const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo =>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                     <span>${todo}</span>
                        <i class="far fa-trash-alt delete"></i>
                     </li>`;
    
    list.innerHTML += html;  

};

addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();   // resets the input field inside the form
    }
});

//delete todos 
//we are adding event to the ul itself instead of every thrashcan because we can use event delegation to our advantge here 
//adding event listeners to every thrashcan can vbe hetctic and again if user adds more thrashcan then it ll not be easy to attach event listeners to ech of em 

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){  // if the target of the event conains class delete , then only the statement executes 
                                                // the thrashcan has the class delete so if we click thrashcan the block executes
        e.target.parentElement.remove();     // the thrashcan is the target element and then the prent element is the list itself so we remove it 
    }
})    