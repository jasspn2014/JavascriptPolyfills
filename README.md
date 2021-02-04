# JavascriptPolyfills

## Polyfill 1

### Array.map() ---> Array.map2()

#### Whenever user call this method it will automatically call the callback function

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
