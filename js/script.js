{
    let now = new Date();

    const welcome = () => {
        console.log(`Witam serdecznie wszystkich developerów, którzy tutaj zaglądają.`);
    }

    const toggleBackground = () => {

        const buttonDarkMode = document.querySelector(".buttonList--darkMode");
        const body = document.querySelector(".body");
        const caption = document.querySelector(".table__caption");
        const navigation = document.querySelector(".navigation");
        const articleParagraphs = document.querySelectorAll(".article__paragraph");
        const aboutMeSection__header = document.querySelector(".aboutMeSection__header");
        const links = document.querySelectorAll(".navigation__link");
        const buttons = document.querySelectorAll(".buttonList__button");

        if (buttonDarkMode.innerText === "LIGHT MODE") {
            buttonDarkMode.innerText = "DARK MODE";
        } else {
            buttonDarkMode.innerText = "LIGHT MODE";
        }
        switch (buttonDarkMode.innerText) {
            case "LIGHT MODE":
                body.classList.add("js-darkModeBackground");
                for (const buttonList__button of buttons) {
                    buttonList__button.classList.add("js-lightModeBackground");
                    buttonList__button.classList.add("js-darkFont");
                }
                caption.classList.add("js-whiteFont");
                for (const navigation__link of links) {
                    navigation__link.classList.add("js-whiteFont");
                }
                navigation.classList.add("js-navigationBorder");
                for (const article__paragraph of articleParagraphs) {
                    article__paragraph.classList.add("js-whiteFont");
                }
                aboutMeSection__header.classList.add("js-whiteFont");
                break;
            case "DARK MODE":
                body.classList.remove("js-darkModeBackground");
                for (const buttonList__button of buttons) {
                    buttonList__button.classList.remove("js-lightModeBackground");
                    buttonList__button.classList.remove("js-darkFont");
                }
                caption.classList.remove("js-whiteFont");
                for (const navigation__link of links) {
                    navigation__link.classList.remove("js-whiteFont");
                }
                navigation.classList.remove("js-navigationBorder");
                for (const article__paragraph of articleParagraphs) {
                    article__paragraph.classList.remove("js-whiteFont");
                }
                aboutMeSection__header.classList.remove("js-whiteFont");
                break;
        };
    };

    const timeOfDay = () => {
        if (now.getHours() >= 4 && now.getHours() <= 11) {
            alert("jest dzień 🌞");
        };
        if (now.getHours() >= 12 && now.getHours() <= 14) {
            alert("jest południe 🌈");
        };
        if (now.getHours() >= 15 && now.getHours() <= 17) {
            alert("jest popołudnie 🍺");
        };
        if (now.getHours() >= 18 && now.getHours() <= 21) {
            alert("jest wieczór 🌙");
        };
        if (now.getHours() >= 22 || now.getHours() >= 1 && now.getHours() < 3) {
            alert("jest noc 😴");
        };
        if (now.getHours() === 0) {
            alert("jest północ 🌑");
        };
    };

    const dayOfWeek = () => {
        if (now.getDay() === 0) {
            alert("Dzisiaj mamy niedziele.");
        };
        if (now.getDay() === 1) {
            alert("Dzisiaj mamy poniedziałek.");
        };
        if (now.getDay() === 2) {
            alert("Dzisiaj mamy wtorek.");
        };
        if (now.getDay() === 3) {
            alert("Dzisiaj mamy środę.");
        };
        if (now.getDay() === 4) {
            alert("Dzisiaj mamy czwartek.");
        };
        if (now.getDay() === 5) {
            alert("Dzisiaj mamy piątek.");
        };
        if (now.getDay() === 6) {
            alert("Dzisiaj mamy sobotę.");
        };
    };

    const parityOfDay = () => {
        if (now.getDate() / 2 % 1 === 0) {
            alert("Dzisiaj mamy dzień parzysty 😮");
        } else {
            alert("Dzisiaj mamy dzien nieparzysty 😮");
        };
    };

    const init = () => {

        const timeButton = document.querySelector(".buttonList--timeButton");
        const buttonDarkMode = document.querySelector(".buttonList--darkMode");
        const dayButton = document.querySelector(".buttonList--dayButton");
        const evenButton = document.querySelector(".buttonList--evenButton");

        buttonDarkMode.addEventListener("click", toggleBackground);
        timeButton.addEventListener("click", timeOfDay);
        dayButton.addEventListener("click", dayOfWeek);
        evenButton.addEventListener("click", parityOfDay);

        welcome();

    };
    init();
};
