let comments = document.querySelector('.comments');
let add_btn = document.querySelector('.comment-add');
let add_btn_img = document.querySelector('.comment-add img');

let addMode = true;

add_btn.addEventListener('click', function (event) {

    if (!addMode) {

        let old = document.querySelector(".new-comment");
        let author = document.querySelector(".new-comment .new-comment-name");
        let text = document.querySelector(".new-comment .comment-text");

        let div = document.createElement("div");
        div.setAttribute("class", "comment");
        div.setAttribute("style", "margin-top: 2em");

        let publisher = document.createElement("div");
        publisher.setAttribute("class", "publisher");

        let img = document.createElement("img");
        img.setAttribute("class", "animal-div");
        img.setAttribute("width", "129");
        img.setAttribute("height", "129");
        img.setAttribute("src", "../resources/animal.png");

        let a = document.createElement("a");
        a.setAttribute("class", "publisher-author");
        a.innerHTML = author.value;

        let time = document.createElement("time");
        time.setAttribute("class", "publisher-time")
        time.innerHTML = "Сегодня в 23:00"

        publisher.appendChild(img);
        publisher.appendChild(a);
        publisher.appendChild(time);

        let comment = document.createElement("h2");
        comment.setAttribute("class", "comment-text normal-text");
        comment.setAttribute("style", "margin-bottom: 5px");
        comment.innerHTML = text.value;

        div.appendChild(publisher);
        div.appendChild(comment)


        comments.removeChild(old)
        comments.insertBefore(div, add_btn);

        addMode = true;
        add_btn_img.setAttribute("src", "../resources/plus.svg ")
    } else {
        addMode = false
        add_btn_img.setAttribute("src", "../resources/ok.svg ")

        let div = document.createElement("div")
        div.setAttribute("class", "new-comment")

        let pub = document.createElement("h5");
        pub.setAttribute("style", "font-size: 0.8em;")
        pub.innerHTML = "Ваше имя:";

        let publisher = document.createElement("input");
        publisher.setAttribute("type", "text")
        publisher.setAttribute("class", "new-comment-name")

        let com = document.createElement("h5");
        com.setAttribute("style", "font-size: 0.8em;")
        com.innerHTML = "Комментарий:"

        let text = document.createElement("textarea");
        text.setAttribute("class", "comment-text");

        div.appendChild(pub);
        div.appendChild(publisher);
        div.appendChild(com);
        div.appendChild(text)

        comments.insertBefore(div, add_btn);
    }

})
