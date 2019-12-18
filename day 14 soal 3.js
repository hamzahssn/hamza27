
function isArithmeticProgression (numbers) {
    //declare variable flag
    var flag = true

    // buat variable default arithSelisih
    var arithSelisih = numbers[1]-numbers[0]

    //looping untuk mengecek selisih setiap number
    for (i=1; i<numbers.length-1; i++){

        // deklarasi variabel baru untuk menghitung selisih setiap elemen
        var arithSementara = numbers[i+1]-numbers[i]

        // jika arithSementara tidak sama dengan arithSelisih
        // flagnya jadi false
        if (arithSementara !== arithSelisih){
            flag = false
        }
    }
    
    // return flag
    return flag
}
  // TEST CASES
  console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
  console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
  console.log(isArithmeticProgression([2, 4, 6, 8])); // true
  console.log(isArithmeticProgression([2, 6, 18, 54])); // false
  console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false