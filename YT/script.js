let button = document.querySelector(".button");
let closebutton = document.querySelector(".popup-button");
let popup = document.querySelector(".popup");
let input = document.querySelector("input");

let listener = async event => {
    event.preventDefault();
    search();
}

document.addEventListener("submit", listener);

button.addEventListener("click", search);

function keyClose(e) {
    if (e.code == 'Escape') {
        close();
    }
}

function search() {
    let Input = document.querySelector(".input");
    if (Input.value.length <= 0) {
        input.toggleAttribute("disabled", true);
        popup.classList.add('popup-oppen');
        document.addEventListener("keydown", keyClose);
        closebutton.addEventListener("click", close);
        button.removeEventListener("click", search);
        document.removeEventListener("submit", listener);
    } else if (input.value.toLowerCase() === 'rickroll' || input.value.toLowerCase() === 'рикролл') {
        window.open(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'], "_self");
    } else {
        window.open(["https://yandex.ru/search/?text=" + Input.value], "_self");
    }
}

function close() {
    input.toggleAttribute("disabled", false);
    input.focus();
    popup.classList.remove('popup-oppen');
    document.removeEventListener("keydown", keyClose);
    closebutton.removeEventListener("click", close);
    button.addEventListener("click", search);
    document.addEventListener("submit", listener);
}