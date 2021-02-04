import loadPolyfills from './polyfills.js';
loadPolyfills();

const arr = [10,20,30,40,50,60];

const arr2 = arr.map(e => e*2);

console.log(arr);
console.log(arr2);

const arr3 = arr.map2(e => e*2);

console.log(arr3);



