let form = document.querySelector("form");
let root = document.querySelector(".root");

let titleElm = form.elements.title;
let categoryElm = form.elements.category;


function handleSubmit(event)  {
        event.preventDefault();
    let li = document.createElement('li');
    let category = document.createElement('a');
    category.innerText = categoryElm.value;
    category.addEventListener('dblclick', () => {
        category = document.createElement('input')
        category.style.color = "green"
    })

    let title = document.createElement('h2');
    title.innerText = titleElm.value;

    // console.log(category);
    // console.log(title)

    li.append(category, title);
    root.append(li);

    titleElm.value = "";
    categoryElm.value = "";
}

form.addEventListener('submit', handleSubmit)

