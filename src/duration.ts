import { VDate } from "./date";
import type { DateDurationType } from './types';

/**
 * Calculates the difference between two date objects and returns a duration object.
 * @param one The first date
 * @param two The second date
 * @param normalize If normalize is false, the difference is separately calculated for every time frame. For example, a duration of 1 day will be presented as 1 day, 24 hours, 1440 minutes and 
 * so on. However, a normalized duration will make it human readable. So, a duration of 25 hours will be presented as 1 day and 1 hour.
 * @returns DateDurationType
 */
export function dateDuration(one: VDate | Date, two: VDate | Date, normalize?: boolean): DateDurationType {
	let first: VDate | Date;
	let second: VDate | Date;
	if (one.getTime() > two.getTime()) {
		second = one;
		first = two;
	} else {
		first = one;
		second = two;
	}
	let diff = second.getTime() - first.getTime()

	if (normalize) {
		let yd = second.getFullYear() - first.getFullYear();

		let md = second.getMonth() - first.getMonth();
		if (md < 0) {
			md += 12;
			yd -= 1;
		}

		let dd = second.getDate() - first.getDate();
		if (dd < 0) {			
			dd = (VDate.getDaysInMonth(second.getFullYear(), second.getMonth() - 1) + second.getDate()) - first.getDate()
			md -= 1;
		}

		if (VDate.getMinutesInDay(first) > VDate.getMinutesInDay(second)) {
			dd -= 1;
		}

		return {
			milliseconds: diff % 1_000,
			seconds: Math.floor((diff % 60_000) / 1_000),
			minutes: Math.floor((diff % 3_600_000) / 60_000),
			hours: Math.floor((diff % 86_400_000) / 3_600_000),
			days: dd,
			months: md,
			years: yd,
		}
	}

	return {
		milliseconds: diff,
		seconds: Math.floor(diff / 1_000),
		minutes: Math.floor(diff / 60_000),
		hours: Math.floor(diff / 3_600_000),
		days: Math.floor(diff / 86_400_000),
		months: Math.floor(diff / 2_592_000_000),
		years: Math.floor(diff / 31_536_000_000),
	}
}