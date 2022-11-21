let em = 0;

function createArticleLogo(text, views, path) {
    let div = document.createElement("div");
    div.setAttribute("class", "popular-article normal-text")

    let title = document.createElement("a");
    title.setAttribute("class", "popular-article-text normal-text")
    title.setAttribute("href", path)
    title.innerHTML = text;

    let additionalInfo = document.createElement("div");
    additionalInfo.setAttribute("class", "popular-article-additional-info");

    let watchImg = document.createElement("img");
    watchImg.setAttribute("class", "popular-article-additional-info-img")
    watchImg.setAttribute("src", "../resources/eye.png")

    let countWatch = document.createElement("a");
    countWatch.innerHTML = views;

    additionalInfo.appendChild(watchImg);
    additionalInfo.appendChild(countWatch)

    div.appendChild(title);
    div.appendChild(additionalInfo);


    return div;
}

function createPopularArticles() {
    let div = document.createElement("div");
    div.setAttribute("class", "popular-articles");
    div.setAttribute("style", "box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);")

    let mainText = document.createElement("a");
    mainText.setAttribute("class", "popular-articles-title");
    mainText.innerHTML = "Популярные статьи";

    div.appendChild(mainText)

    let container = document.createElement("div");
    container.setAttribute("class", "popular-article-list")

    container.appendChild(createArticleLogo("История развития операционных систем", "1k", "../layouts/history.html"))
    container.appendChild(createArticleLogo("Мобильные операционные системы", "500", "../layouts/mobile-os.html"))
    container.appendChild(createArticleLogo("Android", "10k", "../layouts/android.html"))
    container.appendChild(createArticleLogo("BSD", "100k", "../layouts/bsd.html"))
    container.appendChild(createArticleLogo("Windows", "5k", "../layouts/windows.html"))
    container.appendChild(createArticleLogo("Linux", "3k", "../layouts/linux.html"))

    div.appendChild(container)

    return div;

}

let withPopularArticles = false;

window.addEventListener("resize", event => {
    let width = window.innerWidth;

    getEm();
    if (!withPopularArticles && width > 65 * em) {
        let wrapper = document.querySelector(".publication-view");
        withPopularArticles = true;


        wrapper.appendChild(createPopularArticles())
    } else if (withPopularArticles && width < 65 * em){
        let wrapper = document.querySelector(".publication-view");
        let popularArticles = document.querySelector(".popular-articles");
        wrapper.removeChild(popularArticles);
        withPopularArticles = false;

    }
}, false)

window.dispatchEvent(new Event("resize"))

function getEm(){
    var div = document.getElementById("emEquivalent");
    // div.style.height = '1em';
    return ( em = div.offsetHeight );
}
