import { VanillaTilt } from "./vendor/vanilla-tilt.js";

const API_KEY = "fc89fda16190576f6611cd5c40d47d0e";
const weather = document.querySelector(".weather__subtitle");
const NowTimeData = new Date();
const Year = NowTimeData.getYear();
const Month = NowTimeData.getMonth();
const Day = NowTimeData.getDay();
const Data = NowTimeData.getDate();
const Hour = NowTimeData.getHours();
const Minutes = NowTimeData.getMinutes();
const copyright = document.querySelector('.footer__copyright');
const allWindow = document.querySelectorAll('.list__container');
const fMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const fDay = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//анимация набору текста в заголовке
var typedTitle = new Typed('#typedTitle', {
  strings: ['привет :D', 'это портфолио kiars1'],
  typeSpeed: 30,
  backSpeed: 0,
  backDelay: 2000,
  startDelay: 500,
  shuffle: true,
  smartBackspace: false,
  loop: true,
});

//набор сабтайтла с задержкой
var i = 0;
var speedPrint = 50; /* Скорость/длительность эффекта в миллисекундах */
var textTitle = "Хочешь увидеть проекты?"; /* Текст */

function typeWriter() {
  if (i < textTitle.length) {
    document.querySelector(".hello__subtitle").innerHTML += textTitle.charAt(i);
    i++;
    setTimeout(typeWriter, speedPrint);
  }
}

setTimeout(typeWriter, 2000);

//Анимация на взаимодействие с мышкой
VanillaTilt.init(document.querySelector(".hello__subtitle"), {
  max: 25,
  speed: 400,
});

//Появления проектов при прокрутке
class Scroll {
  constructor(item) {
    this._item = item;
  }
  scroll() {
      const itemOffset = this._item.offsetTop + window.innerHeight; //фикс бага. иначе у первого значение 0
      const itemHeight = this._item.offsetHeight;
      const animPoint = window.innerHeight - itemHeight;
      

      window.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        const vision = this._item.classList.contains('_anim');

        if (scroll >= (itemOffset - animPoint) && !vision) {
          if (this._item.classList.contains('list__container_large')) {
            this._item.classList.add("anim__large");
            this._item.classList.add("_anim");
          } else {
            this._item.classList.add("anim__small");
            this._item.classList.add("_anim");
          }
        }
      });
  };
}

allWindow.forEach((inputElement) => {
  const windows = new Scroll(inputElement)
  windows.scroll();
});

//функция запроса на сервер
function sendPositin(metod, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(metod, url);

    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status >= 400) {
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send();
  });
}

//Узнаем локацию по IP
fetch("https://ipapi.co/json/")
  .then((d) => d.json())
  .then((d) => weatherCheck(d.city));

//Запрос на API Weather чтобы узнать погоду ну и бонусом прописываем это в хедер
function weatherCheck(city) {
  let yourCity = city;
  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${yourCity}&appid=${API_KEY}`;

  sendPositin("GET", API_URL)
    .then(
      (data) => (weather.textContent = `${fDay[Day]} ${Data} ${fMonth[Month]} ${Hour}:${Minutes} ${data.name} ${(data.main.temp - 273.15).toFixed(0)}°C`)
    )
    .catch(
      (err) => console.log(err),
      weather.textContent = `${fDay[Day]} ${Data} ${fMonth[Month]} ${Hour}:${Minutes} ${data.name} ${err}°C`
    )
}

//А чет криво год получаю, фот фишку
function covertYear(Year) {
  const format = String(Year).replace('1', '20');
  copyright.textContent = `создание сайта - kiars1 - "${format}"`;
}

covertYear(Year);

// ================================================
// На солучай Необходимость чекать по геопозиции
// function success(pos) {
//     let crd = pos.coords;
//     let lat = crd.latitude;
//     let lon = crd.longitude;
//     let API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
//     sendPositin("GET", API_URL)
//     .then(
//       (data) => (weather.textContent = `${fDay[Day]} ${Data} ${fMonth[Month]} ${Hour}:${Minutes} ${data.name} ${(data.main.temp - 273.15).toFixed(0)}°C`)
//     )
//     .catch(
//       (err) => console.log(err),
//       weather.textContent = `Здесь должна быть погода, но что-то пошло не так`
//     )
//   }

// navigator.geolocation.getCurrentPosition(success);

// ==================================================