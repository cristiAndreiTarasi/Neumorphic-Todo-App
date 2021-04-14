export const counters = document.createElement('SECTION');
counters.setAttribute('id', 'counters');

import styles from '../styles/counters.module.css';
// console.log(styles);

counters.innerHTML = `
    <ul class="${styles.list}">
        <li class="${styles.item}">Total <span>0</span></li>
        <li class="${styles.item}">Completed <span>0</span></li>
        <li class="${styles.item}">Uncompleted <span>0</span></li>
    </ul>
`;

