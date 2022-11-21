let captcha_passed = false;

function isEmpty(obj) {
    return obj == undefined || obj === "";
}


function clickCaptcha(captcha, btn) {
    let text = captcha.querySelector(".captcha-text");
    let input = captcha.querySelector('.captcha-input');

    if (isEmpty(input.value)) {
        alert("Пустой ввод")
        return;
    }

    if (captcha.getAttribute("captcha-type") === "text") {

        if (text.innerHTML === input.value) {
            removeCaptcha(btn)
        } else {
            captcha.setAttribute("captcha-type", "math")

            let first = Math.floor(Math.random() * 200);

            let second = Math.floor(Math.random() * 200);

            text.innerHTML = first + " + " + second;
            input.value = "";


        }
    } else if (captcha.getAttribute("captcha-type") === "math") {
        let nums = text.innerHTML.split("+")
        let sum = parseInt(nums[0]) + parseInt(nums[1]);

        if (sum === parseInt(input.value)) {
            removeCaptcha(btn)
        } else {
            alert("Не пущу!")
        }
    }
}

function removeCaptcha(btn) {
    btn.disabled = false;


    let mainDiv = document.querySelector("main");

    let captcha = document.querySelector(".captcha");
    mainDiv.removeChild(captcha);

    captcha_passed = true;

}

const MAX_CAPTCHA_LENGTH = 15;

function createCaptcha(btn) {
    let div = document.createElement("div");
    div.setAttribute("class", "captcha");
    div.setAttribute("id", "captcha1");
    div.setAttribute("captcha-type", "text");


    let captcha_text = document.createElement("h2");
    captcha_text.setAttribute("class", "captcha-text");

    let length = Math.floor(Math.random() * MAX_CAPTCHA_LENGTH) + 1;
    let text = "";

    for (let j = 0; j < length; ++j) {
        text += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    captcha_text.innerHTML = text;



    let input = document.createElement("input");
    input.setAttribute("class", "captcha-input");

    let captcha_btn = document.createElement("button");
    captcha_btn.setAttribute("class", "btn btn-primary captcha-btn");
    captcha_btn.setAttribute("onclick", `clickCaptcha(document.getElementById('captcha1'), document.getElementById('${btn.id}'))`)
    captcha_btn.innerHTML = "Проверить";

    div.appendChild(captcha_text);
    div.appendChild(input);
    div.appendChild(captcha_btn);

    return div;
    // div.setAttribute("float", "right")

}

function openCaptcha(btn) {
    if (!captcha_passed) {
        let captcha = createCaptcha(btn);

        let mainDiv = document.querySelector("main");
        mainDiv.appendChild(captcha);
    }
}