let buttonDarkMode = document.querySelector(".buttonList--darkMode");
let body = document.querySelector(".body");
let caption = document.querySelector(".table__caption");
let links = document.querySelectorAll(".navigation__link");
let navigation = document.querySelector(".navigation");
let articleParagraphs = document.querySelectorAll(".article__paragraph");
let aboutMeSection__header = document.querySelector(".aboutMeSection__header")

let timeButton = document.querySelector(".buttonList--timeButton");
let dayButton = document.querySelector(".buttonList--dayButton");
let buttons = document.querySelectorAll(".buttonList__button");
let evenButton = document.querySelector(".buttonList--evenButton");
let now = new Date();

buttonDarkMode.addEventListener("click", () => {
    if (buttonDarkMode.innerText === "LIGHT MODE") {
        buttonDarkMode.innerText = "DARK MODE";
    } else {
        buttonDarkMode.innerText = "LIGHT MODE";
    }
    switch (buttonDarkMode.innerText) {
        case "LIGHT MODE":
            body.classList.add("js-darkModeBackground");
            for (let buttonList__button of buttons) {
                buttonList__button.classList.add("js-lightModeBackground");
                buttonList__button.classList.add("js-darkFont");
            }
            caption.classList.add("js-whiteFont");
            for (let navigation__link of links) {
                navigation__link.classList.add("js-whiteFont");
            }
            navigation.classList.add("js-navigationBorder");
            for (let article__paragraph of articleParagraphs) {
                article__paragraph.classList.add("js-whiteFont");
            }
            aboutMeSection__header.classList.add("js-whiteFont");
    }
})

timeButton.addEventListener("click", () => {
    if (now.getHours() >= 4 && now.getHours() <= 11) {
        alert("jest dzień 🌞");
    }
    if (now.getHours() >= 12 && now.getHours() <= 14) {
        alert("jest południe 🌈");
    }
    if (now.getHours() >= 15 && now.getHours() <= 17) {
        alert("jest popołudnie 🍺");
    }
    if (now.getHours() >= 18 && now.getHours() <= 21) {
        alert("jest wieczór 🌙");
    }
    if (now.getHours() >= 22 || now.getHours() >= 1 && now.getHours() < 3) {
        alert("jest noc 😴");
    }
    if (now.getHours() === 0) {
        alert("jest północ 🌑");
    }
});


dayButton.addEventListener("click", () => {
    if (now.getDay() === 0) {
        alert("Dzisiaj mamy niedziele.");
    }
    if (now.getDay() === 1) {
        alert("Dzisiaj mamy poniedziałek.");
    }
    if (now.getDay() === 2) {
        alert("Dzisiaj mamy wtorek.");
    }
    if (now.getDay() === 3) {
        alert("Dzisiaj mamy środę.");
    }
    if (now.getDay() === 4) {
        alert("Dzisiaj mamy czwartek.");
    }
    if (now.getDay() === 5) {
        alert("Dzisiaj mamy piątek.");
    }
    if (now.getDay() === 6) {
        alert("Dzisiaj mamy sobotę.");
    }
});

evenButton.addEventListener("click", () => {
    if (now.getDate() / 2 % 1 === 0) {
        alert("Dzisiaj mamy dzień parzysty 😮");
    } else {
        alert("Dzisiaj mamy dzien nieparzysty 😮");
    }
});