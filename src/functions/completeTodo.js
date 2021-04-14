import saveToStorage from './saveToStorage.js';
import styles from '../styles/item.module.css';

export default (evt) => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const evtPElem = evt.target.parentElement;
    const todoText = evtPElem.nextElementSibling.innerText;
    
    todos.map(todo => {
        if (todo.value === todoText) {
            todo.completed = !todo.completed;
            
            if (todo.completed) {
                evtPElem.nextElementSibling.classList.toggle(styles.textCompleted);
                evtPElem.parentElement.nextElementSibling.firstElementChild.classList.toggle(styles.hideMarker)
            } else {
                evtPElem.nextElementSibling.classList.toggle(styles.textCompleted);
                evtPElem.parentElement.nextElementSibling.firstElementChild.classList.toggle(styles.hideMarker)
            }
        } 
    });

    saveToStorage(todos);
};