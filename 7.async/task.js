'use strict'

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Параметр id не передан.');
        }
        if (this.alarmCollection.some((el) => (el['id'] === id))) {
            console.error('Будильник уже существует');
        } else {
            this.alarmCollection.push({ time, callback, id })
        }
    }

    removeClock(id) {
        let alarmCollectionBefore = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((el) => (el['id'] !== id));

        return alarmCollectionBefore !== this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        //let timeNow = this.getCurrentFormattedTime;
        function checkClock(alarm) {
            if (this.getCurrentFormattedTime() === alarm.time) {
                alarm.callback();
            }
        }

        checkClock = checkClock.bind(this);

        if (this.timerId === null) {
            setInterval(() => {
                this.alarmCollection.forEach((item) => checkClock(item));
            }, 1000)
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length);
        this.alarmCollection.forEach((item) =>
            console.log(`Будильник № ${item.id} заведен на ${item.time}`)
        );
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}




/*let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("5:27", () => console.log("Get Up"), 1);
phoneAlarm.addClock("5:30", () => { console.log("Давай, Get Up,Get Upp"), phoneAlarm.removeClock(2)}, 2);
phoneAlarm.addClock("5:35", () => console.log("Go Clining"));
phoneAlarm.addClock("5:40", () => {
    console.log("Get Up!");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
},3);
phoneAlarm.addClock("5:41", () => console.log("Get Up Get Up"), 1)
phoneAlarm.printAlarms()*/