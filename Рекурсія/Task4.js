function climbStairs(n) {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else {
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
}

// Приклади використання:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
