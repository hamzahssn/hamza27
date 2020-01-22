function numberIterator(num) {
    if (num === 0){
        return num;
    }
    return numberIterator(num-1) + "" + num   //    ''+0+         ''+1+   ''+2+           ''+3+       ""+ 4 +    ''+5
}

// TEST CASES
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'


function countLetters (word, letter) {
    var count = 0 // 1
    var newWord = word.slice(1) // 104123
    
    if(word.length === 0){
        return count
    }
    if(word[0] === letter){ // 2 === 1
        count++
    }
    return count + countLetters(newWord, letter) // 1 + 0 + 1 + 0 + 0 + 1+ 0 + 0 + 0
}

// TEST CASES
console.log(countLetters('12104123', '1'));  // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); // 3





function isPalindrome(string){
    let str = string.length
    if (str === 0 || str === 1){
        return true
    }
    if(string[0] === string[str - 1]){
        return isPalindrome(string.slice(1, str - 1))
    }
    return false
}

console.log(isPalindrome('makam'))
console.log(isPalindrome('malam')) // 'malam'
console.log(isPalindrome('mamlam')) // 'malmam'
// console.log(isPalindrome(212)) // 212
// console.log(isPalindrome(214)) // 412

function palindrome(keyword){
    if(typeof keyword == "number"){
        keyword = keyword.toString()
    }
    if(keyword.length === 1){
        return keyword
    }
    return keyword.slice(-1) + palindrome(keyword.slice(0,-1))
}

console.log(palindrome(212))
console.log(palindrome(214))

function palindromeTwo(keyword){
    if(typeof keyword == "number"){
        keyword = keyword.toString()
    }
    if(keyword.length === 1){
        return true
    }
    if(keyword[0] == keyword[keyword.length-1]){
        return palindromeTwo(keyword.slice(1,-1))
    }
    return false
}

console.log(palindromeTwo(212))
console.log(palindromeTwo(214))


