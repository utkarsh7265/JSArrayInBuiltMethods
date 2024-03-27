// array.every 
Array.prototype.EverY = function (func) {
    for (let i = 0; i < this.length; i++) {
        let z = func(this[i]);
        console.log(this[i])
        if (!z) {
            return false
        }
    }
    return true
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
function foo(x) {
    return x > 10
}
// console.log(array.EverY(foo));

// array.push 
Array.prototype.PUsH = function (...elements) {
    let len = this.length;
    for (let i = 0; i < elements.length; i++) {
        this[len + i] = elements[i];
    }
    return this
}
// console.log("PUSH",array.PUsH(9,10,11,12))

// array.pop 
Array.prototype.PoP = function () {
    let len = this.length;

    this[len - 1] = undefined;
    this.length = len - 1;
    return this
}
// console.log("POP",array.PoP())

// array.at 
Array.prototype.AT = function (index) {
    return this[index]
}
// console.log("AT",array.AT(3))

// array.concat 
Array.prototype.ConCat = function (arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Not an Array.")
    }

    for (let i = 0; i < arr.length; i++) {
        this.PUsH(arr[i])
    }

    return this
}
// console.log("CONCAT", array.ConCat([9, 10, 11, 12, 13]))

// array.copywithin 
Array.prototype.CopyWithiN = function (start, target) {
    if (typeof (start) != "number" || typeof (target) != "number") {
        throw new Error("Argument should be a number");
    }

    let newArr = this;
    newArr[start] = newArr[target];

    return newArr;
}
// console.log("CopyWithin", array.CopyWithiN(1,2))

// array.fill 
Array.prototype.Fill = function (fillElement, start = 0, end = this.length) {
    for (let i = start; i < end; i++) {
        console.log(i)
        this[i] = fillElement;
    }
    return this;
}
// console.log("FILL", array.Fill(0, 2))

// array.filter 
Array.prototype.Filter = function (func) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        let z = func(this[i]);
        if (z) {
            arr.PUsH(this[i]);
        }
    }

    return arr;
}
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// console.log("Filter",words.Filter((word) => word.length > 6))

// array.find 
Array.prototype.FinD = function (func) {
    for (let i = 0; i < this.length; i++) {
        let z = func(this[i]);
        if (z) {
            return this[i];
        }
    }
    return undefined
}
// console.log("Find", array.FinD((word) => word > 10))

// array.findIndex 
Array.prototype.FinDIndeX = function (func) {
    for (let i = 0; i < this.length; i++) {
        let z = func(this[i]);
        if (z) {
            return i;
        }
    }
    return -1
}
// console.log("FindIndex", array.FinDIndeX((word) => word > 7))

// array.findLast 
Array.prototype.FindLasT = function (func) {
    for (let i = this.length; i > 0; i--) {
        let z = func(this[i]);
        if (z) {
            return this[i];
        }
    }
    return undefined
}
// console.log("FinDLasT",array.FindLasT((word) => word > 10))

// array.findLastIndex 
Array.prototype.FindLasTIndeX = function (func) {
    for (let i = this.length; i > 0; i--) {
        let z = func(this[i]);
        if (z) {
            return i;
        }
    }
    return -1
}
// console.log("FinDLasTIndeX",array.FindLasTIndeX((word) => word > 1))

// array.includes 
Array.prototype.IncludeS = function (ele) {
    for (let i = 0; i < this.length; i++) {
        if (ele == this[i]) {
            return true
        }
    }
    return false
}
// console.log("Includes",array.IncludeS(10))

// array.IndexOf 
Array.prototype.IndexoF = function (element, startIndex = 0) {
    for (let i = startIndex; i < this.length; i++) {
        if (this[i] == element) {
            return i;
        }
    }
    return -1
}
// console.log("IndexOf", array.IndexoF(10))

// array.join 
Array.prototype.JoiN = function (separator = ',') {
    let str = "";
    for (let i = 0; i < this.length; i++) {
        if (i == 0) {
            str = str + this[i];
        }
        else {
            str = str + separator + this[i];
        }
    }

    return str;
}
// console.log("JOIN", array.JoiN('-'))

// array.lastIndexOf
Array.prototype.LastIndexOf = function (element) {
    for (let i = this.length; i > 0; i--) {
        if (element == this[i]) {
            return i
        }
    }
    return -1
}
// console.log("LastIndexOf", array.LastIndexOf(1))

// array.map
Array.prototype.MAP = function (func) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.PUsH(func(this[i]));
    }

    return newArr;
}
// console.log("MAP",array.MAP((x) => x * 2))

// array.reverse
Array.prototype.Reverse = function () {
    for (let i = 0; i < this.length / 2; i++) {
        let a = this[i];
        this[i] = this[this.length - i - 1];
        this[this.length - i - 1] = a;
    }

    return this;
}
// console.log("Reverse", array.Reverse());

// array.shift
Array.prototype.Shift = function () {
    let first = this[0];
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }

    this.length = this.length - 1;

    return first;
}
// console.log("Shift", array.Shift());

// array.slice
Array.prototype.Slice = function (start = 0, end = this.length) {
    let arr = [];
    for (let i = start; i < end; i++) {
        arr.PUsH(this[i]);
    }

    return arr;
}
// console.log("Slice", array.Slice(2,4))

// array.some
Array.prototype.Some = function (func) {
    for (let i = 0; i < this.length; i++) {
        if(func(this[i])){
            return true
        }
    }

    return false
}
// console.log("Some", array.Some((element) => element % 2 === 0));