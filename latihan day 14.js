//  masukan sebuah password
//  jika huruf pertamanya bukan capital return false
//  jika huruf pertama capital return true




function includeAlphabet(string){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
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

console.log(includeAlphabet('Test'))