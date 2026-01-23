class Timer {
    constructor(duration, onTick, onComplete) {
        this.duration = duration; // in seconds
        this.onTick = onTick; // callback for each tick
        this.onComplete = onComplete; // callback when timer completes
        this.remainingTime = duration;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.remainingTime--;
            if (this.onTick) {
                this.onTick(this.remainingTime);
            }
            if (this.remainingTime <= 0) {
                this.stop();
                if (this.onComplete) {
                    this.onComplete();
                }
            }
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    reset() {
        this.stop();
        this.remainingTime = this.duration;
    }
}