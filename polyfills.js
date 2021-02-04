Array.prototype.map2 = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }

  return arr;
};

// 2. Array.filter() - Filter on basis of true or false

Array.prototype.filter2 = function () {
  let arr = [];

  for (let i = 0; i <= this.length; i++) {
    if (cb(item, index, arr)) {
      arr.push(item);
    }
  }

  return arr;
};


// 3. Making Own JSON.stringify()

Object.prototype.stringify = function (obj) {
  let str = "{";
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      str += `"${key}":` + stringify(obj[key]);
    } else if (typeof obj[key] !== "function") {
      str += `"${key}":"${obj[key]}",`;
    }
  }

  str += "}";
  return str;
};

//4. Deep Clone a Array 

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


// 5. Deep Clone a Object

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
