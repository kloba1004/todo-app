
class PushToDisplay {   
    static print(item) {
        const content = document.querySelector('.content');
        const displayElement = document.createElement('div');
        displayElement.textContent = item.title;
        content.appendChild(displayElement);
    }
}

export default PushToDisplay;