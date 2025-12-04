/* 
    Handle the periodic theme changes

    Right now it is an empty script, where I plan to write a function, that would check, if the system date is a specific date. 
    For instance I'd introduce a site theme, that would activate only when it's my birthday or when it's christmas persiod (24th of december to 26th)

    The script should run when the site loads.
*/

const themes = {
    xmas: 'xmas'
}

function init_theme(theme)
{
    console.log("W.I.P. - Theme initiation");
    document.body.classList.add(theme);
}

function reset_themes()
{
    document.body.removeAttribute("class")
}

function xmas_theme() 
{
    const today = new Date();

    const begin_date = new Date(today.getFullYear(),11,24);
    const end_date = new Date(today.getFullYear(),11,27);

    if (today >= begin_date && today < end_date) {
        console.log("IT'S CHRISTMAS!!!");
        init_theme(themes.xmas);
    } else {
       console.log("It's not christmas."); 
    }

}

window.onload = xmas_theme();