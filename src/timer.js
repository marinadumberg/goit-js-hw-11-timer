
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

const timer = {
    start() {
        const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const { hours, mins, secs } = getTimeComponents(deltaTime);
            console.log(`${hours}:${mins}:${secs}`);

        }, 1000);
    },
}
timer.start();

function updateClockface({ hours, mins, secs }) {
    requestAnimationFrame.clockface.texContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
}
