"use strict"

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(fn, time, id) {
        if (!id) {
            throw new Error("Ошибка! Id не передан!");
        }

        if (this.alarmCollection.some(item => item.id === id)) {
            console.error("Ошибка! Id уже существует");
        }

        this.alarmCollection.push({
            id,
            time,
            fn
        });
    }

    removeClock(alarmCollection, id) {
        let newArr = this.alarmCollection.filter(function (item) {
            return item.id !== id;
        })
        if (alarmCollection.length !== newArr.length) {
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
            let now = (new Date).getTime();
            if (now === oclock) {
                id = setTimeout(fn, 0);
                if (this.alarmCollection.some(item => item.id === id)) {
                    return id = this.alarmCollection.length;
                }
            }

            function fn() {
                console.log(`Доброе утро! Хорошего дня!`);
            }
        }
    }

    stop() {}

    printAlarms() {}

    clearAlarms() {
        this.alarmCollection.length = 0;
    }
}
const alarm = new AlarmClock;
console.log(alarm.getCurrentFormattedTime());
