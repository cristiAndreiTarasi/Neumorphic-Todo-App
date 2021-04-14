// dependencies
import { app } from './DOMPartials/__app.js';
import { header } from './DOMPartials/__header.js';
import { submit } from './DOMPartials/__submit.js';
import { sort } from './DOMPartials/__sort.js';
import { items } from './DOMPartials/__items.js';
import { counters } from './DOMPartials/__counters.js';

// functions
import addTodo from './functions/addTodo.js';
import renderTodos from './functions/renderTodos.js';
import completeTodo from './functions/completeTodo.js';
import deleteTodo from './functions/deleteTodo.js';
import editTodo from './functions/editTodo.js';
import updateTodo from './functions/updateTodo.js';
import toggleInputState from './functions/toggleInputState.js';

// Append the DOM slices(partials) to the main root
document.body.querySelector('#root').appendChild(app);
[header, submit, sort, items, counters].forEach(node => app.append(node));

/**
 * items's block references, 
 * only available after having been added on the line above
 */
export const form = document.forms.todosForm;
export const addTodoFormFieldLabel = form.children[0];
export const addTodoFormFieldLabelIcon = form.children[0].children[0];
export const dropShadow = form.children[1];
export const shadowBg = form.children[2];
export const addTodoFormField = form.children[3];
export const list = items.querySelector('#list');

// app initialization
function init() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    form.addEventListener('submit', evt => {
        evt.preventDefault();
        
        const iconName = addTodoFormFieldLabelIcon.src.split('/')[4].split('.')[0];
        /**
         * @toggleInputState not needed to be executed,
         *  because it's already set up to fire on every blur event,
         * which every function in the @if @else block below has at the bottom. 
         */
        if (iconName === 'marker-solid') updateTodo();
        else addTodo();
    });

    list.addEventListener('change', completeTodo);
    list.addEventListener('click', deleteTodo);
    list.addEventListener('click', editTodo);
    addTodoFormField.addEventListener('blur', toggleInputState);
    
    addTodoFormFieldLabelIcon.addEventListener('click', (evt) => {
        evt.preventDefault();
        addTodoFormField.focus();
        const iconName = addTodoFormFieldLabelIcon.src.split('/')[4].split('.')[0];
        if (iconName === 'right-arrow' && addTodoFormField.value !== '') form.requestSubmit();
        if (iconName === 'marker-solid' && addTodoFormField.value !== '') updateTodo();
        toggleInputState();
    });
    
    renderTodos(todos);
}

init();