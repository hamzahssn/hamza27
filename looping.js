// nilai = 0
// while (nilai <10){
//     nilai= nilai + 1
//     if (nilai%2==1)
//     console.log(nilai)
// }
// var abjad1 = 'abcdef'
// var abjad2 = 'ghijklmnopqrstuvwxyz'
// var num = 0

// while (num < abjad1.length){
//     console.log(abjad1[num])
//     num += 1
// }
// for (i=0;i<abjad1.length;i++){
//     console.log(abjad1[i])
// }
// for (i=0;i<abjad2.length - 4;i++){
//     abjad1=abjad1 + abjad2[i]
// }
// console.log(abjad1)
// let star = '*'

// for (i=0;i<5;i++){
//     console.log(star)
//     star = star+star[i]
// }
// hasil =
// *
// **
// ***
// ****
// *****
function count(string,char) {
    var re = new RegExp(char,"gi");
    return string.match(re).length;
   }
   
   var str = 'abcdefghijaosjdlkadjlaksdjlaksdjlasdj a;sjdalksdjaklsdj lasjdlkasdjklasdjaskldjalsdkjskdjkkkkkkkkklmnopqrs';
   console.log(count(str,'k'))