document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" class="checkbox">
                <span class="todo-text">${todoText}</span>
                <button class="delete-btn">Excluir</button>
            `;
            
            const checkbox = li.querySelector('.checkbox');
            const todoTextSpan = li.querySelector('.todo-text');
            
            checkbox.addEventListener('change', () => {
                todoTextSpan.classList.toggle('completed');
            });

            li.querySelector('.delete-btn').addEventListener('click', () => {
                li.remove();
            });

            todoList.appendChild(li);
            todoInput.value = '';
        }
    }
});