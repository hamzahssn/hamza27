const soal2 = ['toyota','honda','hyundai','mazda','lamborghini']

// bikin sebuah function indexOf(keyword, data)
// outputnya jika ada munculin indexnya
// jika tidak ada munculin -1
// contoh indexOf('hyundai', soal2) => 2
// contoh indexOf('BMW', soal2) => -1


// kalo indexOfnya sudah selesai
// yang unique tadi codenya di refactor mengguanakan function indexOf

function mobil(keyword,data){
    for(var i=0; i<data.length; i++) {
        if ( keyword === data[i]) {
            return i;
        }
    }
    return -1
}
console.log(mobil('lamborghini',soal2))