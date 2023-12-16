function myPow(x, n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 1 / myPow(x, -n);
    } else {
        if (n % 2 === 0) {
            const halfPow = myPow(x, n / 2);
            return halfPow * halfPow;
        } else {
            return x * myPow(x, n - 1);
        }
    }
}

// Приклади використання:
console.log(myPow(2.00000, 10)); // Output: 1024.00000
console.log(myPow(2.10000, 3));  // Output: 9.26100
console.log(myPow(2.00000, -2)); // Output: 0.25000
