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
            time,
            fn,
            id
        });
    }

    removeClock(alarmCollection, id) {
        let newArr = this.alarmCollection.filter(item => item.id !== id);
        if (alarmCollection.length !== newArr.length) {
            return true;
        } else {
            return false;
        }

    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        const getCurrentTime = this.getCurrentFormattedTime;

        function checkClock(clock) {
            if (getCurrentTime() === clock.time) {
                id = setTimeout(fn, 0);
            }

            if (this.timerId === null) {
                this.timerId = setInterval(() => {
                    this.alarmCollection.forEach(item => checkClock(item))
                }, 1000)
            }

            function fn() {
                console.log(`Доброе утро! Хорошего дня!`);
            }
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        alarmCollection.forEach(elem => console.log(`Будильник №${elem.id} время: ${elem.time}`));
    }

    clearAlarms() {
        this.alarmCollection = [];
    }
}
const alarm = new AlarmClock;
console.log(alarm.getCurrentFormattedTime());
