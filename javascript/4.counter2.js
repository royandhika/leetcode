
var createCounter2 = function(init) {
    let present = init;
    return {
        increment:()=> ++present,
        decrement:()=> --present,
        reset:()=> present = init,
    }
    // return {
    //     increment : () => {
    //         return ++n
    //     },
    //     reset : () => {
    //         n = init
    //         return n
    //     },
    //     decrement : () => {
    //         return --n
    //     },
    // }
};

const counterDari2 = createCounter2(2);
// nilaiN5 = createCounter2(5);
// console.log(nilaiN2);
console.log(counterDari2.decrement());
console.log(counterDari2.increment());
// console.log(counterDari2.reset());