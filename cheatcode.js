var angkaKedua  //undefined

angkaKedua = 10 // angkaKedua = 10
// console.log("no 1.", angkaKedua !== "10" ) 
  // angkaKedua = "angkaKedua"

angkaKedua = 11
// console.log("no 2.", angkaKedua === "angkaKedua" )
// console.log((angkaKedua < 10 || angkaKedua >= 10) || (angkaKedua === 'angkaKedua' && angkaKedua>=10), '<=================== no 3  =================='); //true
// (false || false) || (true && false) ---> false || false
// console.log("angkaKedua: ",angkaKedua) // angkaKedua: angkaKedua 10 , angkaKedua: angkaKedua


// if(angkaKedua == "AngkaKedua"){
//   console.log('no 1')
// }else if(angkaKedua == 10){
//   console.log( '<=================== no 3 ==================');
// }else if(angkaKedua >= 10){
//   console.log('no 5') 
//   if(angkaKedua > 0){ 
//     console.log( '<=================== no 6 ==================');
//   }
//   if(angkaKedua < 100){ 
//     console.log( '<=================== no 7 ==================');
//   }
// }else{
//   console.log('no 2')
// }

// switch(angkaKedua){
//   case 11: {
//     console.log('switch 1')
//     break;
//   }
//   case 'angkaKedua': {
//     console.log('switch 2')
//     break;
//   }
//   default: {
//     console.log('else')
//   }
// }


// var angka1 = 1
// let angka2 = 2
// const angka3 = 3

// var angka1 = 2
// console.log(angka1, '<=================== 2 ==================');

// angka2 = 5
// console.log(angka2, '<=================== angka2 ==================');

// const angka3 = 20

let day // 1-30 ==> ex 3, 5, -1
let month //1-12 => ex 2, 1
let years //unlimited => 2020, 1000

//code here logic if else


console.log(day,'-', month,'-', years) // 1. 3-February-2020, 5-January-1000 
console.log(day,'-', month,'-', years) // 2. input bulan salah, harus antara 1 sampai 12  => ini terjadi jika input bulan = 13
console.log(day,'-', month,'-', years) // 3. input tanggal salah, harus antara 1 sampai 30 => ini terjadi jika input tanggal = -1
   