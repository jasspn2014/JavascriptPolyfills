import loadPolyfills from "./polyfills.js";
loadPolyfills();

/* 1. Array.map()

const arr = [10, 20, 30, 40, 50, 60];

const arr2 = arr.map((e) => e * 2);

const arr3 = arr.map2((e) => e * 2);

console.log(arr);
console.log(arr2);
console.log(arr3);

*/

/* 2. Array. filter
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const arr2 = arr.filter((e) => e % 20 === 0);

const arr3 = arr.filter2((e) => e % 20 === 0);

console.log(arr);
console.log(arr2);
console.log(arr3);
*/



// let arr = [10,20,30,40,50,[100,110,120,130,140,[200,210,220,230,240]]];

// let arr2 = arr.map2(e => e);

// console.log(arr);
// console.log(arr2);

// arr[0] = 1000;
// arr[5][0] = 2000;
// arr[5][5][0] = 3000;


// console.log(arr);
// console.log(arr2);



let arr = [10,20,30,40,50,[100,110,120,130,140,[200,210,220,230,240]]];

let arr2 = arr.deepCloneArray();

console.log(arr);
console.log(arr2);

arr[0] = 1000;
arr[5][0] = 2000;
arr[5][5][0] = 3000;


console.log(arr);
console.log(arr2);