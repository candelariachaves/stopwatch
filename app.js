let isRunning = false;
let startTime;
let currentTime;
let elapsedTime = 0;
let clockInterval;
let hours;
let minutes;
let seconds;
let remainder;
let formattedTime;

// start-stop
document.getElementById('start-stop').onclick = () => {
    if (!isRunning) {
        // start the clock
        isRunning = true;
        (elapsedTime == 0) ? startTime = new Date().getTime() : startTime = new Date().getTime() - elapsedTime;
        
        clockInterval = setInterval(() => {
            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;

            hours = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime - (hours * 3600000);
            minutes = Math.floor(remainder / 60000);
            remainder -= (minutes * 60000);
            seconds = Math.floor(remainder / 1000);
            remainder -= (seconds * 1000);

            formattedTime = `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)} ${addLeadingZero(remainder)}`;

            document.getElementById('stopwatch').innerHTML = formattedTime;
        }, 10)

    } else {
        // stop the clock
        clearInterval(clockInterval);
        isRunning = false;
    }
}

// reset
document.getElementById('reset').onclick = () => {
    startTime = new Date().getTime();
    if (!isRunning) {
        elapsedTime = 0;
        document.getElementById('stopwatch').innerHTML = '00:00:00 000';
    }
}

function addLeadingZero(number) {
    if (number < 10) {
        return '0' + number.toString();
    } else {
        return number.toString();
    }
}
