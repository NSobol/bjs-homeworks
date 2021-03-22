"use strict"

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = {};
        const idMax = 4;

    }

    addClock(callback, time) {
        id = setTimeout(fn, 0);
        console.log(id);

        function poisk(id) {
            let poiskIDd = alarmCollection.filter(item => item.id === id);
            if (poiskIDd.length === 0) {
                this.alarmCollection.push({
                    id: id,
                    time: time,
                    fn
                });
                console.log("Id добавлен");
            } else {
                console.log("Ошибка! Id уже существует");
            }
        }
    }

    removeClock(alarmCollection, id) {
        let newArr = arr.filter(function (item) {
            return item.id !== id;
        })
        if (arr.length !== newArr.length) {
            return true;
        } else {
            return false;
        }

    }

    getCurrentFormattedTime() {
        let hours = new Date().getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }
        let minute = new Date().getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        return `${hours}:${minute}`;
    }

    start() {

        function checkClock(time) {
            let oclock = Date.parse(time);
            let now = new Date).getTime();
        if (now === oclock) {
            function fn() {
                console.log(`Доброе утро! Хорошего дня!`);
            }
        }

    }

    stop() {

    }

    printAlarms() {

    }

    clearAlarms() {
        this.alarmCollection.length = 0;
    }

}

const alarm = new AlarmClock;
console.log(alarm.getCurrentFormattedTime());
