function startTime() {
    const clock = document.getElementById("clock");

    if (!clock) return;

    const today = new Date();
    let diff = today.getTimezoneOffset();
    let h = today.getHours();
    let m = today.getMinutes();
    h = checkTime(h + 2 + (diff/60));
    m = checkTime(m);

    clock.innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i;}
    return i;
}

window.addEventListener("DOMContentLoaded",() => {
    startTime();
});