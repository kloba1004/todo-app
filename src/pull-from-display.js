class PullFromDisplay {
    static download(inputType) {
        const inputs = document.querySelectorAll(inputType);
        const data = [];
        inputs.forEach(input => data.push(input.value));
        return data;
    }
}

export default PullFromDisplay;