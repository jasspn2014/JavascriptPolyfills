# JavascriptPolyfills

## Polyfills for Some Known Functions

### 1. Array.map() ---> Array.map2()

#### Everything in Javascript Except Primitive Datatype is an Object and Object is Copied using Reference So Due to this Change in One Object Reflects in other so We need to create a Copy. Array.map() function is used to create shallow copy of the array.

```javascript
Array.prototype.map2 = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }

  return arr;
};
```

#### Example:

```javascript
import loadPolyfills from "./polyfills.js";
loadPolyfills();

const arr = [10, 20, 30, 40, 50, 60];

const arr2 = arr.map((e) => e * 2);

console.log(arr);
console.log(arr2);

const arr3 = arr.map2((e) => e * 2);

console.log(arr3);
```

### 2. Array.filter() ---> Array.filter2()

#### Array.filter() returns the elements on the basis of boolean returned in callback function. If true returns else not.

```javascript
Array.prototype.filter2 = function () {
  let arr = [];

  for (let i = 0; i <= this.length; i++) {
    if (cb(item, index, arr)) {
      arr.push(item);
    }
  }

  return arr;
};
```

#### Example:

```javascript
import loadPolyfills from "./polyfills.js";
loadPolyfills();

const arr = [10, 20, 30, 40, 50, 60];

const arr2 = arr.filter((e) => e % 20 === 0);

const arr3 = arr.filter((e) => e % 20 === 0);

console.log(arr);
console.log(arr2);
console.log(arr3);
```
