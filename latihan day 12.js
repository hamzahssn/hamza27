var number1 = [1,5,7,8,2,3,6,4,3]
var number2 = [9,2,1,6,4,2,5,7]
var word = ''
// output harus [8,3,3]

// level 2
// unique dari number 1 dan number 2
// outputnya [9,8,3,3] cari nilai yang tidak duplicate (unique) 

function angkaUnik(number1,number2) {
    var arrKosong = []
    for(i=0; i<number1.length; i++){// ini loop pertama
        perluPushAapaEngga = true // ini buat penandanya //false
        for(j=0; j<number2.length; j++){ // i=0 j=0
            if(number1[i] == number2[j]){ // 3 == 9, 2, 1, 6, 4, 2,5,7,1
                perluPushAapaEngga = false
            }
        }
        if(perluPushAapaEngga === true){
            arrKosong.push(number1[i])
        }
    }
    for (i=0; i<number2.length; i++){
        perluPushAapaEngga = true
        for (j=0; j<number1.length; j++){
            if (number2[i] == number1[j]){
                perluPushAapaEngga = false
            }
        }
        if (perluPushAapaEngga === true){
            arrKosong.push(number2[i])
        }
    }
    return arrKosong  
}
console.log(angkaUnik(number1,number2))


// cara kedua

const indexOf = (keyword,data) => {
    for(j=0;j<data.length;j++){
      if(keyword == data[j]){
        return i
      }      
    }
    return -1
  }
  
  for(i=0; i<number1.length; i++){
      if(indexOf(number1[i], number2) < 0){ 
        res.push(number1[i])
      }
  }
  console.log(res)

