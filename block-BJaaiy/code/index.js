let lodash = require("lodash");

let arr = ["1", "2", "3", "4"];

let chunked = lodash.chunk(arr, 3);
console.log(chunked);
