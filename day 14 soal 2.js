var noSpace = 'hamza'

function reverseText(noSpace){
    var string = ""
    for (i=noSpace.length-1; i>-1;i--){
      string += noSpace[i]
    }
    return string
}
console.log(reverseText(noSpace))

var sortAlphabet = reverseText(noSpace)

function sortingText(sortAlphabet){
    var arr = []
       arr = sortAlphabet.split('')
       arr.sort()
    return arr.join('')
}
console.log(sortingText(sortAlphabet))

