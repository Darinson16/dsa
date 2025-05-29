function findFactorialRecursive(n) {
  if (n === 2) return 2;
  console.log(n);

  return n * findFactorialRecursive(n - 1);
}

function findFactorialIterative(n) {
  let i = 2;
  let number = 1;

  while (i <= n) {
    number *= i;
    i++;
  }

  return number;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));

function fibonacciIterative(n) {
  if (n <= 1) return n;

  let prev1 = 0;
  let prev2 = 1;

  for (let i = 2; i <= n; ++i) {
    let curr = prev2 + prev1;
    prev1 = prev2;
    prev2 = curr;
  }

  return prev2;
}

function fibonacciRecursive(n) {
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
