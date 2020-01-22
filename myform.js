

let tagName = document.getElementsByTagName("label")
for(i=0;i<tagName.length;i++){
    console.log(tagName[i])
}

tagName[1].innerHTML = "umur:"

let inputBox = document.querySelectorAll("input")
for(i=0;i<inputBox.length;i++){
    console.log(inputBox[i])
}

inputBox[0].addEventListener("input", function(e){
    console.log(e.target.value)
})

inputBox[1].addEventListener("input", function(e){
    console.log(e.target.value)
})

let submit = document.getElementsByTagName("input")
for(i=0;i<submit.length;i++){
    console.log(submit[i])
}


let listener1 = ""

inputBox[0].addEventListener("input", function(e){
    listener1 = e.target.value
})

let listener2 = ""

inputBox[1].addEventListener("input", function(e){
    listener2 = (e.target.value)
})

submit[5].addEventListener("click", function(){
    let data = document.createElement('li')
    data.innerHTML = `nama: ${listener1} umur: ${listener2}`

    let uL = document.getElementsByTagName("ul")

    uL[0].appendChild(data)
})


