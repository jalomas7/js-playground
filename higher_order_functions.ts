const addN = (n: number) => (x: number) => {
    return n + x;
}

const addTwoSimple = (x) => {
    return 2 + x;
}

const addTwo = addN(2); // addTwo == addTwoSimple == addN(2)
const addFive = addN(5);

console.log(addTwoSimple(10)) // expect 12
console.log(addTwo(10)) // expect 12
console.log(addFive(10)) // expect 15
console.log(addN(6)(10)) // expect 16