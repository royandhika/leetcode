// let conTol = 0;
// conTol++
// console.log(conTol)

// var createCounter = function(n) {
//     n++
//     console.log(n)
// }

// createCounter(2);
// createCounter(3);


function createCounter2(n) {
// var createCounter2 = function(n) {
    return function() {
        return n++
    };
    // return () => n++
};

iniSebenernyaVariabel = createCounter2(2);
// nilaiN5 = createCounter2(5);
// console.log(nilaiN2);
console.log(iniSebenernyaVariabel());
console.log(iniSebenernyaVariabel());
console.log(iniSebenernyaVariabel());
// console.log(createCounter2(2).apply());
// console.log(createCounter2(2).apply());