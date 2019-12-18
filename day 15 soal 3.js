function isPrime (number) {
    for(var x=2; x<number; x++){
        if(number % x === 0){
          return false;
        } 
    }
    return true;
}
  
// TEST CASES
console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false