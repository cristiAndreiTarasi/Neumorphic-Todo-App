import saveToStorage from './saveToStorage.js';
import renderTodos from './renderTodos.js';

export default (evt) => {
    if (evt.target.getAttribute('class') !== 'fas fa-trash-alt') return;

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoText = evt.target.parentElement.previousElementSibling.lastElementChild.innerText;
    const filteredTodos = todos.filter(todo => todo.value !== todoText);

    saveToStorage(filteredTodos);
    renderTodos(filteredTodos);
}