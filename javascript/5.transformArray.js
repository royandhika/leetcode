/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var arrBaru = []
    arr.forEach((b, i) => { 
        arrBaru.push(fn(b, i));
    });
    // console.log(arr); // [1,2,3]
    // console.log(arrBaru); // [2,3,4]
    return arrBaru;
};


/*
forEach punya 2 parameter, (value, index)
*/
