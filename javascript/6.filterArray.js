/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var arrBaru = [];
    arr.forEach((b, i) => {
        // if (fn(b, i) === true || fn(b, 1) !== 0) {
        if (Boolean(fn(b, i)) === true) {
            // console.log(b);
            arrBaru.push(b);
        }
    })
    return arrBaru;
};

