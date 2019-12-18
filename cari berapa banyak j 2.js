// function count(string,char) {
//     var re = new RegExp(char,"g");
//     return string.match(re).length;
//    }
   
//    var str = 'kkaK';
//    console.log(count(str,'k'))



// var abj = "kakakkkakkakkkakkaa"
// var count = 0

for (i=0;i<abj.length;i++){
    if (abj[i] === "a"){
        count += 1
    }
}
console.log(count)


var words = "hondaStoyotaShyundai"
var output = ""


for (i=0;i<words.length;i++){
    if (words[i] == "S"){
        output += " "
    }
    else {
        output += words[i]
    }
}
console.log(output)


