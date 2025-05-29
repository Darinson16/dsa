let c1 = 0;
function fibonacciRecursive(n) {
  c1++;
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

//

let c = 0;
function fibonacci() {
  let cache = {};

  return function fib(n) {
    c++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) return n;
      else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const a = fibonacci();
const d = a(20);
const d1 = fibonacciRecursive(20);
console.log({ c, d });
console.log({ c1, d1 });
