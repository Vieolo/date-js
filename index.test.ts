import VDate from './index';

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

        expect(d.formatMonth()).toBe("October 2020");
        
        expect(d.formatDateTime()).toBe("Oct 11, 2020 14:24");
        
        expect(d.formatDate()).toBe("2020-10-11");
        expect(d.formatDate("yyyy-mm-dd")).toBe("2020-10-11");
        expect(d.formatDate("dd/mm/yyyy")).toBe("11/10/2020");
        expect(d.formatDate("mm/dd/yyyy")).toBe("10/11/2020");
        expect(d.formatDate("month dd, yyyy")).toBe("Oct 11, 2020");
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