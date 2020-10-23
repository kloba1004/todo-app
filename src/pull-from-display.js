class PullFromDisplay {
    static download() {
        const inputs = document.querySelectorAll('.todo-input');
        const data = [];
        inputs.forEach(input => data.push(input.value));
        return data;
    }
}

export default PullFromDisplay;