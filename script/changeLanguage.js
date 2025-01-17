function setCookie(language) {
    document.cookie = "language=" + language + ";path=/";
}

function getCookie() {
    var cookie = document.cookie;
    // console.log(cookie)
    value = cookie.split('=')[1];
    return value;
}

function checkCookie() {
    let language = getCookie("language");
    if (language == undefined) {
        setCookie("english");
        language = "english"
    }
    if (language == "english") {
        let vietnamese = document.getElementsByClassName("vietnamese");
        for (let i = 0; i < vietnamese.length; i++) {
            vietnamese[i].classList.add("disable-language");
        }
        console.log(1)
    } else {
        let english = document.getElementsByClassName("english");
        for (let i = 0; i < english.length; i++) {
            english[i].classList.add("disable-language");
        }
        console.log(2)
    }
    document.querySelector("body").style.overflow = "auto";
    document.getElementsByClassName("loading-screen")[0].style.display = "none";
}

function changeToEnglish() {
    setCookie("english");
    let english = document.getElementsByClassName("english");
    for (let i = 0; i < english.length; i++) {
        english[i].classList.remove("disable-language");
    }
    let vietnamese = document.getElementsByClassName("vietnamese");
    for (let i = 0; i < vietnamese.length; i++) {
        vietnamese[i].classList.add("disable-language");
    }
}

function changeToVietnamese() {
    setCookie("vietnamese");
    let english = document.getElementsByClassName("english");
    for (let i = 0; i < english.length; i++) {
        english[i].classList.add("disable-language");
    }
    let vietnamese = document.getElementsByClassName("vietnamese");
    for (let i = 0; i < vietnamese.length; i++) {
        vietnamese[i].classList.remove("disable-language");
    }
}

// setCookie("english")

