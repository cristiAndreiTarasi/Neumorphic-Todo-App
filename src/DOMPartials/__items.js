export const items = document.createElement('SECTION');
items.setAttribute('id', 'items');

import styles from '../styles/list.module.css';

items.innerHTML = `<ul id="list" class="${styles.list}"></ul>`;

    