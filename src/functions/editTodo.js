import toggleInputState from './toggleInputState.js';
import { addTodoFormField } from '../index.js';

export default (evt) => {
    if (evt.target.classList.contains('fa-marker')) {
        toggleInputState();
        addTodoFormField.focus();
        addTodoFormField.value = evt.target.parentElement.previousElementSibling.lastElementChild.textContent;
        localStorage.setItem('referenceTodo', JSON.stringify({ 
            id: evt.target.parentElement.parentElement.getAttribute('data-id'),
            value: addTodoFormField.value, 
        }));
    } else return;
};