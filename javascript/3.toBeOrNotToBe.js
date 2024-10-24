/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
    return {

        toBe : (notVal) => {
            if (val === notVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },

        notToBe : function(notVal) {
            if (val === notVal) throw new Error('Equal'); 
            else return true;
        },
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(4).toBe(4));
console.log(expect(4).toBe(5));
console.log(expect(4).notToBe(5));
console.log(expect(4).notToBe(4));