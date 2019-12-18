var name = "hamza"
var age = 18
var money = 600000
var day = 30
var countjuice = 0
var countanggur = 0
var countjeruk = 0

if (anggur=300000)
if (juice=50000)
if (jeruk=10000)

if (!name){
    console.log("anda tidak boleh masuk!")
}
else {
    if (age <18){
        while (money-juice >=0){
            money=money-juice
            countjuice = countjuice + 1
        }
        console.log("anda hanya boleh membeli juice dan sisa uang anda setelah belanja adalah:",countjuice,money)
    }
    if (age >17){
        while (money-anggur >=0){
            money=money-anggur
            countanggur = countanggur + 1
        }
        console.log("anda 17+ dan berbelanja anggur, sisa uang anda setelah berbelanja adalah:",countanggur,money)
    }
    while (money-jeruk >=0){
       money=money-jeruk 
       countjeruk = countjeruk + 1
    }
    console.log("uang anda setelah membeli jeruk memakai duit sisa:",countjeruk,money)
}