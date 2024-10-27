/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let simpan = init;
    nums.forEach((b, i) => {
        simpan = fn(simpan, b); 
    })
    // console.log(simpan);
    return simpan;
};