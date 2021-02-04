# JavascriptPolyfills

## Polyfill 1
### Array.map() ---> Array.map2()

```javascript
Array.prototype.map2 = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }

  return arr;
};


```