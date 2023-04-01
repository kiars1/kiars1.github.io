let button = document.querySelector(".button");
let closebutton = document.querySelector(".popup-button");
let popup = document.querySelector(".popup");
let video = document.querySelector(".video");
var ytplayer;

document.addEventListener("keydown", keySearch);
button.addEventListener("click", search);

function keySearch(e) {
    if (e.code == 'Enter') {
        search();
    }
}

function keyClose(e) {
    if (e.code == 'Escape') {
        close();
    }
}

function search() {
    let Input = document.querySelector(".input");
    if (Input.value.length <= 0) {
    video.setAttribute('src', 'https://www.youtube.com/embed/GtL1huin9EE');
        popup.classList.add('popup-oppen');
        document.addEventListener("keydown", keyClose);
        closebutton.addEventListener("click", close);
        document.removeEventListener("keydown", keySearch);
        button.removeEventListener("click", search);
        player.addEventListener("keydown", keyClose);
    } else {
    window.open(["https://yandex.ru/search/?text=" + Input.value], "_self");
    }
}

function close() {
    popup.classList.remove('popup-oppen');
    video.setAttribute('src', ' ');
    document.removeEventListener("keydown", keyClose);
    closebutton.removeEventListener("click", close);
    document.addEventListener("keydown", keySearch);
    document.addEventListener("keydown", keySearch);
    button.addEventListener("click", search);
}