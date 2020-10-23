import {Project, ToDo, ChecklistItem} from './constructors.js';
import Editor from './editor.js';
import PushToDisplay from './push-to-display.js';
import PullFromDisplay from './pull-from-display.js';

const forms = document.querySelectorAll('form');

forms.forEach(form => form.addEventListener('submit', (e) =>{
    const itemType = e.target.className;
    const inputs = PullFromDisplay.download(`.${itemType}-input`);
    if (itemType === 'Project') {
        var item = Editor.createItem(Project, ...inputs);
    } else {
        var item = Editor.createItem(ToDo, ...inputs);
    }
    PushToDisplay.print(item);

    e.preventDefault();
    e.target.reset();
}));