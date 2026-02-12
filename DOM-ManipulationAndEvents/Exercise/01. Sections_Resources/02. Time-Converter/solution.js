function attachEventsListeners() {
    const daysBtn = document.getElementById("daysBtn");
    const hoursBtn = document.getElementById("hoursBtn");
    const minutesBtn = document.getElementById("minutesBtn");
    const secondsBtn = document.getElementById("secondsBtn");

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    daysBtn.addEventListener("click", (e) => {
        const dayValue = Number(days.value);

        hours.value = dayValue * 24;
        minutes.value = dayValue * 1440;
        seconds.value = dayValue * 86400;
    });

    hoursBtn.addEventListener("click", (e) => {
        const hoursValue = Number(hours.value);

        days.value = hoursValue / 24;
        minutes.value = hoursValue * 60;
        seconds.value = hoursValue * 3600;
    });

    minutesBtn.addEventListener("click", (e) => {
        const minutesValue = Number(minutes.value);

        days.value = minutesValue / 1440;
        hours.value = minutesValue / 60;
        seconds.value = minutesValue * 60;
    });

    secondsBtn.addEventListener("click", (e) => {
        const secondsValue = Number(seconds.value);

        days.value = secondsValue / 86400;
        hours.value = secondsValue / 3600;
        minutes.value = secondsValue / 60;
    });
}
