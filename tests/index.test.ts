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


    it("Gets time from minute count correctly", () => {
        expect(VDate.getTimeFromMinuteCount(24)).toBe("24m");
        expect(VDate.getTimeFromMinuteCount(55)).toBe("55m");
        expect(VDate.getTimeFromMinuteCount(60)).toBe("1h 0m");
        expect(VDate.getTimeFromMinuteCount(123)).toBe("2h 3m");
        expect(VDate.getTimeFromMinuteCount(143)).toBe("2h 23m");
    });



    it("Adds time correctly", () => {
        // 2020 was a leap year
        let base = new VDate("2020-01-01").setToDateStart();

        expect(base.addSecond(10).getTime()).toBe(base.getTime() + (10 * 1_000));
        expect(base.addSecond(-10).getTime()).toBe(base.getTime() - (10 * 1_000));
        
        expect(base.addDay(1).formatDate()).toBe("2020-01-02");
        expect(base.addDay(35).formatDate()).toBe("2020-02-05");
        expect(base.addDay(60).formatDate()).toBe("2020-03-01");
        expect(base.addDay(-1).formatDate()).toBe("2019-12-31");
        expect(base.addDay(-35).formatDate()).toBe("2019-11-27");
        expect(base.addDay(-60).formatDate()).toBe("2019-11-02");
        
        expect(base.addMonth(1).formatDate()).toBe("2020-02-01");
        expect(base.addMonth(2).formatDate()).toBe("2020-03-01");
        expect(base.addMonth(12).formatDate()).toBe("2021-01-01");
        expect(base.addMonth(-1).formatDate()).toBe("2019-12-01");
        expect(base.addMonth(-2).formatDate()).toBe("2019-11-01");
        expect(base.addMonth(-12).formatDate()).toBe("2019-01-01");

        expect(base.addYear(1).formatDate()).toBe("2021-01-01");
        expect(base.addYear(2).formatDate()).toBe("2022-01-01");
        expect(base.addYear(12).formatDate()).toBe("2032-01-01");
        expect(base.addYear(-1).formatDate()).toBe("2019-01-01");
        expect(base.addYear(-2).formatDate()).toBe("2018-01-01");
        expect(base.addYear(-12).formatDate()).toBe("2008-01-01");

    });

    

    it("Detects the leap year correctly", () => {
        expect(new VDate("2020-01-01").isLeap()).toBeTruthy()
        expect(new VDate("2021-01-01").isLeap()).toBeFalsy()
        expect(new VDate("2022-01-01").isLeap()).toBeFalsy()
        expect(new VDate("2023-01-01").isLeap()).toBeFalsy()
        expect(new VDate("2024-01-01").isLeap()).toBeTruthy()
    })



    it("Compares date objects correctly", () => {
        let one = new VDate(2020, 1, 1, 20, 20, 20, 100);
        let two = new VDate(2020, 1, 1, 20, 20, 21, 100);

        expect(one.isBefore(two)).toBeTruthy();
        expect(two.isAfter(one)).toBeTruthy();

        expect(two.isBefore(one)).toBeFalsy();
        expect(one.isAfter(two)).toBeFalsy();
    })


    it("Detects an invalid date correctly", () => {
        expect(new VDate("2020-13-01").isValid()).toBeFalsy();
        expect(new VDate("2020-12-01").isValid()).toBeTruthy();
    })


    it("Gets the number of days correctly", () => {
        expect(VDate.getDaysInMonth(2020, 0)).toBe(31);
        expect(VDate.getDaysInMonth(2020, 1)).toBe(29);
        expect(VDate.getDaysInMonth(2021, 1)).toBe(28);
        expect(VDate.getDaysInMonth(2020, 2)).toBe(31);


        expect(VDate.getDayOfYear(new VDate("2020-02-01"))).toBe(32);

        expect(VDate.getDaysInYear(2020)).toBe(366);
        expect(VDate.getDaysInYear(new VDate("2021-01-01"))).toBe(365);
    });


    it("Gets weeks correctly", () => {
        let one = new VDate("2020-01-01").getWeek();

        expect(one.weekNumber).toBe(1);
        expect(one.start.formatDate()).toBe("2019-12-30");
        expect(one.end.formatDate()).toBe("2020-01-05");

        let two = VDate.getWeekByWeekNumber(2, 2020);

        expect(two.weekNumber).toBe(2);
        expect(two.start.formatDate()).toBe("2020-01-06");
        expect(two.end.formatDate()).toBe("2020-01-12");

        let three = VDate.getWeekByWeekNumber(10, 2020);

        expect(three.weekNumber).toBe(10);
        expect(three.start.formatDate()).toBe("2020-03-02");
        expect(three.end.formatDate()).toBe("2020-03-08");

        let four = VDate.getWeekByWeekNumber(52, 2019);

        expect(four.weekNumber).toBe(52);
        expect(four.start.formatDate()).toBe("2019-12-23");
        expect(four.end.formatDate()).toBe("2019-12-29");

        let five = VDate.getWeekByWeekNumber(53, 2020);

        expect(five.weekNumber).toBe(53);
        expect(five.start.formatDate()).toBe("2020-12-28");
        expect(five.end.formatDate()).toBe("2021-01-03");

        let six = VDate.getWeekByWeekNumber(1, 2021);

        expect(six.weekNumber).toBe(1);
        expect(six.start.formatDate()).toBe("2021-01-04");
        expect(six.end.formatDate()).toBe("2021-01-10");

        let seven = new VDate("2020-01-12").getWeek();

        expect(seven.weekNumber).toBe(2);
        expect(seven.start.formatDate()).toBe("2020-01-06");
        expect(seven.end.formatDate()).toBe("2020-01-12");

        let eight = new VDate("2020-01-11").getWeek();

        expect(eight.weekNumber).toBe(2);
        expect(eight.start.formatDate()).toBe("2020-01-06");
        expect(eight.end.formatDate()).toBe("2020-01-12");

        let nine = new VDate("2020-01-10").getWeek();

        expect(nine.weekNumber).toBe(2);
        expect(nine.start.formatDate()).toBe("2020-01-06");
        expect(nine.end.formatDate()).toBe("2020-01-12");

        let ten = new VDate("2020-01-09").getWeek();

        expect(ten.weekNumber).toBe(2);
        expect(ten.start.formatDate()).toBe("2020-01-06");
        expect(ten.end.formatDate()).toBe("2020-01-12");

        let eleven = new VDate("2020-01-08").getWeek();

        expect(eleven.weekNumber).toBe(2);
        expect(eleven.start.formatDate()).toBe("2020-01-06");
        expect(eleven.end.formatDate()).toBe("2020-01-12");

        let twelve = new VDate("2020-01-07").getWeek();

        expect(twelve.weekNumber).toBe(2);
        expect(twelve.start.formatDate()).toBe("2020-01-06");
        expect(twelve.end.formatDate()).toBe("2020-01-12");

        let thir = new VDate("2020-01-06").getWeek();

        expect(thir.weekNumber).toBe(2);
        expect(thir.start.formatDate()).toBe("2020-01-06");
        expect(thir.end.formatDate()).toBe("2020-01-12");

        let fourteen = new VDate("2020-03-01").getWeek();

        expect(fourteen.weekNumber).toBe(9);
        expect(fourteen.start.formatDate()).toBe("2020-02-24");
        expect(fourteen.end.formatDate()).toBe("2020-03-01");

        let fifteen = new VDate("2020-02-29").getWeek();

        expect(fifteen.weekNumber).toBe(9);
        expect(fifteen.start.formatDate()).toBe("2020-02-24");
        expect(fifteen.end.formatDate()).toBe("2020-03-01");

        let sixteen = new VDate("2020-02-28").getWeek();

        expect(sixteen.weekNumber).toBe(9);
        expect(sixteen.start.formatDate()).toBe("2020-02-24");
        expect(sixteen.end.formatDate()).toBe("2020-03-01");

        let seventeen = new VDate("2020-02-27").getWeek();

        expect(seventeen.weekNumber).toBe(9);
        expect(seventeen.start.formatDate()).toBe("2020-02-24");
        expect(seventeen.end.formatDate()).toBe("2020-03-01");

        let eighteen = new VDate("2020-02-26").getWeek();

        expect(eighteen.weekNumber).toBe(9);
        expect(eighteen.start.formatDate()).toBe("2020-02-24");
        expect(eighteen.end.formatDate()).toBe("2020-03-01");

        let nineteen = new VDate("2020-02-25").getWeek();

        expect(nineteen.weekNumber).toBe(9);
        expect(nineteen.start.formatDate()).toBe("2020-02-24");
        expect(nineteen.end.formatDate()).toBe("2020-03-01");

        let twoOne = new VDate("2020-02-24").getWeek();

        expect(twoOne.weekNumber).toBe(9);
        expect(twoOne.start.formatDate()).toBe("2020-02-24");
        expect(twoOne.end.formatDate()).toBe("2020-03-01");

        let twoTwo = new VDate("2020-12-31").getWeek();

        expect(twoTwo.weekNumber).toBe(53);
        expect(twoTwo.start.formatDate()).toBe("2020-12-28");
        expect(twoTwo.end.formatDate()).toBe("2021-01-03");

        let twoThree = new VDate("2021-01-01").getWeek();

        expect(twoThree.weekNumber).toBe(53);
        expect(twoThree.start.formatDate()).toBe("2020-12-28");
        expect(twoThree.end.formatDate()).toBe("2021-01-03");

        let twoFour = new VDate("2021-01-04").getWeek();

        expect(twoFour.weekNumber).toBe(1);
        expect(twoFour.start.formatDate()).toBe("2021-01-04");
        expect(twoFour.end.formatDate()).toBe("2021-01-10");
    })
})