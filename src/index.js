//project, todo & checklicst class inheritance
class Project {
    constructor(title) {
        this.title = title;
    }
}

class ToDo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

class CheckListItem  {
    constructor(description) {
        this.description = description;
    }
}

project1 = new Project('prvi projekt');
prvizadatak = new ToDo('zadatak', 'pun kufer toga', 'do sutra', 'visok prioritet', 'ko ga jebe stari moj');
prvicheck = new CheckListItem('napisati ovaj kod');

console.log(project1)
console.log(Project.prototype);

console.log(prvizadatak);
console.log(ToDo.prototype);
console.log(prvicheck);
console.log(CheckListItem.prototype);