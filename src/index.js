import {Project, ToDo, ChecklistItem} from './constructors.js';
import Editor from './editor.js';
import PushToDisplay from './push-to-display.js';
import PullFromDisplay from './pull-from-display.js';

const form = document.querySelector('.todo-form');

form.addEventListener('submit', (e) =>{
    const inputs = PullFromDisplay.download();
    const toDo = Editor.createItem(ToDo, ...inputs);
    PushToDisplay.print(toDo);
    e.preventDefault();
    e.target.reset();
});