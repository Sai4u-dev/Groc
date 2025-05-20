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
console.log(fib(5));

/*
**
***
*****
********
*/
function printStarsRecursion(num) {
    if (num === 0) {
        return;
    }
    printStarsRecursion(num - 1);
    console.log("* ".repeat(num));
}
printStarsRecursion(4);


// fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21
// 1 -> 0
// 2 -> 1
// 3 -> 1
// 4 -> 2
// 5 -> 3   
function fin(num) {
    if (num === 1) return 1;
    if (num === 2) return 1;
    return fin(num - 1) + fin(num - 2);
}
console.log(fin(5)); // 3function fin(num) {
    if (num === 1) return 1;
    if (num === 2) return 1;
    return fin(num - 1) + fin(num - 2);
}
console.log(fin(5)); // 3