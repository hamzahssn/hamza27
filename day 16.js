var orang = {
    nama: "udin", 
    tinggi: 170, 
    usia: 21,
    bb: 71,
    kendaraan: [
        {merk: 'honda', buildedBy: 'japan'},
        {merk: 'toyota', buildedBy: 'japan'},
        {merk: 'tata', buildedBy: 'india'}
    ],
    laptop: {
        merk: 'macbook',
        warna: 'dark grey',
        size: '15in'
    } 
}
// console.log(orang.laptop.size, "<========= size laptopnya udin")
// soal 3

// for(i=0 ; i<orang.kendaraan.length ; i++){
//     if (orang.kendaraan[i].buildedBy == "japan")
//     console.log(orang.kendaraan[i].merk)
// }

// munculin list kendaraanya
// honda
// toyota
// becak
  
  
orang.nama // => outputnya udin
orang['nama'] // => outputnya udin

//cara loop object
for(key in orang) {
// console.log(orang[key])
}
  
  
// munculin value-value dari object orang
// udin
// 170
// 21
// 71

// no4. munculin mobil SIAPA yang paling mahal, dan MOBILNYA APA 
var udin = {
    nama: "udin", 
    tinggi: 170, 
    usia: 21,
    bb: 71,
    kendaraan: [
      {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
      {merk: 'toyota', buildedBy: 'japan', price: 550000000, type: 'fortuner'}
    ],
    laptop: {
      merk: 'macbook',
      warna: 'dark grey',
      size: '15in'
    } 
  }
  
var ujang = {
    nama: "ujang", 
    tinggi: 170, 
    usia: 21,
    bb: 71,
    kendaraan: [
        {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
        {merk: 'toyota', buildedBy: 'japan', price: 120000000, type: 'agya'}
    ],
    laptop: {
        merk: 'macbook',
        warna: 'dark grey',
        size: '15in'
    } 
}

var dadang = {
    nama: "dadang", 
    tinggi: 170, 
    usia: 21,
    bb: 71,
    kendaraan: [
        {merk: 'honda', buildedBy: 'japan', price: 400000000, type: 'civic'},
        {merk: 'toyota', buildedBy: 'japan', price: 140000000, type: 'agya'}
    ],
    laptop: {
        merk: 'macbook',
        warna: 'dark grey',
        size: '15in'
    } 
}
  
listOrang = [udin, ujang, dadang]
let number = 0
let type = ""
for (i=0; i<listOrang.length; i++){
    for (j=0; j<listOrang[i].kendaraan.length; j++){
            if (listOrang[i].kendaraan[j].price > number){
                number = listOrang[i].kendaraan[j].price
                type = listOrang[i].kendaraan[j].type
            }
    }
}
console.log(type)



  
  
// soal no 5

function grouping (scores) {
    let output = {
        pass: [],
        fail: []
    }
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < 75) {
            output.fail.push(scores[i])
        } 
        else {
            output.pass.push(scores[i])
        }
    }
    return output
}


console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
// { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }

console.log(grouping([]));
// { pass: [], fail: [] }



// soal no 6
function convert (data) {
    let results = []
    for (i=0; i<data.length; i++){
        let output = {
            id: data[i][0],
            firstName: data[i][1],
            lastName: data[i][2],
            email: data[i][3],
        }
        results.push(output)
    }
    return results
}

// TEST CASES
console.log(convert([
[1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
[2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
{ id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/
