/**
 * Custom extension of the Date class
 */
export default class VDate extends Date {
    /**
     * returns the date in the desired format. default = `yyyy-mm-dd`
     * @param {'yyyy-mm-dd'|'dd/mm/yyyy'|'mm/dd/yyyy'|'month dd, yyyy'} format - The desired format. default = 'yyyy-mm-dd'
     * @returns String
     */
    getDateOnly(format?: 'yyyy-mm-dd' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'month dd, yyyy'): string;
    /**
     * sets the time to the start of the day at 00:00:00:000
     * @param {Boolean} local - Whether to set the start of the local date. default = `true`
     * @returns {VDate}
     */
    setToDateStart(local?: boolean): VDate;
    /**
     * sets the time to the end of the day at 23:59:59:999
     * @param {Boolean} local - Whether to set the end of the local date. default = `true`
     * @returns {VDate}
     */
    setToDateEnd(local?: boolean): VDate;
    /**
     * set the time to the start of the first day of the month at 00:00:00:000
     * @param {Boolean} local - Whether to set the start of the local month. default = `true`
     * @returns {VDate}
     */
    setToMonthStart(local?: boolean): VDate;
    /**
     * set the time to the end of the last day of the month at 23:59:59:999
     * @param {Boolean} local - Whether to set the end of the local month. default = `true`
     * @returns {VDate}
     */
    setToMonthEnd(local?: boolean): VDate;
    /**
     * set the time to the start of the first day of the year at 00:00:00:000
     * @param {Boolean} local - Whether to set the start of the local year. default = `true`
     * @returns {VDate}
     */
    setToYearStart(local?: boolean): VDate;
    /**
     * set the time to the end of the last day of the year at 23:59:59:999
     * @param {Boolean} local - Whether to set the end of the local year. default = `true`
     * @returns {VDate}
     */
    setToYearEnd(local?: boolean): VDate;
    /**
     * Gets the timestamp of the date in seconds
     * @param {Boolean} UTC - Whether to convert the date to UTC first or not. default = True
     */
    getTimeStamptInSecond(UTC?: boolean): number;
    /**
     * Formats the time to the 12 hour scheme e.g. 10:25 am
     * @returns String
     */
    formatTime(ampm?: boolean): string;
    /**
     * Formats the date in the desired format. default = `yyyy-mm-dd`
     * @param {'yyyy-mm-dd'|'dd/mm/yyyy'|'mm/dd/yyyy'|'month dd, yyyy'} format - The desired format. default = 'yyyy-mm-dd'
     * @returns String
     */
    formatDate(format?: 'yyyy-mm-dd' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'month dd, yyyy'): string;
    /**
     * Formats date and time
     * @param {Boolean} reverse if True, the time, upto 5 days ago will be shown
     * as 'ago' time. Such as 4 days ago or 2 hours ago. Default = `false`
     * @returns string -  example: Jun 12, 2019, 3:46 PM
     */
    formatDateTime(reverse?: boolean, ampm?: boolean): string;
    /**
     * Formats the difference between now and the given target time.
     * If the given target time is before now, the given response will show the time passed. e.g. 2 days ago.
     * If the given target time is before now, the given response will show the time passed. e.g. 2 days ago.
     * @param {VDate} targetTime - The time to get the countdown
     * @param {Number} countDownLimit - default = 432000 seconds, if the difference is more than this number of seconds, a normal date is returned
     * @param {Boolean} includeHour - Whether to include hours if along side the day difference in the countdown. default == false
     * @param {VDate} now - Default to new VDate(). Enter a date to compare to the target time instead of now
     * @return String -
     */
    static countDown(targetTime: VDate, countDownLimit?: number, includeHour?: boolean, includeMinutes?: boolean, now?: VDate): string;
    /**
     * formats the date as the month and full year
     * @returns String - example: June 2019
     */
    formatMonth(): string;
    /**
     * Changes the date by seconds
     * @param {Number} change - Adds (or reduces) this number of seconds to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addSecond(change: number): VDate;
    /**
     * Changes the date by days
     * @param {Number} change - Adds (or reduces) this number of days to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addDay(change: number): VDate;
    /**
     * Changes the date by months
     * @param {Number} change - Adds (or reduces) this number of months to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addMonth(change: number): VDate;
    /**
     * Changes the date by years
     * @param {Number} change - Adds (or reduces) this number of years to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addYear(change: number): VDate;
    /**
     * If the year of the `VDate` is a leap year or not
     * @returns Boolean
     */
    isLeap(): boolean;
    /**
     * Checks if `otherDate` is after this date or not
     * @param {VDate} otherDate
     */
    isAfter(otherDate: VDate): boolean;
    /**
     * Checks if `otherDate` is before this date or not
     * @param {VDate} otherDate
     */
    isBefore(otherDate: VDate): boolean;
    /**
     * Checks if the date is valid or not.
     * Returns false if the object is 'Invalid Date' type
     * @returns {Boolean}
     */
    isValid(): boolean;
    /**
     * Converts the date to UTC
     */
    toUTC(): VDate;
    /**
     * Returns formatted time from the minute count
     * @param {Number} count - number of minutes
     * @returns String - Example: 2h 23m
     */
    static getTimeFromMinuteCount(count: number): string;
    /**
     * Gets the number of minutes passed in today as of now.
     * For example, at 1:15 am, 75 minutes have passed in today
     * @returns Number
     */
    static getMinutesInToday(): number;
    /**
     * Returns the number of days in the given month
     * @param {Number} [year] The year of the month
     * @param {Number} [month] The month that its number of days will be returned
     * @returns Number
     */
    static getDaysInMonth(year?: number, month?: number): number;
    /**
     * Returns the number of days that have passed so far in the given year.
     * @param {VDate} [date] the given date (defualt=today)
     * @returns Number
     */
    static getDayOfYear(date?: VDate): number;
    /**
     * Returns the total number of days in a given year which is 365 for a normal year
     * and 366 for a leap year.
     * @param {Date|Number} year the given year (default=current year)
     * @returns Number
     */
    static getDaysInYear(year: VDate | number): 366 | 365;
    getWeek(): {
        start: VDate;
        end: VDate;
        weekNumber: number;
    };
    /**
     * Gets the start and the end of the week by the week number
     * @param weekNumber The number of the week
     * @param year The year containing the week
     */
    static getWeekByWeekNumber(weekNumber: number, year: number): {
        start: VDate;
        end: VDate;
        weekNumber: number;
    };
}
