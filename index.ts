
/**
 * Custom extension of the Date class
 */
export default class VDate extends Date {

	// Static Variables
	static monthNamesShort: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
	static monthNamesLong: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", 'December'];
	static weekDayShort: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
	static weekDayLong: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



	//#region Set Functions

	/**
	 * sets the time to the start of the day at 00:00:00:000
	 * @param {Boolean} local - Whether to set the start of the local date. default = `true`
	 * @returns {VDate}
	 */
	setToDateStart(local: boolean = true): VDate {
		if (local) this.setHours(0, 0, 0, 0);
		else this.setUTCHours(0, 0, 0, 0);
		return this;
	}


	/**
	 * sets the time to the end of the day at 23:59:59:999
	 * @param {Boolean} local - Whether to set the end of the local date. default = `true`
	 * @returns {VDate}
	 */
	setToDateEnd(local: boolean = true): VDate {
		if (local) this.setHours(23, 59, 59, 999);
		else this.setUTCHours(23, 59, 59, 999);
		return this;
	}


	/**
	 * set the time to the start of the first day of the month at 00:00:00:000
	 * @param {Boolean} local - Whether to set the start of the local month. default = `true`
	 * @returns {VDate}
	 */
	setToMonthStart(local: boolean = true): VDate {
		if (local) {
			this.setDate(1);
			this.setHours(0, 0, 0, 0);
		} else {
			this.setUTCDate(1);
			this.setUTCHours(0, 0, 0, 0);
		}
		return this;
	}

	/**
	 * set the time to the end of the last day of the month at 23:59:59:999
	 * @param {Boolean} local - Whether to set the end of the local month. default = `true`
	 * @returns {VDate}
	 */
	setToMonthEnd(local: boolean = true): VDate {
		this.addMonth(1);
		if (local) {
			this.setDate(0);
			this.setHours(23, 59, 59, 999);
		} else {
			this.setUTCDate(0);
			this.setUTCHours(23, 59, 59, 999);
		}
		return this;
	}

	/**
	 * set the time to the start of the first day of the year at 00:00:00:000
	 * @param {Boolean} local - Whether to set the start of the local year. default = `true`
	 * @returns {VDate}
	 */
	setToYearStart(local: boolean = true): VDate {
		if (local) {
			this.setMonth(0);
			this.setDate(1);
			this.setHours(0, 0, 0, 0);
		} else {
			this.setUTCMonth(0);
			this.setUTCDate(1);
			this.setUTCHours(0, 0, 0, 0);
		}
		return this;
	}

	/**
	 * set the time to the end of the last day of the year at 23:59:59:999
	 * @param {Boolean} local - Whether to set the end of the local year. default = `true`
	 * @returns {VDate}
	 */
	setToYearEnd(local: boolean = true): VDate {
		if (local) {
			this.setMonth(11);
			this.setDate(31);
			this.setHours(23, 59, 59, 999);
		} else {
			this.setUTCMonth(11);
			this.setUTCDate(31);
			this.setUTCHours(23, 59, 59, 999);
		}
		return this;
	}

	/**
	 * Gets the timestamp of the date in seconds
	 * @param {Boolean} UTC - Whether to convert the date to UTC first or not. default = True 
	 */
	getTimeStamptInSecond(UTC: boolean = true): number {
		if (UTC) return Math.round(this.getTime() / 1000)
		else return Math.round(this.getTime() / 1000);
	}

	//#endregion


	//#region Format Functions

	/**
	 * Formats the time to the 12 hour scheme e.g. 10:25 am
	 * @returns String
	 */
	formatTime(ampm = false): string {

		let hour = this.getHours();
		let minute = this.getMinutes();

		if (ampm == false) {
			let hourString = hour.toString();
			if (hour < 10) hourString = "0" + hourString;

			let minuteString = minute.toString();
			if (minute < 10) minuteString = "0" + minuteString;

			return hourString + ':' + minuteString;
		}


		let twelveIndex = 0;
		if (hour < 12) {
			twelveIndex = 0;
		} else if (hour == 12) {
			twelveIndex = 1;
		} else {
			hour = hour - 12;
			twelveIndex = 1;
		}

		let hourString: string;
		if (hour < 10) {
			hourString = "0" + hour.toString();
		} else {
			hourString = hour.toString();
		}


		let minuteString: string;

		if (minute < 10) {
			minuteString = "0" + minute.toString();
		} else {
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
	formatDate(format: 'yyyy-mm-dd' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'month dd, yyyy' = 'yyyy-mm-dd'): string {
		let dd = this.getDate();
		let ddString: string = dd.toString();

		let mm = this.getMonth() + 1; //January is 0!
		let mmString: string = mm.toString();

		var yyyy = this.getFullYear();

		if (dd < 10) {
			ddString = '0' + dd.toString();
		}
		if (mm < 10) {
			mmString = '0' + mm.toString();
		}
		if (format == 'yyyy-mm-dd') {
			return yyyy + "-" + mmString + "-" + ddString;
		} else if (format == 'dd/mm/yyyy') {
			return `${ddString}/${mmString}/${yyyy}`;
		} else if (format == 'mm/dd/yyyy') {
			return `${mmString}/${ddString}/${yyyy}`;
		} else if (format == 'month dd, yyyy') {
			return `${VDate.monthNamesShort[this.getMonth()]} ${ddString}, ${yyyy}`;
		}

		return "";
	}




	/**
	 * Formats date and time
	 * @param {Boolean} reverse if True, the time, upto 5 days ago will be shown
	 * as 'ago' time. Such as 4 days ago or 2 hours ago. Default = `false`
	 * @returns string -  example: Jun 12, 2019, 3:46 PM	 
	 */
	formatDateTime(reverse: boolean = false, ampm = false): string {
		if (reverse) {
			let nowTimeStamp = VDate.now();
			let difference = (nowTimeStamp - this.getTime()) / 1000;

			if (difference < 60) {
				let d = parseInt(difference.toString());
				return d.toString() + " seconds ago";

			} else if (difference >= 60 && difference < 3600) {
				let minutes = parseInt((difference / 60).toString());
				if (minutes == 1) {
					return minutes.toString() + " min ago";
				} else {
					return minutes.toString() + " mins ago";
				}

			} else if (difference >= 3600 && difference < 86400) {
				let hours = parseInt((difference / 3600).toString());
				if (hours == 1) {
					return hours.toString() + " hour ago";
				} else {
					return hours.toString() + " hours ago";
				}

			} else if (difference >= 86400 && difference < 432000) {
				var days = parseInt((difference / 86400).toString());
				if (days == 1) {
					return days.toString() + " day ago";
				} else {
					return days.toString() + " days ago";
				}
			}
		}
		let day = this.getDate();
		let month = this.getMonth();
		let year = this.getFullYear();
		let hour = this.getHours();
		let minute = this.getMinutes();
		let twelve = [
			"AM", "PM"
		];

		let twelveIndex = 0;

		if (ampm == false) {
			let hourString = hour.toString();
			if (hour < 10) hourString = "0" + hourString;

			let minuteString = minute.toString();
			if (minute < 10) minuteString = "0" + minuteString;

			return VDate.monthNamesShort[month] + ' ' + day + ', ' + year + ' ' + hourString + ':' + minuteString;
		}

		if (hour < 12) {
			twelveIndex = 0;
		} else if (hour == 12) {
			twelveIndex = 1;
		} else {
			hour = hour - 12;
			twelveIndex = 1;
		}

		return VDate.monthNamesShort[month] + ' ' + day + ', ' + year + ' ' + hour + ':' + minute + ' ' + twelve[twelveIndex];
	}

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
	static countDown(targetTime: VDate, countDownLimit: number = 432000, includeHour: boolean = false, includeMinutes: boolean = false, now: VDate = new VDate()): string {
		if (now.isAfter(targetTime)) {
			let difference = (now.getTime() - targetTime.getTime()) / 1000;
			if (difference < 60) {
				let d = parseInt(difference.toString());
				return d.toString() + " seconds ago";

			} else if (difference >= 60 && difference < 3600) {
				let minutes = parseInt((difference / 60).toString());
				if (minutes == 1) {
					return minutes.toString() + " min ago";
				} else {
					return minutes.toString() + " mins ago";
				}

			} else if (difference >= 3600 && difference < 86400) {
				let hours = parseInt((difference / 3600).toString());
				let final = '';
				if (hours == 1) {
					final = hours.toString() + " hour";
				} else {
					final = hours.toString() + " hours";
				}

				if (includeMinutes) {
					let minutes = parseInt(((difference % 3600) / 60).toString());
					if (minutes > 0) {
						if (minutes == 1) final += ` and 1 minute`
						else final += ` and ${minutes} minutes`;
					}
				}

				return final + " ago";

			} else if (difference >= 86400 && difference < countDownLimit) {
				let days = parseInt((difference / 86400).toString());
				let final = '';
				if (days == 1) {
					final = days.toString() + " day";
				} else {
					final = days.toString() + " days";
				}
				if (includeHour) {
					var hours = parseInt(((difference % 86400) / 3600).toString());
					if (hours == 1) {
						final += " and 1 hour ago";
					} else {
						final += " and " + hours + " hours ago";
					}
				} else {
					final += ' ago';
				}
				return final;
			}
		} else {
			let difference = (targetTime.getTime() - now.getTime()) / 1000;
			if (difference < 60) {
				let d = parseInt(difference.toString());
				return d.toString() + " seconds";

			} else if (difference >= 60 && difference < 3600) {
				let minutes = parseInt((difference / 60).toString());
				if (minutes == 1) {
					return minutes.toString() + " min";
				} else {
					return minutes.toString() + " mins";
				}

			} else if (difference >= 3600 && difference < 86400) {
				let hours = parseInt((difference / 3600).toString());
				let final = '';
				if (hours == 1) {
					final = hours.toString() + " hour";
				} else {
					final = hours.toString() + " hours";
				}

				if (includeMinutes) {
					let minutes = parseInt(((difference % 3600) / 60).toString());
					if (minutes > 0) {
						if (minutes == 1) final += ` and 1 minute`
						else final += ` and ${minutes} minutes`;
					}
				}

				return final;

			} else if (difference >= 86400 && difference < countDownLimit) {
				let days = parseInt((difference / 86400).toString());
				let final = '';
				if (days == 1) {
					final = days.toString() + " day";
				} else {
					final = days.toString() + " days";
				}
				if (includeHour) {
					let hours = parseInt(((difference % 86400) / 3600).toString());
					if (hours == 1) {
						final += " and 1 hour";
					} else {
						final += " and " + hours + " hours";
					}
				}
				return final;
			}
		}
		return targetTime.formatDate();
	}


	/**
	 * formats the date as the month and full year
	 * @returns String - example: June 2019
	 */
	formatMonth(): string {
		return `${VDate.monthNamesLong[this.getMonth()]} ${this.getFullYear()}`
	}


	/**
	 * Returns formatted time from the minute count
	 * @param {Number} count - number of minutes
	 * @returns String - Example: 2h 23m 
	 */
	static getTimeFromMinuteCount(count: number): string {
		if (count < 60) {
			return count + 'm';
		} else {
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
	addSecond(change: number): VDate {
		return new VDate(this.setSeconds(this.getSeconds() + change));
	}

	/**
	 * Changes the date by days
	 * @param {Number} change - Adds (or reduces) this number of days to (or from) the date 
	 * @returns VDate - Returns a new instance of `VDate`
	 */
	addDay(change: number): VDate {
		return new VDate(this.setDate(this.getDate() + change));
	}


	/**
	 * Changes the date by months
	 * @param {Number} change - Adds (or reduces) this number of months to (or from) the date 
	 * @returns VDate - Returns a new instance of `VDate`
	 */
	addMonth(change: number): VDate {
		return new VDate(this.setMonth(this.getMonth() + change));

	}

	/**
	 * Changes the date by years
	 * @param {Number} change - Adds (or reduces) this number of years to (or from) the date 
	 * @returns VDate - Returns a new instance of `VDate`
	 */
	addYear(change: number): VDate {
		return new VDate(this.setFullYear(this.getFullYear() + change));
	}

	//#endregion



	//#region Boolean Functions

	/**
	 * If the year of the `VDate` is a leap year or not
	 * @returns Boolean
	 */
	isLeap(): boolean {
		let year = this.getFullYear();
		return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
	}

	/**
	 * Checks if `otherDate` is after this date or not
	 * @param {VDate} otherDate 
	 */
	isAfter(otherDate: VDate): boolean {
		return this > otherDate ? true : false;
	}

	/**
	 * Checks if `otherDate` is before this date or not
	 * @param {VDate} otherDate 
	 */
	isBefore(otherDate: VDate): boolean {
		return this < otherDate ? true : false;
	}

	/**
	 * Checks if the date is valid or not.
	 * Returns false if the object is 'Invalid Date' type
	 * @returns {Boolean}
	 */
	isValid(): boolean {
		return !isNaN(this.getTime())
	}

	//#endregion



	//#region Calculate Functions

	/**
	 * Gets the number of minutes passed in today as of now.
	 * For example, at 1:15 am, 75 minutes have passed in today
	 * @returns Number
	 */
	static getMinutesInToday(): number {
		var now = new VDate();
		var start_today = new VDate().setToDateStart();
		return parseInt(((now.getTime() - start_today.getTime()) / 60000).toString());
	}


	/**
	 * Returns the number of days in the given month
	 * @param {Number} [year] The year of the month
	 * @param {Number} [month] The month that its number of days will be returned
	 * @returns Number
	 */
	static getDaysInMonth(year: number = new VDate().getFullYear(), month: number = new VDate().getMonth()): number {
		let targetMonth = parseInt(month.toString()) + 1;
		return new VDate(year, targetMonth, 0).getDate();
	}


	/**
	 * Returns the number of days that have passed so far in the given year.
	 * @param {VDate} [date] the given date (defualt=today)
	 * @returns Number
	 */
	static getDayOfYear(date: VDate = new VDate()): number {
		let today = date;
		return Math.ceil((today.getTime() - new VDate(today.getFullYear(), 0, 1).getTime()) / 86400000);
	}


	/**
	 * Returns the total number of days in a given year which is 365 for a normal year
	 * and 366 for a leap year.
	 * @param {Date|Number} year the given year (default=current year)
	 * @returns Number
	 */
	static getDaysInYear(year: VDate | number) {
		let date: VDate;
		if (typeof year == 'number') {
			date = new VDate(year, 1, 1);
		} else {
			date = year;
		}
		return date.isLeap() ? 366 : 365;
	}


	getWeek(): { start: VDate, end: VDate, weekNumber: number } {
		let today = new VDate(this.getTime());
		today.setHours(0, 0, 0, 0);
		// Thursday in current week decides the year.
		today.setDate(today.getDate() + 3 - (today.getDay() + 6) % 7);
		// January 4 is always in week 1.
		let week1 = new VDate(today.getFullYear(), 0, 4);
		// Adjust to Thursday in week 1 and count number of weeks from date to week1.
		let weekNumber = 1 + Math.round(((today.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);

		let startOfTheWeek = today.addDay((today.getDay() * -1) + 1);
		let endOfTheWeek = today.addDay(today.getDay() == 0 ? 0 : (7 - today.getDay()));

		return { start: startOfTheWeek, end: endOfTheWeek, weekNumber: weekNumber };
	}


	/**
	 * Gets the start and the end of the week by the week number
	 * @param weekNumber The number of the week
	 * @param year The year containing the week
	 */
	static getWeekByWeekNumber(weekNumber: number, year: number): { start: VDate, end: VDate, weekNumber: number } {
		let simple = new VDate(Date.UTC(year, 0, 1 + (weekNumber - 1) * 7));
		let dow = simple.getDay();
		let weekStart = simple;
		if (dow <= 4) weekStart.setDate(simple.getDate() - simple.getDay() + 1);
		else weekStart.setDate(simple.getDate() + 8 - simple.getDay());
		return weekStart.getWeek();
	}

	//#endregion
}
