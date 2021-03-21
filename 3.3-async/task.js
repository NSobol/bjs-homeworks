"use strict"

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = {};
        const idMax = 4;

    }

    addClock(callback, time) {

        try {

        } catch {

        }
        this.alarmCollection.push({
            id,
            time,
            callback
        });

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
        let minut = new Date().getMinutes();
        return `0${hours}:${minut}`;
    }

    start() {

        function checkClock() {

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
alarm.getCurrentFormattedTime();
