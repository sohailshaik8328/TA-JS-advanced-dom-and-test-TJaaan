let lodash = require("lodash");

let arr = ["1", "2", "3", "4"];

let chunked = lodash.chunk(arr, 3);
console.log(chunked);


const moment = require("moment");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

let addedDays = moment().add(7, 'days').calendar();
let addedMonths = moment().add(7, 'months').calendar();
let addedYears = moment().add(7, 'years').calendar();

let subtractedDays = moment().subtract(7, 'days').calendar();
let subtractedMonths = moment().subtract(7, 'months').calendar();
let subtractedYears = moment().subtract(7, 'years').calendar();

console.log(addedDays);
console.log(addedMonths);
console.log(addedYears);

console.log(subtractedDays);
console.log(subtractedMonths);
console.log(subtractedYears);

let difference_date_one = lodash.difference([2014-11-11, 2015-09-11]);
console.log(difference_date_one); 

let difference_date_two = lodash.difference([2014-11-27, 2015-09-16]);
console.log(difference_date_two); 



