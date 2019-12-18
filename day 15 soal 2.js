function gcd (firstNumber, secondNumber) {
    for (var x=firstNumber; x>0; x--){
        if(secondNumber % x === 0 && firstNumber % x===0){
          return x;
        }
    }
}
  
  // TEST CASES
  console.log(gcd(12, 16)); // 4
  console.log(gcd(50, 40)); // 10
  console.log(gcd(22, 99)); // 11
  console.log(gcd(24, 36)); // 12
  console.log(gcd(17, 23)); // 1