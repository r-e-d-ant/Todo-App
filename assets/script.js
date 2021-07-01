
const todoListItems = document.querySelector('.todo__lists');
const todoItem = document.querySelectorAll('.todo__item');

const newTodo = document.querySelector('.todo_input');

// Add Todo function
function addTodo() {
    // Todo input
    if(newTodo.value !== ''){
        // Create a Todo Item Div
        const todoItemDiv = document.createElement('li');
        // Add classes to it
        todoItemDiv.className = "todo__item";

        // Create a Todo Div
        const todoDiv = document.createElement('div');
        // Add classes to it
        todoDiv.className = "todo";
        todoDiv.appendChild(document.createTextNode(newTodo.value));

        // Add text node with todo input value
        todoItemDiv.appendChild(todoDiv);

        // ============== create action buttons container =============

        const actionButtonsContainer = document.createElement('div');
        // Add class to it
        actionButtonsContainer.className = "action__buttons";

        // ---------- COMPLETE BUTTON ------------ 

        // Create complete and check icon button
        const completeButton = document.createElement('div');
        const bxCheckIcon = document.createElement('i');

        // Add classes to complete and check button
        completeButton.className = "action__btn complete";
        bxCheckIcon.className = "bx bx-check";

        // Append check icon to complete button.
        completeButton.appendChild(bxCheckIcon);

        actionButtonsContainer.appendChild(completeButton);

        // ---------- DELETE BUTTON ------------ 

        // Create complete and check icon button
        const deleteButton = document.createElement('div');
        const bxTrashIcon = document.createElement('i');

        // Add classes to complete and check button
        deleteButton.className = "action__btn delete";
        bxTrashIcon.className = "bx bx-trash";

        // Append check icon to complete button.
        deleteButton.appendChild(bxTrashIcon);
        
        actionButtonsContainer.appendChild(deleteButton);

        // Append complete button to todo itemDiv
        todoItemDiv.appendChild(actionButtonsContainer);

        todoListItems.appendChild(todoItemDiv);
        newTodo.value = '';

        // Focus input
        // ....

    }else {
        alert("The input is empty!");
    }
}

// -------- ADD TODO -------
const addTodoButton = document.querySelector('.add__todo');

addTodoButton.addEventListener('click', (e) => {
    // e.preventDefault(); // To prevent initial behavior.
    addTodo()
    console.log(todoItem);
})

// ---- COMPLETE TODO ---- 
todoListItems.addEventListener('click', (e) => {
    if(e.target.classList.contains('complete') || e.target.classList.contains('bx-check')){
        var completeButton = e.target.parentElement;
        if(completeButton.parentElement.classList.contains('complete_todo_item')){
            completeButton.parentElement.classList.remove('complete_todo_item');
        }else {
            completeButton.parentElement.classList.add('complete_todo_item');
        }
    }
})

// ---- DELETE TODO ---- 
todoListItems.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete') || e.target.classList.contains('bx-trash')){
        var delButton = e.target.parentElement;
        delButton.parentElement.classList.add('delete_todo_item_animation');
        delButton.parentElement.addEventListener('transitionend', () => {
            delButton.parentElement.remove();
        })
    }
})


// Add todo to local storage

function storeTodoInLocalStorage(todoItemToBeStolen){
    if(typeof(Storage) !== "undefined"){
        localStorage.setItem("todos_stored", todoItemToBeStolen)
    }else {
    
    }
}