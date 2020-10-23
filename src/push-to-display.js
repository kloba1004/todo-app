
class PushToDisplay {   
    static print(item) {
        const content = document.querySelector('.content');
        const displayElement = document.createElement('div');
        
        for (let key in item) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${item[key]}`;
            displayElement.appendChild(p);
        }
        content.appendChild(displayElement);
    }
}

export default PushToDisplay;