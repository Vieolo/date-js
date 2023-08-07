/**
 * Custom extension of the Date class
 */
class VDate extends Date {
    //#region Set Functions
    /**
     * sets the time to the start of the day at 00:00:00:000 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the start of the local date. default = `true`
     * @returns {VDate}
     */
    setToDateStart(local = true) {
        let newDate = new VDate(this.getTime());
        if (local)
            newDate.setHours(0, 0, 0, 0);
        else
            newDate.setUTCHours(0, 0, 0, 0);
        return newDate;
    }
    /**
     * sets the time to the end of the day at 23:59:59:999 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the end of the local date. default = `true`
     * @returns {VDate}
     */
    setToDateEnd(local = true) {
        let newDate = new VDate(this.getTime());
        if (local)
            newDate.setHours(23, 59, 59, 999);
        else
            newDate.setUTCHours(23, 59, 59, 999);
        return newDate;
    }
    /**
     * set the time to the start of the first day of the month at 00:00:00:000 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the start of the local month. default = `true`
     * @returns {VDate}
     */
    setToMonthStart(local = true) {
        let newDate = new VDate(this.getTime());
        if (local) {
            newDate.setDate(1);
            newDate.setHours(0, 0, 0, 0);
        }
        else {
            newDate.setUTCDate(1);
            newDate.setUTCHours(0, 0, 0, 0);
        }
        return newDate;
    }
    /**
     * set the time to the end of the last day of the month at 23:59:59:999 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the end of the local month. default = `true`
     * @returns {VDate}
     */
    setToMonthEnd(local = true) {
        let newDate = new VDate(this.getTime());
        newDate = newDate.addMonth(1);
        if (local) {
            newDate.setDate(0);
            newDate.setHours(23, 59, 59, 999);
        }
        else {
            newDate.setUTCDate(0);
            newDate.setUTCHours(23, 59, 59, 999);
        }
        return newDate;
    }
    /**
     * set the time to the start of the first day of the year at 00:00:00:000 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the start of the local year. default = `true`
     * @returns {VDate}
     */
    setToYearStart(local = true) {
        let newDate = new VDate(this.getTime());
        if (local) {
            newDate.setMonth(0);
            newDate.setDate(1);
            newDate.setHours(0, 0, 0, 0);
        }
        else {
            newDate.setUTCMonth(0);
            newDate.setUTCDate(1);
            newDate.setUTCHours(0, 0, 0, 0);
        }
        return newDate;
    }
    /**
     * set the time to the end of the last day of the year at 23:59:59:999 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the end of the local year. default = `true`
     * @returns {VDate}
     */
    setToYearEnd(local = true) {
        let newDate = new VDate(this.getTime());
        if (local) {
            newDate.setMonth(11);
            newDate.setDate(31);
            newDate.setHours(23, 59, 59, 999);
        }
        else {
            newDate.setUTCMonth(11);
            newDate.setUTCDate(31);
            newDate.setUTCHours(23, 59, 59, 999);
        }
        return newDate;
    }
    //#endregion
    //#region Format Functions
    /**
     * Formats the time to the 12 hour scheme e.g. 10:25 am
     * @returns String
     */
    formatTime(ampm = false) {
        let hour = this.getHours();
        let minute = this.getMinutes();
        if (ampm === false) {
            let hourString = hour.toString();
            if (hour < 10)
                hourString = "0" + hourString;
            let minuteString = minute.toString();
            if (minute < 10)
                minuteString = "0" + minuteString;
            return hourString + ':' + minuteString;
        }
        let twelveIndex = 0;
        if (hour < 12) {
            twelveIndex = 0;
        }
        else if (hour === 12) {
            twelveIndex = 1;
        }
        else {
            hour = hour - 12;
            twelveIndex = 1;
        }
        let hourString;
        if (hour < 10) {
            hourString = "0" + hour.toString();
        }
        else {
            hourString = hour.toString();
        }
        let minuteString;
        if (minute < 10) {
            minuteString = "0" + minute.toString();
        }
        else {
            minuteString = minute.toString();
        }
        let twelve = [
            "AM", "PM"
        ];
        return hourString + ':' + minuteString + ' ' + twelve[twelveIndex];
    }
    /**
     * Formats the date in the desired format. default = `yyyy-mm-dd`
     * @param {'yyyy-mm-dd'|'dd/mm/yyyy'|'mm/dd/yyyy'|'month dd, yyyy'} format - The desired format. default = 'yyyy-mm-dd'
     * @returns String
     */
    formatDate(format = 'yyyy-mm-dd') {
        let dd = this.getDate();
        let ddString = dd.toString();
        let mm = this.getMonth() + 1; //January is 0!
        let mmString = mm.toString();
        var yyyy = this.getFullYear();
        if (dd < 10) {
            ddString = '0' + dd.toString();
        }
        if (mm < 10) {
            mmString = '0' + mm.toString();
        }
        if (format === 'yyyy-mm-dd') {
            return `${yyyy}-${mmString}-${ddString}`;
        }
        else if (format === 'dd/mm/yyyy') {
            return `${ddString}/${mmString}/${yyyy}`;
        }
        else if (format === 'mm/dd/yyyy') {
            return `${mmString}/${ddString}/${yyyy}`;
        }
        else if (format === 'dd.mm.yyyy') {
            return `${ddString}.${mmString}.${yyyy}`;
        }
        else if (format === "month dd, yyyy") {
            return `${VDate.monthNamesLong[this.getMonth()]} ${ddString}, ${yyyy}`;
        }
        else if (format === 'dd-mm-yyyy') {
            return `${ddString}-${mmString}-${yyyy}`;
        }
        else if (format === 'yyyy.mm.dd') {
            return `${yyyy}.${mmString}.${ddString}`;
        }
        return `${VDate.monthNamesShort[this.getMonth()]} ${ddString}, ${yyyy}`;
    }
    /**
     * Formats the date and time
     * @param format The format of the date (default: `mon dd, yyy`)
     * @param ampm Whether the time should be displayed as 24 hours or as AM/PM
     * @returns string
     */
    formatDateTime(format = "mon dd, yyyy", ampm = false) {
        return `${this.formatDate(format)} ${this.formatTime(ampm)}`;
    }
    /**
     * Formats the difference between now and the given target time.
     * If the given target time is before now, the given result will show the time passed. e.g. 2 days ago.
     * If the given target time is after now, the given result will show the remaining time. e.g. in 2 days.
     * @param {VDate} targetTime - The time to get the countdown
     * @return String
     */
    static countDown(targetTime, options) {
        let fn = options && options.now ? options.now : new VDate();
        let big, small;
        let type = "past";
        if (fn.isAfter(targetTime)) {
            big = fn;
            small = targetTime;
        }
        else {
            type = 'future';
            big = targetTime;
            small = fn;
        }
        /** The maximum limit of the count down in millisecond */
        let limit = options && options.countDownLimit ? options.countDownLimit : 432000000;
        let result = "";
        /** The different is initially in milliseconds but will be converted to seconds */
        let difference = big.getTime() - small.getTime();
        // The difference is larget
        if (difference > limit) {
            let f = options && options.overLimitDateFormat ? options.overLimitDateFormat : undefined;
            if (options && options.includeOverLimitTime) {
                return targetTime.formatDateTime(f, options.overLimitTimeAMPM);
            }
            return targetTime.formatDate(f);
        }
        difference /= 1000;
        if (difference < 60) { // Less than a minute
            let d = parseInt(difference.toString());
            result = `${d.toString()} seconds`;
        }
        else if (difference >= 60 && difference < 3600) { // Less than an hour
            let minutes = parseInt((difference / 60).toString());
            result = `${minutes.toString()} min${minutes === 1 ? "" : "s"}`;
        }
        else if (difference >= 3600 && difference < 86400) { // Less than a day
            let hours = parseInt((difference / 3600).toString());
            result = `${hours.toString()} hour${hours === 1 ? "" : "s"}`;
            if (options && options.includeMinutes) {
                let minutes = parseInt(((difference % 3600) / 60).toString());
                if (minutes > 0) {
                    result = `${result} and ${minutes} min${minutes === 1 ? "" : "s"}`;
                }
            }
        }
        else if (difference >= 86400) { // More than a day
            let days = parseInt((difference / 86400).toString());
            result = `${days.toString()} day${days === 1 ? "" : "s"}`;
            if (options && options.includeHour) {
                var hours = parseInt(((difference % 86400) / 3600).toString());
                if (hours > 0) {
                    result = `${result} and ${hours.toString()} hour${hours === 1 ? "" : "s"}`;
                }
            }
        }
        // If the target time is in the past
        if (type === 'past') {
            return `${result} ago`;
        }
        else {
            return `in ${result}`;
        }
    }
    /**
     * formats the date as the month and full year
     * @returns String - example: June 2019
     */
    formatMonth(length) {
        return `${(length === 'short' ? VDate.monthNamesShort : VDate.monthNamesLong)[this.getMonth()]} ${this.getFullYear()}`;
    }
    /**
     * Returns formatted time from the minute count
     * @param {Number} count - number of minutes
     * @returns String - Example: 2h 23m
     */
    static getTimeFromMinuteCount(count) {
        if (count < 60) {
            return count + 'm';
        }
        else {
            return parseInt((count / 60).toString()) + 'h ' + count % 60 + 'm';
        }
    }
    //#endregion
    //#region Modification Functions
    /**
     * Changes the date by seconds
     * @param {Number} change - Adds (or reduces) this number of seconds to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addSecond(change) {
        return new VDate(this.getTime() + (change * 1000));
    }
    /**
     * Changes the date by minutes
     * @param {Number} change - Adds (or reduces) this number of minutes to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addMinute(change) {
        return new VDate(this.getTime() + (change * 60 * 1000));
    }
    /**
     * Changes the date by hours
     * @param {Number} change - Adds (or reduces) this number of hours to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addHour(change) {
        return new VDate(this.getTime() + (change * 60 * 60 * 1000));
    }
    /**
     * Changes the date by days
     * @param {Number} change - Adds (or reduces) this number of days to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addDay(change) {
        let t = new VDate(this.getTime());
        t.setDate(t.getDate() + change);
        return t;
    }
    /**
     * Changes the date by months
     * @param {Number} change - Adds (or reduces) this number of months to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addMonth(change) {
        return new VDate(new VDate(this.getTime()).setMonth(this.getMonth() + change));
    }
    /**
     * Changes the date by years
     * @param {Number} change - Adds (or reduces) this number of years to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addYear(change) {
        return new VDate(new VDate(this.getTime()).setFullYear(this.getFullYear() + change));
    }
    //#endregion
    //#region Boolean Functions
    /**
     * If the year of the `VDate` is a leap year or not
     * @returns Boolean
     */
    isLeap() {
        let year = this.getFullYear();
        return ((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0);
    }
    /**
     * Checks if `otherDate` is after this date or not
     * @param {VDate} otherDate
     */
    isAfter(otherDate) {
        return this > otherDate ? true : false;
    }
    /**
     * Checks if `otherDate` is before this date or not
     * @param {VDate} otherDate
     */
    isBefore(otherDate) {
        return this < otherDate ? true : false;
    }
    /**
     * Checks if `otherDate` is on the same day as this date or not
     * @param {VDate} otherDate
     */
    isOnSameDay(otherDate) {
        return this.getFullYear() === otherDate.getFullYear() &&
            this.getMonth() === otherDate.getMonth() &&
            this.getDate() === otherDate.getDate();
    }
    /**
     * Checks if the date is valid or not.
     * Returns false if the object is 'Invalid Date' type
     * @returns {Boolean}
     */
    isValid() {
        return !isNaN(this.getTime());
    }
    //#endregion
    //#region Calculate Functions
    /**
     * Gets the number of minutes passed in today as of now.
     * For example, at 1:15 am, 75 minutes have passed in today
     * @deprecated use `getMinutesInDay` instead
     * @returns Number
     */
    static getMinutesInToday(date) {
        var now = date ? new VDate(date.getTime()) : new VDate();
        var start_today = new VDate(now.getTime()).setToDateStart();
        return parseInt(((now.getTime() - start_today.getTime()) / 60000).toString());
    }
    /**
     * Gets the number of minutes passed in a given day as of now. (defaults to today)
     * For example, at 1:15 am, 75 minutes have passed in the day
     * @returns Number
     */
    static getMinutesInDay(date) {
        var now = date ? new VDate(date.getTime()) : new VDate();
        var start_today = new VDate(now.getTime()).setToDateStart();
        return parseInt(((now.getTime() - start_today.getTime()) / 60000).toString());
    }
    /**
     * Returns the number of days in the given month
     * @param {Number} [year] The year of the month
     * @param {Number} [month] The month that its number of days will be returned
     * @returns Number
     */
    static getDaysInMonth(year, month) {
        let targetMonth = parseInt(month.toString()) + 1;
        return new VDate(year, targetMonth, 0).getDate();
    }
    /**
     * Returns the number of days that have passed so far in the given year.
     * @param {VDate | Date} [date] the given date (defualt=today)
     * @returns Number
     */
    static getDayOfYear(date) {
        let today = date || new VDate();
        return Math.ceil((today.getTime() - new VDate(today.getFullYear(), 0, 1).getTime()) / 86400000);
    }
    /**
     * Returns the total number of days in a given year which is 365 for a normal year
     * and 366 for a leap year.
     * @param {Date|Number} year the given year (default=current year)
     * @returns Number
     */
    static getDaysInYear(year) {
        let date;
        if (typeof year === 'number') {
            date = new VDate(year, 1, 1);
        }
        else {
            date = new VDate(year.getTime());
        }
        return date.isLeap() ? 366 : 365;
    }
    /**
     * Returns an object containing the start, end, and the weeknumber of the date object
     *
     * The week number is calculated based on ISO standard
     * @returns Week data
     */
    getWeek() {
        let today = new VDate(this.getTime());
        today.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        today.setDate(today.getDate() + 3 - (today.getDay() + 6) % 7);
        // January 4 is always in week 1.
        let week1 = new VDate(today.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        let weekNumber = 1 + Math.round(((today.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        let startOfTheWeek = today.addDay((today.getDay() * -1) + 1);
        let endOfTheWeek = today.addDay(today.getDay() === 0 ? 0 : (7 - today.getDay()));
        return { start: startOfTheWeek, end: endOfTheWeek, weekNumber: weekNumber };
    }
    /**
     * Gets the start and the end of the week by the week number
     * @param weekNumber The number of the week
     * @param year The year containing the week
     */
    static getWeekByWeekNumber(weekNumber, year) {
        let simple = new VDate(VDate.UTC(year, 0, 1 + (weekNumber - 1) * 7));
        let dow = simple.getDay();
        let weekStart = simple;
        if (dow <= 4)
            weekStart.setDate(simple.getDate() - simple.getDay() + 1);
        else
            weekStart.setDate(simple.getDate() + 8 - simple.getDay());
        return weekStart.getWeek();
    }
    /**
     * Returns the number of the quarter of the date object
     * @returns number
     */
    getQuarter() {
        return Math.ceil((this.getMonth() + 1) / 3);
    }
    /**
     * Returns the name of the month in English
     * @param length Whether the long format of the month name to be returned or the short format (default: long)
     * @returns string
     */
    getMonthName(length) {
        return (length === "short" ? VDate.monthNamesShort : VDate.monthNamesLong)[this.getMonth()];
    }
    /**
     * Returns the name of the day in English
     * @param length Whether the long format of the day name to be returned or the long format (default: long)
     * @returns string
     */
    getDayName(length) {
        return (length === "short" ? VDate.weekDayShort : VDate.weekDayLong)[this.getDay()];
    }
}
// Static Variables
VDate.monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
VDate.monthNamesLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", 'December'];
VDate.weekDayShort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
VDate.weekDayLong = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export default VDate;
/**
 * Calculates the difference between two date objects and returns a duration object.
 * @param one The first date
 * @param two The second date
 * @param normalize If normalize is false, the difference is separately calculated for every time frame. For example, a duration of 1 day will be presented as 1 day, 24 hours, 1440 minutes and
 * so on. However, a normalized duration will make it human readable. So, a duration of 25 hours will be presented as 1 day and 1 hour.
 * @returns DateDurationType
 */
export function dateDuration(one, two, normalize) {
    let first;
    let second;
    if (one.getTime() > two.getTime()) {
        second = one;
        first = two;
    }
    else {
        first = one;
        second = two;
    }
    let diff = second.getTime() - first.getTime();
    if (normalize) {
        let yd = second.getFullYear() - first.getFullYear();
        let md = second.getMonth() - first.getMonth();
        if (md < 0) {
            md += 12;
            yd -= 1;
        }
        let dd = second.getDate() - first.getDate();
        if (dd < 0) {
            dd = (VDate.getDaysInMonth(second.getFullYear(), second.getMonth() - 1) + second.getDate()) - first.getDate();
            md -= 1;
        }
        if (VDate.getMinutesInDay(first) > VDate.getMinutesInDay(second)) {
            dd -= 1;
        }
        return {
            milliseconds: diff % 1000,
            seconds: Math.floor((diff % 60000) / 1000),
            minutes: Math.floor((diff % 3600000) / 60000),
            hours: Math.floor((diff % 86400000) / 3600000),
            days: dd,
            months: md,
            years: yd,
        };
    }
    return {
        milliseconds: diff,
        seconds: Math.floor(diff / 1000),
        minutes: Math.floor(diff / 60000),
        hours: Math.floor(diff / 3600000),
        days: Math.floor(diff / 86400000),
        months: Math.floor(diff / 2592000000),
        years: Math.floor(diff / 31536000000),
    };
}
