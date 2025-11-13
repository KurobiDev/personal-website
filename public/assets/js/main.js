// Highlight active nav links
const navlinks = document.querySelectorAll(".nav-menu__nav");

[...navlinks].forEach((element) => {
    const href = element.getAttribute("href")

    if(href == "/" || href =="/index.html")
    {
        if(window.location.pathname == "/") {
            element.classList.add("nav-menu__nav--active");
        }
    } else{ 
        if(window.location.href.includes(href)) {
            element.classList.add("nav-menu__nav--active");
        }
    }
});