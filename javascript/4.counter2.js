
var createCounter2 = function(n) {
    init = n
    // console.log(init)
    return {
        increment : () => {
            n++
            // console.log("init" + init)
            // console.log("n" + n)
            return n
        },
        reset : () => {
            n = init
            return n
        },
        decrement : () => {
            n--
            return n
        },
    }
};

const counterDari2 = createCounter2(2);
// nilaiN5 = createCounter2(5);
// console.log(nilaiN2);
console.log(counterDari2.increment());
console.log(counterDari2.reset());
console.log(counterDari2.decrement());