// var arrMultidimensi = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13],[14,15],[16,17,18]]

// output [1,2,3,4,5] x 5
// for (var i=0; i<arrMultidimensi.length; i++) {
//     console.log(arrMultidimensi[0])
// }    
    
    
    
    
// output 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
// for (i=0;i<arrMultidimensi.length;i++){
//     for (j=0; j<arrMultidimensi[i].length; j++){
//         console.log(arrMultidimensi[i][j])
//     }
// }

// var people = [
//     [1, 'Dimitri', 'Hacktiv8'],
//     [2, 'Dhani', 'Hacktiv8'],
//     [3, 'Icha', 'Hacktiv8']
//     ];

// // ID: 1 Name: Dimitri Company: Hacktiv8
// // ID: 2 Name: Dhani Company: Hacktiv8
// // ID: 3 Name: Icha Company: Hacktiv8

// for (i=0; i<people.length; i++){
//     console.log(`ID: ${people[i][0]} Name: ${people[i][1]} Company: ${people[i][2]}`)
// }

var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';
// var text = 'dimitri:dimitri@mail.com:male'
// [
//   ['dimitri', 'dimitri@mail.com', 'male'],
//   ['icha', 'icha@mail.com', 'female'],
//   ['windi', 'windi@mail.com', 'female']
// ]
var arr = []
var arr1 = []
var word = ''

for (i=0; i<text.length; i++){
    if (text[i] === ':'){
        arr1.push(word)
        word = ''
    }
    else if (text[i] === ','){
        arr1.push(word)
        word = ''
        arr.push(arr1)
        arr1 = []
    }
    else {
        word += text[i]
    }
}
arr.push(arr1)
arr1.push(word)
console.log(arr)

