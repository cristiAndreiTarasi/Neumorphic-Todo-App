
export const header = document.createElement('HEADER');
header.setAttribute('id', 'header');

import styles from '../styles/header.module.css';

header.innerHTML = `
    <header class="${styles.header}">
        <h1 class="${styles.title}">Todo List</h1>
        <h2 class="${styles.subtitle}">made by: <span>Cristi</span></h2>
    </header>
`;


