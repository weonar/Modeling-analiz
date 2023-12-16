function fibonacci(n, a = 2, b = 1) {
    if (n === 0) {
        return a;
    } else {
        return fibonacci(n - 1, b, a + b);
    }
}

// Приклади використання:
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3
