import type { VDate } from "./date"

export type DateFormats = 
	'yyyy-mm-dd' | 
	'yyyy.mm.dd' | 
	'dd/mm/yyyy' | 
	'dd-mm-yyyy' | 
	"dd.mm.yyyy" | 
	'mm/dd/yyyy' | 
	'month dd, yyyy' | 
	'mon dd, yyyy'


export type DateDurationType = {
	milliseconds: number,
	seconds: number,
	minutes: number,
	hours: number,
	days: number,
	months: number,
	years: number
}
    
export type Week = { 
	start: VDate, 
	end: VDate, 
	weekNumber: number 
}