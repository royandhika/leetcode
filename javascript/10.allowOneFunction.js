/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    // console.log(fn(2, 3, 5));
    let hasil = 0;
    let calls = 0;
    return function(...args){
        // hasil = fn(args[0], args[1], args[2]);
        if (calls === 0) {
            hasil = fn(...args);
            calls++;
            return hasil
        }
        // console.log(...args);
        // console.log(hasil);
        // console.log(calls);
;    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
