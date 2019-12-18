// function convertHour(jam){
//     console.log(jam%12)
// }
// convertHour(18)




// buat sebuah fungsi count word inside string
// parameter 1 => keyword yang mau dihitung
// parameter kedua => target string

// let keyword = "a"
// let word = "ayayayayayayayayayaya"

// function countWord(word,keyword){
//     let count = 0
//     for (i=0;i<word.length;i++){
//         if (word[i] === keyword)
//         count += 1
//     }
//     return count
// }
// console.log(countWord(word,keyword))



function sum(num1,num2){
    return num1+num2
}

let multiplier = (kali,num1,num2)=>{
    return kali*sum(num1,num2)
}

let divideNum = function(divider,num1,num2,num3){
    return multiplier(num1,num2,num3)/divider
}
console.log(divideNum(2,5,20,10))