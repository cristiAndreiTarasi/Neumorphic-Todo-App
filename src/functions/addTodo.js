import { addTodoFormField, } from '../index.js';
import saveToStorage from './saveToStorage.js';
import renderTodos from './renderTodos.js';
import toggleInputState from './toggleInputState.js';

export default () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodo = {
        id: Date.now(),
        value: addTodoFormField.value,
        completed: false
    };
    
    todos.push(newTodo);
    addTodoFormField.value = '';
    
    saveToStorage(todos);
    renderTodos(todos);
    addTodoFormField.blur();
};