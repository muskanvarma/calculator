let input = document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach(Element => {
    Element.addEventListener("click", (e) => {
        console(e.target.textContent);
        if (e.target.textContent === "C") {
            input.innerText = "";
        } else if (e.target.textContent === "<") {
            input.innerText = input.innerText.slice(0, 1);
        } else if (e.target.textContent === "=") {
            input.innerText = eval(input.innerText)
        } else {
            input.innerText += e.target.textContent;
        }
        input.scroll = input.scrollWidth;
    })

})