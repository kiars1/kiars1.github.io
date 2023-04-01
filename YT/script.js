let button = document.querySelector(".button");
let closebutton = document.querySelector(".popup-button");
let popup = document.querySelector(".popup");
let video = document.querySelector(".video");
let input= document.querySelector("input");

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
        video.setAttribute('src', 'https://www.youtube.com/embed/GtL1huin9EE');
        input.toggleAttribute("disabled", true);
        popup.classList.add('popup-oppen');
        document.addEventListener("keydown", keyClose);
        closebutton.addEventListener("click", close);
        button.removeEventListener("click", search);
        document.removeEventListener("submit", listener);
    } else {
    window.open(["https://yandex.ru/search/?text=" + Input.value], "_self");
    }
}

function close() {
    input.toggleAttribute("disabled", false);
    input.focus();
    popup.classList.remove('popup-oppen');
    video.setAttribute('src', ' ');
    document.removeEventListener("keydown", keyClose);
    closebutton.removeEventListener("click", close);
    button.addEventListener("click", search);
    document.addEventListener("submit", listener);
}