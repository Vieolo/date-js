export type DateFormats = 'yyyy-mm-dd' | 'yyyy.mm.dd' | 'dd/mm/yyyy' | 'dd-mm-yyyy' | "dd.mm.yyyy" | 'mm/dd/yyyy' | 'month dd, yyyy' | 'mon dd, yyyy';
/**
 * Custom extension of the Date class
 */
export default class VDate extends Date {
    static monthNamesShort: string[];
    static monthNamesLong: string[];
    static weekDayShort: string[];
    static weekDayLong: string[];
    /**
     * sets the time to the start of the day at 00:00:00:000 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the start of the local date. default = `true`
     * @returns {VDate}
     */
    setToDateStart(local?: boolean): VDate;
    /**
     * sets the time to the end of the day at 23:59:59:999 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the end of the local date. default = `true`
     * @returns {VDate}
     */
    setToDateEnd(local?: boolean): VDate;
    /**
     * set the time to the start of the first day of the month at 00:00:00:000 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the start of the local month. default = `true`
     * @returns {VDate}
     */
    setToMonthStart(local?: boolean): VDate;
    /**
     * set the time to the end of the last day of the month at 23:59:59:999 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the end of the local month. default = `true`
     * @returns {VDate}
     */
    setToMonthEnd(local?: boolean): VDate;
    /**
     * set the time to the start of the first day of the year at 00:00:00:000 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the start of the local year. default = `true`
     * @returns {VDate}
     */
    setToYearStart(local?: boolean): VDate;
    /**
     * set the time to the end of the last day of the year at 23:59:59:999 and returns a new instance of the date
     * @param {Boolean} local - Whether to set the end of the local year. default = `true`
     * @returns {VDate}
     */
    setToYearEnd(local?: boolean): VDate;
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
    formatDate(format?: DateFormats): string;
    /**
     * Formats the date and time
     * @param format The format of the date (default: `mon dd, yyy`)
     * @param ampm Whether the time should be displayed as 24 hours or as AM/PM
     * @returns string
     */
    formatDateTime(format?: DateFormats, ampm?: boolean): string;
    /**
     * Formats the difference between now and the given target time.
     * If the given target time is before now, the given result will show the time passed. e.g. 2 days ago.
     * If the given target time is after now, the given result will show the remaining time. e.g. in 2 days.
     * @param {VDate} targetTime - The time to get the countdown
     * @return String
     */
    static countDown(targetTime: VDate, options?: {
        /**
         * The maximum difference that would be returned as the countdown.
         *
         * The default value is 432_000_000 (i.e. 5 days).
         *
         * For example, if the difference between now and the target time is 4 days, the result will be 4 days ago. but
         * if the difference is 6 days, the target time will be formatted as usual and returned.
         */
        countDownLimit?: number;
        /** Whether to include hours if the difference is in days. e.g. 2 days and 23 hours */
        includeHour?: boolean;
        /** Whether to include minutes if the difference is in hours. e.g. 14 hours and 43 minutes */
        includeMinutes?: boolean;
        /**
         * By default, this function will compare the target time with the current local time. but
         * you can provide a specific date replacing the current time.
         */
        now?: VDate;
        /** The format of the date to be used if the difference is larger than the limit */
        overLimitDateFormat?: DateFormats;
        /** Whether to include the time if the difference is larger than the limit, default is false */
        includeOverLimitTime?: boolean;
        /** Whether to show the time in 12 hour format, default is false */
        overLimitTimeAMPM?: boolean;
    }): string;
    /**
     * formats the date as the month and full year
     * @returns String - example: June 2019
     */
    formatMonth(length?: "long" | "short"): string;
    /**
     * Returns formatted time from the minute count
     * @param {Number} count - number of minutes
     * @returns String - Example: 2h 23m
     */
    static getTimeFromMinuteCount(count: number): string;
    /**
     * Changes the date by seconds
     * @param {Number} change - Adds (or reduces) this number of seconds to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addSecond(change: number): VDate;
    /**
     * Changes the date by minutes
     * @param {Number} change - Adds (or reduces) this number of minutes to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addMinute(change: number): VDate;
    /**
     * Changes the date by hours
     * @param {Number} change - Adds (or reduces) this number of hours to (or from) the date
     * @returns VDate - Returns a new instance of `VDate`
     */
    addHour(change: number): VDate;
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
     * Checks if `otherDate` is on the same day as this date or not
     * @param {VDate} otherDate
     */
    isOnSameDay(otherDate: VDate): boolean;
    /**
     * Checks if the date is valid or not.
     * Returns false if the object is 'Invalid Date' type
     * @returns {Boolean}
     */
    isValid(): boolean;
    /**
     * Gets the number of minutes passed in today as of now.
     * For example, at 1:15 am, 75 minutes have passed in today
     * @deprecated use `getMinutesInDay` instead
     * @returns Number
     */
    static getMinutesInToday(date?: VDate | Date): number;
    /**
     * Gets the number of minutes passed in a given day as of now. (defaults to today)
     * For example, at 1:15 am, 75 minutes have passed in the day
     * @returns Number
     */
    static getMinutesInDay(date?: VDate | Date): number;
    /**
     * Returns the number of days in the given month
     * @param {Number} [year] The year of the month
     * @param {Number} [month] The month that its number of days will be returned
     * @returns Number
     */
    static getDaysInMonth(year: number, month: number): number;
    /**
     * Returns the number of days that have passed so far in the given year.
     * @param {VDate | Date} [date] the given date (defualt=today)
     * @returns Number
     */
    static getDayOfYear(date?: VDate | Date): number;
    /**
     * Returns the total number of days in a given year which is 365 for a normal year
     * and 366 for a leap year.
     * @param {Date|Number} year the given year (default=current year)
     * @returns Number
     */
    static getDaysInYear(year: VDate | Date | number): number;
    /**
     * Returns an object containing the start, end, and the weeknumber of the date object
     *
     * The week number is calculated based on ISO standard
     * @returns Week data
     */
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
    /**
     * Returns the number of the quarter of the date object
     * @returns number
     */
    getQuarter(): number;
    /**
     * Returns the name of the month in English
     * @param length Whether the long format of the month name to be returned or the short format (default: long)
     * @returns string
     */
    getMonthName(length?: "long" | "short"): string;
    /**
     * Returns the name of the day in English
     * @param length Whether the long format of the day name to be returned or the long format (default: long)
     * @returns string
     */
    getDayName(length?: "long" | "short"): string;
}
export type DateDurationType = {
    milliseconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    months: number;
    years: number;
};
/**
 * Calculates the difference between two date objects and returns a duration object.
 * @param one The first date
 * @param two The second date
 * @param normalize If normalize is false, the difference is separately calculated for every time frame. For example, a duration of 1 day will be presented as 1 day, 24 hours, 1440 minutes and
 * so on. However, a normalized duration will make it human readable. So, a duration of 25 hours will be presented as 1 day and 1 hour.
 * @returns DateDurationType
 */
export declare function dateDuration(one: VDate | Date, two: VDate | Date, normalize?: boolean): DateDurationType;
