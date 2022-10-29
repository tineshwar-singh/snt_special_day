let countDate = new Date("Feb14, 2023, 00:00:00").getTime();

function newYear() {
    let now = new Date();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24; 

    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);

    document.getElementById("days").innerHTML = `<div class="unit"><p>${d}</p><p>days</p></div>`;
    document.getElementById("hour").innerHTML = `<div class="unit"><p>${h}</p><p>hours</p></div>`;
    document.getElementById("minute").innerHTML = `<div class="unit"><p>${m}</p><p>minutes</p></div>`;
    document.getElementById("second").innerHTML = `<div class="unit"><p>${s}</p><p>seconds</p></div>`;
}
setInterval(newYear,1000);
newYear();