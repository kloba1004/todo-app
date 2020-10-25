class Project {
    constructor(title) {
        this.title = title;
    }

    setTitle(title) {
        this.title = title;
    }
}

class ToDo extends Project {
    constructor(title, description, dueDate, priority, notes, whichProject) {
        super(title);
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.whichProject = whichProject;
    }

    setDescription(description) {
        this.description = description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    setNotes(notes) {
        this.notes = notes;
    }
}

class ChecklistItem  {
    constructor(description) {
        this.description = description;
    }

    setDescription(description) {
        this.description = description;
    }
}

export {Project, ToDo, ChecklistItem};