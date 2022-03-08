// https://golb.hplar.ch/2017/01/JavaScript-Date-and-moment-js.html
// https://momentjs.com/docs/
var moment = require('moment');
// formas diferentes de construir fechas
const m1 = moment({ y: 2017, M: 0, d: 4, h: 15, m: 10, s: 3, ms: 123}); 
const m2 = moment({ year:2017, month: 0, day: 4, hour: 15, minute: 10, second: 3, millisecond: 123});
const m3 = moment({ years:2017,months: 0,days: 4,hours: 15,minutes: 10,seconds: 3,milliseconds: 123});

const endOfYear1 = moment("2017-12-31"); 
const endOfYear2 = moment("2017-12-31 10:30:26.555"); 

const endOfYear3 = moment("31.12.2017", "DD.MM.YYYY");

const dec = moment([2017, 11, 11, 9, 45])

const week = moment("2022-03-11").week();

const e = moment([2017,0,1,10,5,0]).add({hours: 2, minutes: 10, seconds: 20});

const firstDay = moment([2017,1,12]).startOf('month'); // Wed Feb 01 2017 00:00:00 GMT+0100
const lastDay = moment([2017,1,12]).endOf('month'); // Tue Feb 28 2017 23:59:59 GMT+0100

moment('2017-05-13').isBefore('2017-10-21'); // true
moment('2017-05-13').isAfter('2017-10-21'); // false
moment('2017-05-13').isSame([2017,4,13]); // true
moment('2017-05-13').isBetween('2017-05-01', '2017-05-15'); // true

const w = moment([2017, 1, 1, 15, 10, 10, 90]);
const x = moment([2017, 1, 1, 15, 10, 10, 140]);
const diffInMillis = x.diff(w); // 50

const y = moment([2017, 8, 28]);
const z = moment([2017, 8, 29]);
const diffInDays = z.diff(y, 'days') // 1

const d1 = moment.duration(100); // PT0.1S  100 milliseconds
const d2 = moment.duration(2, 'weeks'); // P14D
const d3 = moment.duration(2, 'months'); // P2M

const d4 = moment.duration({ seconds:7, minutes:7, hours:7, days:7, weeks:7, months:7, years:7 }); 

const d5 = moment.duration('P1Y2M3DT4H5M6S'); // P1Y2M3DT4H5M6S

const ds1 = moment.duration(1, 'minutes').humanize(); // "a minute"
const ds2 = moment.duration(2, 'minutes').humanize(); // "2 minutes"
const ds3 = moment.duration(24, 'hours').humanize(); // "a day"

