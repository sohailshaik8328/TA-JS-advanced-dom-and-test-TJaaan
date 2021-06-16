let lodash = require("lodash");

let arr = ["1", "2", "3", "4"];

let chunked = lodash.chunk(arr, 3);
console.log(chunked);


const moment = require('moment');

moment().format('MMMM Do YYYY, h:mm:ss a');
