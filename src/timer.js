
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours:document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
    clockface:document.querySelector('[id="timer-1"]')
}


class CountdownTimer{
    constructor({onTick,targetDate}) {
        this.intervalId = null;
        this.onTick = onTick;
        this.targetDate = targetDate;
    }
    start() {
        const startTime = this.targetDate.getTime();
       
        this.intervalId=setInterval(() => {
            const currentTime = Date.now();

            const deltaTime = startTime-currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time);
            // updateClockface({ days, hours, mins, secs })
    
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs};
    }
 pad(value) {
    return String(value).padStart(2, '0');
}
}


const timer = new CountdownTimer({
    onTick: updateClockface,
    selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});
timer.start();

function updateClockface({ days, hours, mins, secs}) {
    refs.clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
}


