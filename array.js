// var animals = ['Lion', 'Tiger', [1,2,3,4,5,6]]
// // munculin angka 5
// animals[2][4]
// console.log(animals[2][4])

//// soal 1
// var animals = ['Lion', 'Tiger', [5,3,2,4,1,6], 'Jaguar', 'Puma']
//// 1 push nilai baru
//// 2 setelah push langsung pop
//// 3 sort array angka
//// 4 munculin array dan jaguar pake slice

// animals.push("sapi")
// console.log(animals)
// animals.pop()
// console.log(animals)
// animals[2].sort()
// console.log(animals)
// console.log(animals.slice(2,4))

//// soal 2

// var list = [[5,3,2,4,1,6],[1,2,2,3,4],[1,3,5,7,9]]
// var store = 0

// //// pakai loop
// //// munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
// //// kalo contoh di atas outputnya 20
// //// dan di buat kedalam sebuah function//
// //// function hanya menerima 1 parameter array


// let countArray = (array) => {
//     for (i=0;i<list.length;i++){
//         for (j=0;j<list[i].length;j++){
//             if (list[i][j]%2==0){
//                 store=(list[i][j]+store)
//             }
//         }
//     }
//     return store
// }
// console.log(countArray([[5,3,2,4,1,6],[1,2,2,3,4],[1,3,5,7,9]]))




////soal 3

let cars = 'toyota honda hyundai mercedes bmw kia mazda'
cars2 = 'toyota+honda+hyundai mercedes bmw kia mazda'


const split = (string, pemisah) => {
  let arr = []
  let str = ''
  
  for(i=0;i<string.length;i++){
    if(string[i] === pemisah){
     arr.push(str)
     str = '' 
    }else{
      str += string[i]
    }
  }
  arr.push(str)
  return arr
}

// buat sebuah function (string, pemisah) => (cars, ' ') => ['toyota', 'honda','hyundai', 'mercedes', 'bmw', 'kia', 'mazda']
// buat sebuah function (string, pemisah) => (cars2, '+') => ['toyota', 'honda', 'hyunda', 'mercedes bmw kia mazda']
//
console.log(split(cars2, '+'))
console.log(cars2.split('+'))