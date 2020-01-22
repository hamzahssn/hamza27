// palindrome kata


function isPalindromeString(palindrome){
    var str = ''
    var flag = false
    for (i=palindrome.length-1; i>=0; i--){
        str += palindrome[i]
    }
    if (str === palindrome){
        flag = true

    }
    return flag
}
console.log(isPalindromeString('katak')) //true
console.log(isPalindromeString('racecar')) //true
console.log(isPalindromeString('kocak')) //false
console.log(isPalindromeString("1001"))

