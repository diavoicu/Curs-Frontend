//1.
const numbers = [1, 2, 3];
let sum = 0;
let result = 0;

for (let number of numbers) {
    sum += number;
}

result = sum / numbers.length;

console.log("Media aritmetica = ", result);


//2.
const randomArray = [2, 3, "string", "boolean", -3, true, "false", undefined, null];

const sum2 = randomArray.reduce((acc, value) => {
    if (typeof value === "number") {
        console.log(acc);
        return acc + value;
    }

    return acc;
}, 0);

console.log(sum2);

//BONUS
function fibonacci(fibLength) {
    const fib = [0, 1];

    while (fib.length < fibLength) {
        fib.push(fib[fib.length - 2] + fib[fiblength - 1]);
    }

    return fib;
}

console.log(fibonacci(3));