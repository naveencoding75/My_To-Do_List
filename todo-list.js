const todolist = [{
    name: 'cooking meth',
    duedate: '2022-12-22'
}, {
    name: 'supplying',
    duedate: '2022-12-30'
}];

renderTodolist();

function renderTodolist(){
    let todolistHTML = '';

    for(let i = 0; i < todolist.length; i++){
        const todoObject = todolist[i];
        const {name, duedate} = todoObject;
        todolistHTML += `
            <div>${name}</div>
            <div>${duedate}</div>
            <button onclick="
            todolist.splice(${i}, 1);
            renderTodolist();
            " class="delete-todo-button">Delete</button>`;
    }

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function addTodo(){
    let inputElement = document.querySelector('.js-name-input');
    let name = inputElement.value;

    const dateinputElement = document.querySelector('.js-date-input');
    let duedate = dateinputElement.value;
    
    todolist.push({
        name,
        duedate
    });

    inputElement.value = '';
    renderTodolist();
}