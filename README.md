# VDate
Vieolo's Custom JS Date class.
`VDate` is an extension of the standard javascript `Date` class.

<br>

## Install

```bash
npm install @vieolo/vdate
```

<br>

## Usage
In the target package, the class can be imported as followed
```JS
import VDate from '@vieolo/vdate';

let now = new VDate();
```

`VDate` is an extension of the native javascript `Date` class. So, the behavior of `VDate` is completely similar to that of native `Date`.

`VDate` gives you the benefit of extra functionalities, both as instance methods and static functions.

<br>

## Static properties

##### `monthNamesShort`
Names of the english months in the short form. e.g. `Jan`

##### `monthNamesLong`
Names of the english months in the long form. e.g. `January`

##### `weekDayShort`
Names of the english week days in the short form starting from sunday, matching the index of the week days in JS. e.g. `Su`

##### `weekDayLong`
Names of the english week days in the long form starting from sunday, matching the index of the week days in JS. e.g. `Sunday`


<br>

## Static function

##### `countDown()`
Formats the difference between now (can be changed) to the given targe time. 

##### `getTimeFromMinuteCount()`
Formats the minute count. For example, 80 is converted to "1h 20m"

##### `getMinutesInDay()`
Gets the number of minutes passed date according to local time. For example, at 1:15 am, you'll get 75.

##### `getDaysInMonth()`
Gets the number of days in a given month.

##### `getDayOfYear()`
Returns the number of the given day in the year. For example, 10th February is the 41st day of the year. If no date is provided, the current day is used.

##### `getDaysInYear()`
Returns the total number of days in a given year. A normal year will return 365 and a leap year will return 366.

##### `getWeekByWeekNumber()`
Returns the data of a week by its number.


<br>

## Intance methods

#### `setToDateStart()`
Returns a new instance of `VDate` set to start of the day. (00:00)
```ts
let dayStart = new VDate().setToDateStart();
```

##### `setToDateEnd()`
Returns a new instance of `VDate` set to end of the day. (23:59)
```ts
let dayEnd = new VDate().setToDateEnd();
```

##### `setToMonthStart()`
Returns a new instance of `VDate` set to start of the month.
```ts
let monthStart = new VDate().setToMonthStart();
```

##### `setToMonthEnd()`
Returns a new instance of `VDate` set to end of the month.
```ts
let monthEnd = new VDate().setToMonthEnd();
```

##### `setToYearStart()`
Returns a new instance of `VDate` set to start of the year. (Jan 1st)
```ts
let yearStart = new VDate().setToYearStart();
```

##### `setToYearEnd()`
Returns a new instance of `VDate` set to end of the month. (Dec 31st)
```ts
let yearEnd = new VDate().setToYearEnd();
```

##### `formatTime()`
Formats the time of the `VDate` instance. e.g. 10:25 am

##### `formatDate()`
Formats the date of the `VDate` instance. You can pass the language to get the localized name of the month. The available formats are:

- `yyyy-mm-dd`      : 2022-02-24 (default)
- `dd/mm/yyyy`      : 24/02/2022
- `dd.mm.yyyy`      : 24.02.2022
- `mm/dd/yyyy`      : 02/24/2022
- `mon dd, yyyy`    : Feb 2, 2022
- `month dd, yyyy`  : February 2, 2022

```ts
let one = new VDate().formatDate(); // 2020-10-25
let two = new VDate().formatDate("dd/mm/yyyy"); // 25/10/2020
```

##### `formatDateTime()`
Formats the date and time of the `VDate` instance. You can pass the language to get the localized name of the month. e.g. 20/10/2020 10:25 am

##### `formatMonth()`
Formats the month and year of the `VDate` instance. You can pass the language to get the localized name of the month. e.g. June 2019


##### `addSecond()`
Returns a new instance of `VDate` instance with the added seconds.

##### `addMinute()`
Returns a new instance of `VDate` instance with the added minutes.

##### `addHour()`
Returns a new instance of `VDate` instance with the added hours.

##### `addDay()`
Returns a new instance of `VDate` instance with the added days.

##### `addMonth()`
Returns a new instance of `VDate` instance with the added months.

##### `addYear()`
Returns a new instance of `VDate` instance with the added years.

##### `isLeap()`
Returns true if the year of the `VDate` instance is a leap year.

##### `isAfter()`
Compares the instance of `VDate` with another one.

##### `isBefore()`
Compares the instance of `VDate` with another one.

##### `isOnSameDay()`
Checks if the instance of `VDate` is on the same day as the other one

##### `isValid()`
Checks the validity of the instance.

##### `getWeek()`
Gets the data of the week of the instance. The return object contains the following:

- start: VDate -> start date of the week
- end: VDate -> end date of the week
- weekNumber: number -> the number of the week in the year (Based on ISO)

##### `getMonthName()`
Gets the short or long format of the name of the month (default: long). You can set the language to get the name of the month in the target language (default: "EN")

##### `getDayName()`
Gets the short or long format of the name of the weekday (default: long) You can set the language to get the name of the weekday in the target language (default: "EN")

##### `getQuarter()`
Gets the number of the quarter of the date


<br>

## Other standalone utility functions


##### `dateDuration()`
Calculates the difference between the two given dates. The function returns a duration object that provides the difference in different time frames.

The default duration object presents the total difference in all time frames independently. e.g.
```ts
import { dateDuration } from "@vieolo/vdate";

// Both Date and VDate can be used
// Here, the two dates have a 25 hours and 10 minutes difference
let o = new VDate(2020, 0, 1, 1, 1);
let t = new Date(2020, 0, 2, 2, 11); 

let duration = dateDuration(o, t);

// Result:
// {    
//     minutes: 1510
//     hours: 25,
//     days: 1
//     months: 0
//}
```

This function also receives a third optional boolean to normalize the duration object. When normalized, the duration become human readable. e.g.


```ts
import { dateDuration } from "@vieolo/vdate";

// Similar to the example above, the two dates have a 25 hours and 10 minutes difference
let o = new VDate(2020, 0, 1, 1, 1);
let t = new Date(2020, 0, 2, 2, 11); 

// Passing the third boolean will normalize the difference to 1 day, 1 hour, and 10 minutes.
let duration = dateDuration(o, t, true);

// Result:
// {    
//     minutes: 10
//     hours: 1,
//     days: 1
//     months: 0
//}
```