let form = document.querySelector('form');
let ul = document.querySelector('.ul');
let items = document.querySelectorAll('.li');

function handleSubmit(event) {
    event.preventDefault();
    let value = event.target.elements.input.value;
    createUI(value);
}

function createUI(value) {
    
    let li = document.createElement('li');
    li.classList.add("center");
    li.classList.add('li');

    let p = document.createElement('p');
    p.innerText = value;

    li.appendChild(p);

    ul.appendChild(li);
}


document.addEventListener('DOMContentLoaded', (event) => {
    function handleDragStart(e) {
        this.style.opacity = 0.4;
    }
    
    function handleDragEnd(e) {
        this.style.opacity = 1;

        items.forEach((item) => {
            item.classList.remove('li over');
        });
    }

    function handleDragOver(e) {
        if(e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('li over');
    }

    function handleDragLeave(e) {
        this.classList.remove('li over');
    }
    
items.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('dragend', handleDragEnd, false);
});
    
})


form.addEventListener('submit', handleSubmit);