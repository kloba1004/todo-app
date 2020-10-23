import {Project, ToDo, ChecklistItem} from './constructors.js';
import Editor from './editor.js';
import PushToDisplay from './push-to-display.js';
import PullFromDisplay from './pull-from-display.js';
import './style.css';

const forms = document.querySelectorAll('form');

forms.forEach(form => form.addEventListener('submit', (e) =>{
    const formType = e.target.className;
    const inputs = PullFromDisplay.download(`.${formType}-input`);
    if (formType === 'project') {
        var newItem = Editor.createItem(Project, ...inputs);
    } else {
        var newItem = Editor.createItem(ToDo, ...inputs);
    }
    PushToDisplay.print(newItem);

    e.preventDefault();
    e.target.reset();
}));