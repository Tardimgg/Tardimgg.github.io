function clickLike1(elem) {
    if (elem.style.backgroundColor === "rgb(255, 221, 221)") {
        elem.style.backgroundColor = "#f0f0f0";
        let num = elem.children.item(1);
        num.style.color = "#000000";
        num.innerHTML = Number(num.innerHTML) - 1;

        let like = elem.children.item(0).children.item(0);
        like.src="../resources/like.svg"

    } else {
        elem.style.backgroundColor = "#ffdddd";
        let num = elem.children.item(1);
        num.innerHTML = Number(num.innerHTML) + 1;
        num.style.color = "#ff0000";

        let like = elem.children.item(0).children.item(0);
        like.src="../resources/clickedLike.png"
    }
}