const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

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


});

//keyup event  for searching

//here we need to add event listener to the input not the form because we dont want submit event we want keyup event in the input



const filterTodos = (term) => {
    Array.from(list.children)// what we have done here is we have the html collection of lists thruh list.children
                              //and then we assigned filter class to those lists which donot match with the term
                              //so that they can be hidden 
        .filter((todo)=> !todo.textContent.includes(term))
        .forEach((todo)=>todo.classList.add('d-none'));

    Array.from(list.children)// what we do here is , the assigned filter class above remain in the list 
                             // even after match happens after adding class , so to remove that 
                              //if it maches again we remove the filtererd class   
        .filter((todo)=> todo.textContent.includes(term))
        .forEach((todo)=>todo.classList.remove('d-none'))

    
}

search.addEventListener('keyup',()=>{
    const term = search.value.trim();
    filterTodos(term);
});






