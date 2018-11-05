var foo = [1, 2, 3, [4, 5, 6, [7, 8, 9, [0]]]];

/* 1. Use recursion */

function flat1(arr, cur) {
    cur = cur === undefined ? [] : cur;
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) { 
            flat1(arr[i], cur);
        }
        else {
            cur.push(arr[i]);
        }
    }
    return cur;
}

console.log(flat1(foo)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

/* 2. Recursion + method reduce*/

function flat2(arr) {

    if (Array.isArray(arr)) { //or arr.splice
        return arr.reduce(function (acc, cur) {
            return acc.concat(Array.isArray(cur) ? flat2(cur) : (cur))
        }, []);
    }
}
console.log(flat2(foo)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

/* 3. Method splice*/

function flat3(arr) {
    var res = arr.slice();
    var i = 0;

    while (i < res.length) {
        if (Array.isArray(res[i])) {
            res.splice(i, 1, ...res[i]);
        }
        else {
            i++;
        }
    }
    return res;
}
console.log(flat3(foo)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

/* 4. Method flat (we are in 2018) */

function flat4(arr) {
    return arr.flat(Number.POSITIVE_INFINITY);
}

console.log(flat4(foo)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]



