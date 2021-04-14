
import { list } from '../index.js';
import { itemHTML } from '../DOMPartials/__item.js';

export default (todos) => {
    list.innerHTML = '';
    todos.map(todo => list.innerHTML += itemHTML(todo));
};