
import styles from '../styles/submit.module.css';
import {
    addTodoFormField,
    addTodoFormFieldLabel,
    addTodoFormFieldLabelIcon,
    dropShadow,
    shadowBg, } from '../index.js';

export default () => {
    addTodoFormField.classList.toggle(styles.addTodoFormFieldExpanded);
    addTodoFormFieldLabel.classList.toggle(styles.labelForAddTodoFormFieldExpanded);
    dropShadow.classList.toggle(styles.dropShadowExpanded);
    shadowBg.classList.toggle(styles.shadowBgExpanded);

    
    setTimeout(() => {
        const url = addTodoFormFieldLabelIcon.src;
        const splitUpToName = url.split('images/');
        const splitNameExt = splitUpToName[1].split('.');
        
        if (splitNameExt[0] === 'plus') {
            if (addTodoFormField.value === '') splitNameExt[0] = 'right-arrow';
            else splitNameExt[0] = 'marker-solid';
        } else {
            addTodoFormField.value = '';
            splitNameExt[0] = 'plus'; 
        }
        
        const swapedUrl = `${splitUpToName[0]}images/${splitNameExt[0]}.${splitNameExt[1]}`;
        addTodoFormFieldLabelIcon.src = swapedUrl;
    }, 250);
}; 