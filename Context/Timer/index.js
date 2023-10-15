const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {
    this.timerId = setInterval(() => {
      this.secondsPassed++;
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed++;
      }
    }, 1000);
  },

  getTime() {
    const mins =
      this.minsPassed < 10 ? `0${this.minsPassed}` : `${this.minsPassed}`;
    const seconds =
      this.secondsPassed < 10
        ? `0${this.secondsPassed}`
        : `${this.secondsPassed}`;
    return `${mins}:${seconds}`;
  },

  stopTimer() {
    clearInterval(this.timerId);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
    clearInterval(this.timerId);
  },
};
