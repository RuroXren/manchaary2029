function setTimer() {
    const endDate = new Date(2029, 6, 11, 23, 59, 59);

    function updateTime() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            clearInterval(intervalo);
            document.querySelector("timeron").innerHTML = "<div class='expired'>Событие началось!</div>";
            return;
        }
        const day = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = day.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    updateTime();
    const intervalo = setInterval(updateTime, 1000);
}
document.addEventListener('DOMContentLoaded', setTimer);