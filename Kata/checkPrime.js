// Check for prime numbers (7Kyu)


function isPrime(n) {
    for (let i = 2; i * i <= n; i++)
        if (n % i === 0)
          return false; 
    return n > 1;
}
