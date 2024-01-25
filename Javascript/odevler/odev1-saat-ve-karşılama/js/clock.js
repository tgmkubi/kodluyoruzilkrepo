const DAYS = {
    0: "Pazar",
    1: "Pazartesi",
    2: "Salı",
    3: "Çarşamba",
    4: "Perşembe",
    5: "Cuma",
    6: "Cumartesi"
};

const username = prompt("İsminiz:");

if (username === undefined) throw Error("Kullanıcı adını giriniz.");

// kullanıcı adını DOM'da yazdır
const nameDom = document.getElementById("myName");
const clockDom = document.getElementById("myClock");
const dayDom = document.getElementById("myDay");

nameDom.innerHTML = username;

const currentDate = new Date();

// console.log(currentDate.getDate(), currentDate.getMonth(), currentDate.getDay());

let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();

// let hour = 23;
// let minute = 59;
// let second = 58;

let day = currentDate.getDay();
// let day = 6;
dayDom.innerHTML = DAYS[day];

clockDom.innerHTML = `${hour}:${minute}:${second}`

const updateClock = () => {
    second++;

    if (second === 60) {
        second = 0;
        minute++;

        if (minute === 60) {
            minute = 0;
            hour++;

            if (hour == 24) {
                hour = 0;
                day++;
                if (day == 7) {
                    day = 0;
                };
                dayDom.innerHTML = DAYS[day]
            }
        }
    };
    clockDom.innerHTML = `${hour < 10 ? "0" : ""}${hour}:${minute < 10 ? "0" : ""}${minute}:${second < 10 ? "0" : ""}${second}`;
};

setInterval(updateClock, 1000);


