let root = document.querySelector('.root');

function handleScroll() {
    quotes.forEach((elm) => {
        let div = document.createElement("div");

        let h2 = document.createElement('h2');
        h2.innerText = elm.quoteText;

        let  p = document.createElement('p');
        p.innerText = elm.quoteAuthor;

        div.append(h2, p);
        root.append(div);
        
    })
}


window.onload = function() {
    alert(`Page is Loaded`)
}


window.addEventListener("scroll", handleScroll)
