function* take(length, iterable) {
  for (let x of iterable) {
    if (length <= 0) return;
    length--;
    yield x;
  }
}

function* primes() {
  let n = 2;

  while (true) {
    if (isPrime(n)) yield n;
    n++;
  }

  function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log([...take(5, primes())]);