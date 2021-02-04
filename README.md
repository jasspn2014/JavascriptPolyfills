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

### 3. Array Deep Clone

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

#### Example (Shallow Copy):

```javascript
let arr = [10, 20, 30, 40, 50, [100, 110, 120, 130, 140, [200, 210, 220, 230, 240]]];

let arr2 = arr.map2((e) => e);

console.log(arr); // 10,20,30,40,50,[100,110,120,130,140,[200,210,220,230,240]]
console.log(arr2); // 10,20,30,40,50,[100,110,120,130,140,[200,210,220,230,240]]

arr[0] = 1000;
arr[5][0] = 2000;
arr[5][5][0] = 3000;

console.log(arr); // 1000,20,30,40,50,[2000,110,120,130,140,[3000,210,220,230,240]]
console.log(arr2); // 10,20,30,40,50,[2000,110,120,130,140,[3000,210,220,230,240]]
```

#### Due to this shallow Copy change in any nested array will reflect in all copies as you can see in the output first arr[0] is not changed in arr2 but rest are so to avoid this we need a solution for deepcopying.

#### Example (Deep Copy):

```javascript
let arr = [10, 20, 30, 40, 50, [100, 110, 120, 130, 140, [200, 210, 220, 230, 240]]];

let arr2 = arr.deepCloneArray();

console.log(arr); // 10,20,30,40,50,[100,110,120,130,140,[200,210,220,230,240]]
console.log(arr2); // 10,20,30,40,50,[100,110,120,130,140,[200,210,220,230,240]]

arr[0] = 1000;
arr[5][0] = 2000;
arr[5][5][0] = 3000;

console.log(arr); // 1000,20,30,40,50,[2000,110,120,130,140,[3000,210,220,230,240]]
console.log(arr2); // 10,20,30,40,50,[100,110,120,130,140,[200,210,220,230,240]]
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

#### Example (Shallow Copy):

```javascript
let emp = {
  fname: "Jasmeet",
  lname: "Singh",
  address: {
    lines: {
      line1: "abcd",
      line2: "efgh",
    },
    city: "wxyz",
    state: "Maharashtra",
    country: "India",
  },
  contact: ["9876543210", "6123457890", "8123456790"],
};

let emp2 = emp; // Copied by Reference So change in one will reflect change in other

let emp3 = Object.assign({}, emp); // Shallow Copy So change in address property will be affected


emp.address.state = "Uttar Pradesh";
console.log(emp);
console.log(emp3);
```

#### Due to this shallow Copy change in any nested Object will reflect in all copies as you can see in the output first.
![Image of Yaktocat](https://github.com/jasspn2014/JavascriptPolyfills/images/shallowop.png)

#### Example (Deep Copy):

```javascript
let emp = {
  fname: "Jasmeet",
  lname: "Singh",
  address: {
    lines: {
      line1: "abcd",
      line2: "efgh",
    },
    city: "wxyz",
    state: "Maharashtra",
    country: "India",
  },
  contact: ["9876543210", "6123457890", "8123456790"],
};


let emp4 = Object.deepClone(emp);
emp.address.state = "Uttar Pradesh";

console.log(emp);
console.log(emp4);
```
#### Output for Deep Copy
![Image of Yaktocat](https://github.com/jasspn2014/JavascriptPolyfills/images/deepop.png)

