var password = 'test w';
// var noSpaces = removeSpaces(password); // testw
// var reversed = reverseText(noSpaces); // wtset
// var encryptedPassword = updateVowels(reversed); // wtsft

function removeSpace(password){
    var string =""
    for (i=0; i<password.length; i++){
        if (password[i] !== " "){
            string += password[i]
        }
        
    }
    return string
}
var noSpace = removeSpace(password)

function reverseText(noSpace){
    var string = ""
    for (i=noSpace.length-1; i>-1;i--){
      string += noSpace[i]
    }
    return string
}
var reversed = reverseText(noSpace)

function updateVowels(reversed){
    var string = ""
    var vowels = "aiueo"
    for (i=0; i<reversed.length; i++){
        flag = false
        for (j=0; j<vowels.length; j++){
            if(reversed[i] === vowels[j]){
                flag = true
                if (vowels[j] === 'a'){
                    string += 'b'
                }
                if (vowels[j] === 'i'){
                    string += 'j'
                }
                if (vowels[j] === 'u'){
                    string += 'v'
                }
                if (vowels[j] === 'e'){
                    string += 'f'
                }
                if (vowels[j] === 'o'){
                    string += 'p'
                }
            }
        }
        if (flag == false){
            string += reversed[i]
        }
        console.log(reversed[i])
    }
    return string
}
console.log(updateVowels(reversed))