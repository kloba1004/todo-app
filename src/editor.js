class Editor {
    static deleteItem(item) {
        return item = null;
    }

    static createItem(item, type, properties) {
        return item = new type(properties);
    }
}

export default Editor;