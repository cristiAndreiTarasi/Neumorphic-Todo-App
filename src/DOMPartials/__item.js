export const item = document.createElement('LI');
item.setAttribute('class', 'item');

import styles from '../styles/item.module.css';

export function itemHTML (todo) {
    return item.innerHTML = `
        <li class="${styles.item}" data-id="${todo.id}">
            <div class="${styles.content}">
                <label class="${styles.toggleControl}">
                    <input type="checkbox" class="${styles.toggleInput}"${todo.completed && ' checked'} />
                    <span class="${styles.control}"></span>
                </label>

                <p id="todo-value" class="${todo.completed && styles.textCompleted}">${todo.value}</p>
            </div>
            
            <div class="${styles.actions}">
                <i class="fas fa-marker ${todo.completed && styles.hideMarker}"></i>
                <i class="fas fa-trash-alt"></i>
            </div>
        </li>
    `;
}