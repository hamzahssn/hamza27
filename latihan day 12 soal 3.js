const password = 'test123' 
const pin = '1234567'

// bikin sebuah function includeAlphabet(string)

// includeAlphabet(password) // outputnya akan true
// includeAlphabet(pin) // outputnya akan false

function includeAlphabet(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let output = false
    for (i=0; i<string.length; i++){
        for (j=0; j<alphabet.length; j++){
            if (string[i] == alphabet[j]){
                output = true
            }
        }
    }
    return output
}

console.log(includeAlphabet('12test'))