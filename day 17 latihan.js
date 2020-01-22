// soal no 1
function csvToObject (text) {
    let arr =[]
    for(i=0; i<text.length; i++){
        arr = text.split(",")

    }
    var object = {
        name: arr[0],
        email:arr[1],
        gender:arr[2]
    }
    return object
}

// TEST CASES
console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
// { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }

console.log(csvToObject('Icha,icha@mail.com,female'));
// { name: 'Icha', email: 'icha@mail.com', gender: 'female' }

console.log(csvToObject('Dhani,dhani@mail.com,male'));
// { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }

console.log( '<===================  ==================>');


// soal no 2
function deleteUndefinedKeys (object) {
    let del = {}
    for(key in object){
        if(object[key] !== undefined){
            del[key] = object[key]
        }
    }
    return del
}
  
console.log(deleteUndefinedKeys({
name: 'Dimitri',
age: undefined,
email: 'dimitri@mail.com'
}));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(deleteUndefinedKeys({
name: undefined,
age: undefined,
email: undefined
}));
// {}


// soal no 3
function complexConversion (text) {
    let arr = []
    let arr2 = []
    let object = {}
    arr = text.split(",") 
    for(i=0; i<arr.length; i++){
        arr2 = arr[i].split(":")
        let key = arr2[0]
        let value = arr2[1]
        object[key] = value
    }
    return object
}


// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }


// soal no 4 
// klasifikasi by nat
let cars = [
    {nat:'jpn', name: 'toyota'}, 
    {nat: 'jpn', name: 'honda'}, 
    {nat: 'eu', name: 'chev'}, 
    {nat: 'idn', name: 'esemka'}
]

function classificationByNat(data){
    let object = {}
    for (i=0; i<data.length; i++){
        if(object[data[i].nat] == undefined){
            let key =data[i].nat
            let val = data[i].name
            object[key] = [val]
        }
        else{
            object[data[i].nat].push(data[i].name)
        }
    }
    return object
}

console.log(classificationByNat(cars))
/* 
{
jpn: ['toyota', 'honda'],
eu: ['chev'],
idn: ['esemka']
}
*/