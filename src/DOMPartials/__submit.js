export const submit = document.createElement('SECTION');
submit.setAttribute('id', 'submit');

import styles from '../styles/submit.module.css';

submit.innerHTML = `
    <form class="${styles.addTodoForm}" name="todosForm">
        <label id="labelForAddTodoFormField" for="addTodoFormField" class="${styles.labelForAddTodoFormField}">
            <img src="./images/plus.svg" class="${styles.plus}" id="expandInput" />
        </label>
        <span class="${styles.dropShadow}"></span>
        <span class="${styles.shadowBg}"></span>
        
        <input type="text" class="${styles.addTodoFormField}" id="addTodoFormField" />
    </form>
`;




