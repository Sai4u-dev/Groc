function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example: Print first 10 Fibonacci numbers
console.log(fibonacci(9));

function palindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
// Example: Check if a string is a palindrome
console.log(palindrome("hello")); // false
console.log(palindrome("racecar")); // true
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
// Example: Calculate factorial of 5
console.log(factorial(5)); // 120