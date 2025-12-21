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

// copy the link button code to clipboard
function copyButton() {
    var copytext = '<a href="https://kurobi.neocities.org"><img src="https://kurobi.neocities.org/assets/images/88x31.gif" alt="Kurobi"></a>'

    navigator.clipboard.writeText(copytext);
    alert("Copied the button.")
}