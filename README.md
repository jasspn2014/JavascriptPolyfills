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
Array.prototype.filter2 = function (cb) {
  let arr = [];

  for (let i = 0; i <= this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
};
```

#### Example:

```javascript
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const arr2 = arr.filter((e) => e % 20 === 0);

const arr3 = arr.filter2((e) => e % 20 === 0);

console.log(arr);
console.log(arr2);
console.log(arr3);
```

### 2. Array Deep Clone

#### Array is also an Object so it also copies by reference due to which change in one leads to change in that copy so Deep Clone is used for Nested Arrays.

```javascript
Array.prototype.deepCloneArray = function deepCloneArray() {
  try {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        arr.push(this[i].deepCloneArray());
      } else if (typeof this[i] === "object") {
        arr.push(Object.deepClone(this[i]));
      } else {
        arr.push(this[i]);
      }
    }
    return arr;
  } catch (e) {
    throw new Error("Something Went Wrong");
  }
};
```

#### Example:

```javascript
// Creating
```

### 4. Deep Clone Object

#### Deep Cloning a Object.

```javascript
Object.prototype.deepClone = function deepClone(obj) {
  if (typeof obj === "object") {
    let clone = {};
    for (let i of Object.keys(obj)) {
      if (Array.isArray(obj[i])) {
        clone[i] = obj[i].deepCloneArray();
      } else if (typeof obj[i] === "object") {
        clone[i] = deepClone(obj[i]);
      } else {
        clone[i] = obj[i];
      }
    }
    return clone;
  } else {
    throw new Error("Type Error: Passed parameter is not an Object");
  }
};
```

#### Example:

```javascript
// Creating
```
