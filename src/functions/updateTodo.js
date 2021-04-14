import saveToStorage from './saveToStorage.js';
import renderTodos from './renderTodos.js';
import toggleInputState from './toggleInputState.js';
import { addTodoFormField } from '../index.js';

export default () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const refTodo = JSON.parse(localStorage.getItem('referenceTodo'));
    const selectedTodo = todos.find(todo => todo.id === parseInt(refTodo.id));
    const selectedTodoIndex = todos.findIndex(todo => todo.id === parseInt(refTodo.id));
    const updatedTodo = { ...selectedTodo, value: addTodoFormField.value };
    const updatedTodos = [
        ...todos.slice(0, selectedTodoIndex),
        updatedTodo,
        ...todos.slice(selectedTodoIndex + 1, todos.length),
    ];

    localStorage.removeItem('referenceTodo');
    saveToStorage(updatedTodos);
    renderTodos(updatedTodos); 
    addTodoFormField.blur();
    addTodoFormField.value = '';
};