/* 
    Handle the periodic theme changes

    Right now it is an empty script, where I plan to write a function, that would check, if the system date is a specific date. 
    For instance I'd introduce a site theme, that would activate only when it's my birthday or when it's christmas persiod (24th of december to 26th)

    The script should run when the site loads.
*/

const themes = {
    default: 'none',
    dark: 'dark-mode',
    dreamy: 'dreamy',
}

var panel_hidden = true;
var previous_theme = 'none';

function init_theme(theme)
{
    console.log("W.I.P. - Theme initiation");
    previous_theme = localStorage.getItem("theme");
    localStorage.setItem("theme", theme)
    document.body.removeAttribute("class");
    document.body.classList.add(theme);
}

function reset_themes()
{
    localStorage.setItem("theme", 'none');
    document.body.removeAttribute("class");
}

function isXmas() 
{
    const today = new Date();

    const begin_date = new Date(today.getFullYear(),11,24);
    const end_date = new Date(today.getFullYear(),11,27);

    const snow = document.getElementById("snow");

    if (today >= begin_date && today < end_date) {
        console.log("IT'S CHRISTMAS!!!");
        snow.style.display = "block";
    } else {
       console.log("It's not christmas."); 
       snow.style.display = "none";
    }
}

function load_themes()
{
    if(localStorage.getItem("theme")) {
        init_theme(localStorage.getItem("theme"));
    } else {
        init_theme("none");
    }

    isXmas();
}

function toggle_hide() {
    const hide_button = document.getElementById("toggle-changer");
    const theme_panel = document.getElementsByClassName("theme-changer__buttons")[0];

    if(panel_hidden) {
        panel_hidden = false
        hide_button.innerHTML = "<<";
        theme_panel.style.display = 'flex';
    } else {
        panel_hidden = true
        hide_button.innerHTML = ">>"
        theme_panel.style.display = 'none';
    }
}

window.onload = load_themes();