let number = 3;
const traverse = (num) => {
    if (num === 0) {
        console.log("Base case reached");
        return;
    }
    console.log("Current number:", num);
    return traverse(num - 1);
}
traverse(number);


function factorial(num, total) {
    if (num === 0) {
        return total;
    }
    return factorial(num - 1, num * total);
}
const num = 5;
console.log("Factorial of", num, "is ", factorial(5, 1));


function sumOfNums(sum) {
    if (sum) {
        return (sum * (sum + 1)) / 2;
    }
    return sumOfNums(sum - 1);
}
const number1 = 4
console.log("The Sum of", number1, 'is', sumOfNums(number1));

function fib(num) {
    if (num === 0 || num === 1) return num;
    return fib(num - 1) + fib(num - 2);
}
console.log(fib(4));
