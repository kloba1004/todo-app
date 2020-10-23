class Editor {
    static deleteItem(item) {
        return item = null;
    }

    static createItem(type, ...properties) {
        return new type(...properties);
    }
}

export default Editor;