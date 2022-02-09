import VDate from '../src/index';

describe("VDate", () => {

    it("Gets the static variables correctly", () => {

        expect(VDate.monthNamesShort[0]).toBe("Jan");
        expect(VDate.monthNamesShort[1]).toBe("Feb");
        expect(VDate.monthNamesShort[2]).toBe("Mar");
        expect(VDate.monthNamesShort[3]).toBe("Apr");
        expect(VDate.monthNamesShort[4]).toBe("May");
        expect(VDate.monthNamesShort[5]).toBe("Jun");
        expect(VDate.monthNamesShort[6]).toBe("Jul");
        expect(VDate.monthNamesShort[7]).toBe("Aug");
        expect(VDate.monthNamesShort[8]).toBe("Sept");
        expect(VDate.monthNamesShort[9]).toBe("Oct");
        expect(VDate.monthNamesShort[10]).toBe("Nov");
        expect(VDate.monthNamesShort[11]).toBe("Dec");


        expect(VDate.monthNamesLong[0]).toBe("January");
        expect(VDate.monthNamesLong[1]).toBe("February");
        expect(VDate.monthNamesLong[2]).toBe("March");
        expect(VDate.monthNamesLong[3]).toBe("April");
        expect(VDate.monthNamesLong[4]).toBe("May");
        expect(VDate.monthNamesLong[5]).toBe("June");
        expect(VDate.monthNamesLong[6]).toBe("July");
        expect(VDate.monthNamesLong[7]).toBe("August");
        expect(VDate.monthNamesLong[8]).toBe("September");
        expect(VDate.monthNamesLong[9]).toBe("October");
        expect(VDate.monthNamesLong[10]).toBe("November");
        expect(VDate.monthNamesLong[11]).toBe('December');

        expect(VDate.weekDayShort[0]).toBe("Su");
        expect(VDate.weekDayShort[1]).toBe("Mo");
        expect(VDate.weekDayShort[2]).toBe("Tu");
        expect(VDate.weekDayShort[3]).toBe("We");
        expect(VDate.weekDayShort[4]).toBe("Th");
        expect(VDate.weekDayShort[5]).toBe("Fr");
        expect(VDate.weekDayShort[6]).toBe("Sa");

        expect(VDate.weekDayLong[0]).toBe("Sunday");
        expect(VDate.weekDayLong[1]).toBe("Monday");
        expect(VDate.weekDayLong[2]).toBe("Tuesday");
        expect(VDate.weekDayLong[3]).toBe("Wednesday");
        expect(VDate.weekDayLong[4]).toBe("Thursday");
        expect(VDate.weekDayLong[5]).toBe("Friday");
        expect(VDate.weekDayLong[6]).toBe("Saturday");        

    })



    it("Formats dates correctly", () => {
        let d = new VDate(2020, 9, 11, 14, 24, 11, 324);
        let d2 = new VDate(2020, 2, 4, 5, 4, 11, 324);
        let d3 = new VDate(2020, 0, 1, 12, 30, 11, 324);
        let d4 = new VDate(2020, 0, 20, 0, 0, 11, 324);

        expect(d.formatMonth()).toBe("October 2020");
        
        expect(d.formatDateTime()).toBe("Oct 11, 2020 14:24");
        expect(d2.formatDateTime()).toBe("Mar 04, 2020 05:04");
        expect(d3.formatDateTime()).toBe("Jan 01, 2020 12:30");
        expect(d4.formatDateTime()).toBe("Jan 20, 2020 00:00");
        
        expect(d.formatDate()).toBe("2020-10-11");
        expect(d.formatDate("yyyy-mm-dd")).toBe("2020-10-11");
        expect(d.formatDate("dd/mm/yyyy")).toBe("11/10/2020");
        expect(d.formatDate("mm/dd/yyyy")).toBe("10/11/2020");
        expect(d.formatDate("month dd, yyyy")).toBe("Oct 11, 2020");
        expect(d2.formatDate()).toBe("2020-03-04");
        expect(d2.formatDate("yyyy-mm-dd")).toBe("2020-03-04");
        expect(d2.formatDate("dd/mm/yyyy")).toBe("04/03/2020");
        expect(d2.formatDate("mm/dd/yyyy")).toBe("03/04/2020");
        expect(d2.formatDate("month dd, yyyy")).toBe("Mar 04, 2020");
        expect(d3.formatDate()).toBe("2020-01-01");
        expect(d3.formatDate("yyyy-mm-dd")).toBe("2020-01-01");
        expect(d3.formatDate("dd/mm/yyyy")).toBe("01/01/2020");
        expect(d3.formatDate("mm/dd/yyyy")).toBe("01/01/2020");
        expect(d3.formatDate("month dd, yyyy")).toBe("Jan 01, 2020");
        expect(d4.formatDate()).toBe("2020-01-20");
        expect(d4.formatDate("yyyy-mm-dd")).toBe("2020-01-20");
        expect(d4.formatDate("dd/mm/yyyy")).toBe("20/01/2020");
        expect(d4.formatDate("mm/dd/yyyy")).toBe("01/20/2020");
        expect(d4.formatDate("month dd, yyyy")).toBe("Jan 20, 2020");

        expect(d.formatTime()).toBe("14:24");
        expect(d.formatTime(true)).toBe("02:24 PM");
        expect(d2.formatTime()).toBe("05:04");
        expect(d2.formatTime(true)).toBe("05:04 AM");
        expect(d3.formatTime()).toBe("12:30");
        expect(d3.formatTime(true)).toBe("12:30 PM");
        expect(d4.formatTime()).toBe("00:00");
        expect(d4.formatTime(true)).toBe("00:00 AM");
    })



    it("Sets the properties of the date correctly", () => {
        let d = new VDate(2020, 9, 11, 14, 24, 11, 324);

        // Setting the date
        expect(d.setToDateStart().getTime()).toBe(new VDate(2020, 9, 11, 0, 0, 0, 0).getTime());
        expect(d.setToDateEnd().getTime()).toBe(new VDate(2020, 9, 11, 23, 59, 59, 999).getTime());

        // Setting the month
        expect(d.setToMonthStart().getTime()).toBe(new VDate(2020, 9, 1, 0, 0, 0, 0).getTime());
        expect(d.setToMonthEnd().getTime()).toBe(new VDate(2020, 9, 31, 23, 59, 59, 999).getTime());

        // Setting the year
        expect(d.setToYearStart().getTime()).toBe(new VDate(2020, 0, 1, 0, 0, 0, 0).getTime());
        expect(d.setToYearEnd().getTime()).toBe(new VDate(2020, 11, 31, 23, 59, 59, 999).getTime());


        // The original Date should not be modified
        expect(d.getTime()).toBe(new VDate(2020, 9, 11, 14, 24, 11, 324).getTime());
    })
})