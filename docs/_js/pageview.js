var initAll = function () {
    var path = window.location.pathname;
    // add visitors count
    var ele = document.createElement("div");
    ele.setAttribute("align","center");
    var count = document.createElement("img")
    count.setAttribute("src", "https://visitor-badge.glitch.me/badge?page_id=" + path);
    ele.appendChild(count);
    var divider =document.createElement("hr")

    document.getElementById("__comments").appendChild(ele);
    document.getElementById("__comments").appendChild(divider);
};

window.addEventListener('load', initAll);