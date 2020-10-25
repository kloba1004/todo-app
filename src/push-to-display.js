import { Project } from "./constructors";

const projects = [],
      toDos = [];

class PushToDisplay {   
    static print(item, itemType) {
        itemType === 'project' ? projects.push(item) : toDos.push(item);
        const content = document.querySelector('.content');
        const displayElement = document.createElement('div');
        displayElement.className = 'displayItem';
        
        for (let key in item) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${item[key]}`;
            displayElement.appendChild(p);
        }
        content.appendChild(displayElement);
    }
}

export {PushToDisplay, projects, toDos};