// var returnArray=[] 
// function perkalianUnik(arr){
//     for (var i=0; i<arr.length; i++) {
//         var sum=1
//         for (var j=0; j<arr.length; j++){
//             if (i !== j){
//                 sum *= arr[j]
//             }
//         }
//         returnArray.push(sum);
//     } 
//     return returnArray;
// }
// console.log(perkalianUnik([2, 4, 6,])); // [24, 12, 8]

// SOAL 3
function numberProcessing(numberArr) {
    var odd=[],even=[],min=numberArr[0],max=numberArr[0]
    for (var i=0; i<numberArr.length; i++){
        if (numberArr[i] % 2 === 0) {
            even.push(numberArr[i])
        }
        else {
            if (numberArr[i] % 2 !== 0)
            odd.push(numberArr[i])
        }
    }
    var sum = 0, i;
    for (var i=0; i<numberArr.length; i++){
        if (numberArr[i]){
            sum += numberArr[i]
        }
    }
    for (var i=1; i<numberArr.length; i++){
        if (numberArr[i] < min){
            min = numberArr[i]
        }
    }
    for (var i=1; i<numberArr.length; i++){
        if (numberArr[i] > max){
            max = numberArr[i]
        }
    }
    return (`Min: ${min}, Max: ${max}, Mean: ${sum / numberArr.length}, Even: ${even}, Odd: ${odd}`)
}

   
console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"