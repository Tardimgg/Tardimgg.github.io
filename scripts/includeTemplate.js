let header = '<header>\n' +
    '\n' +
    '    <nav class="topnav">\n' +
    '        <a href="../index.html"><img src="../resources/favicon.png" alt="логотип" width="70" height="40"></a>\n' +
    '\n' +
    '        <a class="topnav_hid_elem fast-ref" href="../index.html">Главная страница</a>\n' +
    '        <a class="topnav_hid_elem fast-ref" href="publications.html">Статьи</a>\n' +
    '        <a class="topnav_hid_elem fast-ref" href="create-publication.html">Написать статью</a>\n' +
    '        <a class="topnav_hid_elem fast-ref" href="message.html">Сообщить о проблеме</a>\n' +
    '        <a class="topnav_hid_elem fast-ref" href="contacts.html">Контакты</a>\n' +
    '        <a class="topnav_hid_elem fast-ref topnav-right" href="entrance.html">Вход</a>\n' +
    '\n' +
    '\n' +
    '        <input class="topnav-menu-btn-checkbox" id="menu-toggle" type="checkbox"/>\n' +
    '        <label class="topnav-menu-btn-label" for="menu-toggle">\n' +
    '            <span></span>\n' +
    '        </label>\n' +
    '\n' +
    '        <ul class="topnav-menu" type="none">\n' +
    '            <li><a class="topnav-menu-item" href="entrance.html">Вход</a></li>\n' +
    '            <li><a class="topnav-menu-item" href="../index.html">Главная страница</a></li>\n' +
    '            <li><a class="topnav-menu-item" href="publications.html">Статьи</a></li>\n' +
    '            <li><a class="topnav-menu-item" href="create-publication.html">Написать статью</a></li>\n' +
    '            <li><a class="topnav-menu-item" href="message.html">Сообщить о проблеме</a></li>\n' +
    '            <li><a class="topnav-menu-item" href="contacts.html">Контакты</a></li>\n' +
    '\n' +
    '\n' +
    '        </ul>\n' +
    '\n' +
    '    </nav>\n' +
    '\n' +
    '</header>'

let footer = '<footer class="new-footer">\n' +
    '  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"\n' +
    '        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">\n' +
    '\n' +
    '\n' +
    '  <div class="new-footer-elem">\n' +
    '    <h2 class="new-footer-header" style="text-decoration: underline">О нас</h2>\n' +
    '    <h4 class="new-footer-text">\n' +
    '      Мы предоставляем удобную площадку для обмена знаниями в области операционных систем.\n' +
    '    </h4>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="new-footer-elem">\n' +
    '    <h2 class="new-footer-header" style="text-decoration: underline">Быстрые ссылки</h2>\n' +
    '    <a href="message.html" class="clear"><h4 class="links">Предложения и пожелания</h4></a>\n' +
    '    <a href="copyright.html" class="clear"><h4 class="links">Авторские права</h4></a>\n' +
    '    <a href="terms-of-use.html" class="clear"><h4 class="links">Правила пользования сайтом</h4></a>\n' +
    '    <a href="contacts.html" class="clear"><h4 class="links">Контакты</h4></a>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <address  class="new-footer-elem">\n' +
    '    <h2 class="new-footer-header" style="text-decoration: underline">Контакты с нами</h2>\n' +
    '    <p>Горячая линия: <a style="color: blue" href="tel:87461578756">87461578756</a></p>\n' +
    '    <p>Почта: <a style="color: blue" href="mailto:gusemail@guse.com">Написать письмо</a></p>\n' +
    '  </address>\n' +
    '\n' +
    '\n' +
    '</footer>'

div = document.querySelector("body");

let footerDiv = document.createElement("div");
footerDiv.setAttribute("style", " flex: 0 0 auto;");
footerDiv.innerHTML = footer;

let headerDiv = document.createElement("div");
headerDiv.innerHTML = header;

div.prepend(headerDiv)
div.appendChild(footerDiv)