class Date {
    constructor(year, month, day) {
        this.setYear(year)
        this.setMonth(month)
        this.setDay(day)
    }
    getYear() {
        return this.year;
    }
    getMonth() {
        return this.month;
    }
    getDay() {
        return this.day;
    }
    setYear(newYear) {
        if (newYear < 1300 || newYear > 1420) {
            throw 'The day is out of the range';
        }
        this.year = newYear;
    }
    setMonth(newMonth) {
        if (newMonth < 1 || newMonth > 12) {
            throw 'The day is out of the range';
        }
        this.month = newMonth;
    }
    setDay(newDay) {
        this.day = newDay;
    }
    toString(d, m, y, Y) {
        let arr = []
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] === 'd') {
                let d = this.day
                arr.push(d)
            } else if (arguments[i] === 'y') {
                let y = this.year
                arr.push(y)
            } else if (arguments[i] === 'm') {
                let m = this.month
                arr.push(m)
            } else if (arguments[i] === 'Y') {
                let Y = this.year
                let res = String(Y).slice(2, 4)
                arr.push(res)
            }
        }
        console.log(arr.toString().replaceAll(',', '/'));
    }
    compareDate(date1, date2) {
        let a = date1
        let b = date2
        a.toString().replaceAll(',', '');
        b.toString().replaceAll(',', '');
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    }
}
// let date1 = new Date(1400, 05, 17);
// console.log(date1);
// date.setMonth(11);
// console.log(date.getMonth());
// date.setYear(1400);
// console.log(date.getYear());
// date.setDay(31);
// console.log(date.getDay());
// date.toString('Y', 'd', 'm')
// console.log(date1.compareDate([2020, 05, 17], [2021, 05, 17]));
class Time {
    constructor(hour, minute, seconds) {
        this.setHour(hour)
        this.setMinute(minute)
        this.setSeconds(seconds)
    }
    getHour() {
        return this.hour;
    }
    getMinute() {
        return this.minute;
    }
    getSeconds() {
        return this.seconds;
    }
    setHour(newHour) {
        if (newHour < 0 || newHour > 23) {
            throw 'The hour is out of the range';
        }
        this.hour = newHour;
    }
    setMinute(newMinute) {
        if (newMinute < 0 || newMinute > 59) {
            throw 'The minute is out of the range';
        }
        this.minute = newMinute;
    }
    setSeconds(newSeconds) {
        if (newSeconds < 0 || newSeconds > 59) {
            throw 'The Seconds is out of the range';
        }
        this.seconds = newSeconds;
    }
    toString(h, H, i, s, am, pm) {
        let arr = []
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] === 'h') {
                let h = this.hour
                switch (h) {
                    case 24:
                        arr.push(12)
                        break;
                    case 23:
                        arr.push(11)
                        break;
                    case 22:
                        arr.push(10)
                        break;
                    case 21:
                        arr.push(9)
                        break;
                    case 20:
                        arr.push(8)
                        break;
                    case 19:
                        arr.push(7)
                        break;
                    case 18:
                        arr.push(8)
                        break;
                    case 17:
                        arr.push(5)
                        break;
                    case 16:
                        arr.push(4)
                        break;
                    case 15:
                        arr.push(3)
                        break;
                    case 14:
                        arr.push(2)
                        break;
                    case 13:
                        arr.push(1)
                        break;
                    default:
                        arr.push(h)
                        break;
                }
            } else if (arguments[i] === 'H') {
                let H = this.hour
                arr.push(H)
            } else if (arguments[i] === 'i') {
                let i = this.minute
                arr.push(i)
            } else if (arguments[i] === 's') {
                let s = this.seconds
                arr.push(s)
            }
            else if (arguments[i] === 'a') {
                arr.push(' AM')
            }
            else if (arguments[i] === 'p') {
                arr.push(' PM')
            }
        }
        console.log(arr.toString().replaceAll(',', ':'));
    }
    compareDate(time1, time2) {
        let a = time1
        let b = time2
        a.toString().replaceAll(',', '');
        b.toString().replaceAll(',', '');
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    }
}
// let time1 = new Time(15, 24, 45)
// console.log(time1);
// time1.toString("h", 'i', 's', 'p')
// console.log(time1.compareDate([15, 27, 35], [16, 27, 35]));

class TimeStamp extends Time {
    constructor(year, month, day, hour, minute, seconds) {
        super(hour, minute, seconds)
        this.setYear(year)
        this.setMonth(month)
        this.setDay(day)
    }
    getYear() {
        return this.year;
    }
    getMonth() {
        return this.month;
    }
    getDay() {
        return this.day;
    }
    setYear(newYear) {
        if (newYear < 1300 || newYear > 1420) {
            throw 'The day is out of the range';
        }
        this.year = newYear;
    }
    setMonth(newMonth) {
        if (newMonth < 1 || newMonth > 12) {
            throw 'The day is out of the range';
        }
        this.month = newMonth;
    }
    setDay(newDay) {
        this.day = newDay;
    }
    toString(d, m, y, Y) {
        let arr = []
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] === 'd') {
                let d = this.day
                arr.push(d)
            } else if (arguments[i] === 'y') {
                let y = this.year
                arr.push(y)
            } else if (arguments[i] === 'm') {
                let m = this.month
                arr.push(m)
            } else if (arguments[i] === 'Y') {
                let Y = this.year
                let res = String(Y).slice(2, 4)
                arr.push(res)
            }
        }
        console.log(arr.toString().replaceAll(',', '/'));
    }
    compareDate(date1, date2) {
        let a = date1
        let b = date2
        a.toString().replaceAll(',', '');
        b.toString().replaceAll(',', '');
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    }

}

let time1 = new TimeStamp(1400, 12, 27, 22, 45, 36)
console.log(time1);
time1.toString('y', 'm', 'd',)
console.log(time1.compareDate([15, 27, 35], [16, 27, 35]));