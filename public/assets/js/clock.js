function startTime() {
    const clock = document.getElementById("clock");

    if (!clock) return;

    const today = new Date();
    let time = today.toLocaleTimeString('pl-PL', {timeZone: 'Europe/Warsaw',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    clock.textContent = time;
    
    setTimeout(startTime, 1000);
}

window.addEventListener("DOMContentLoaded",() => {
    startTime();
});