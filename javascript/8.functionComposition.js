/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        // console.log(functions);
        for (i = functions.length - 1; i >= 0; i--) {
            // console.log(i);
            // console.log(functions[i]);
            x = functions[i](x);
            // console.log(functions[i](x));
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */