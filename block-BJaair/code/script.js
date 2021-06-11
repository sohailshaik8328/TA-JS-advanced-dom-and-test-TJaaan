let form = document.querySelector("form");
let ul = document.querySelector(".root");

let cardsData = JSON.parse(localStorage.getItem('cards')) || [];

function handleSubmit(event) {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;

    cardsData.push({title, category});
    localStorage.setItem("cards", JSON.stringify(cardsData));
    createUI(cardsData, ul);
}

function handleEdit(event, info, id, label) {
    let elm = event.target;
    let input = document.createElement('input');
    input.classList.add('changedInput')
    input.value = info;
    input.addEventListener("keyup", (e) => {
        if(e.keyCode === 13) {
            let editedValue = e.target.value;
            cardsData[id][label] = editedValue;
            createUI();
            localStorage.setItem('cards', JSON.stringify(cardsData));
        }        

    })

    input.addEventListener("blur", (e) => {
            let editedValue = e.target.value;
            cardsData[id][label] = editedValue;
            createUI();
            localStorage.setItem('cards', JSON.stringify(cardsData));
    })

    let parent = event.target.parentElement;

    parent.replaceChild(input, elm);    
}


function createUI(data = cardsData, root = ul) {
    root.innerHTML = "";
    let fragment = new DocumentFragment();
    data.forEach((card, index) => {
    let li = document.createElement('li');
    let category = document.createElement('p');
    category.innerText = card.category;
    category.addEventListener('dblclick', (event) => {
        handleEdit(event, card.category, index, 'category');
    });

    let title = document.createElement('h2');
    title.innerText = card.title;
    title.addEventListener('dblclick', (event) => {
        handleEdit(event, card.title, index, 'title');
    });

    li.append(category, title);

    fragment.appendChild(li);

    });
    root.append(fragment);
}

createUI(cardsData, ul);

form.addEventListener('submit', handleSubmit);

