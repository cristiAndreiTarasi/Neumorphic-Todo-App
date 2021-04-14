
export const sort = document.createElement('SECTION');
sort.setAttribute('id', 'sort');

import styles from '../styles/sort.module.css';

sort.innerHTML = `
    <ul class="${styles.sortingList}">
        <li class="${styles.listItem}">
            <span class="${styles.listItemText}">All todos</span>
            <i class="fas fa-circle ${styles.listItemIcon}"></i>
        </li>
        <li class="${styles.listItem}">
            <span class="${styles.listItemText}">Uncompleted todos</span>
            <i class="fas fa-dot-circle ${styles.listItemIcon}">
        </i></li>
        <li class="${styles.listItem}">
            <span class="${styles.listItemText}">Completed todos</span>
            <i class="fas fa-check-circle ${styles.listItemIcon}">
        </i></li>
    </ul>

    <p class="${styles.listItemGroupName}">Placeholder value</p>
`;


