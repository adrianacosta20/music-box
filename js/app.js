//Variable Definition
var boxes = document.querySelectorAll(".box")
var notes = {
    c: document.querySelector("#cAudio"),
    d: document.querySelector("#dAudio"),
    e: document.querySelector("#eAudio"),
    f: document.querySelector("#fAudio"),
    g: document.querySelector("#gAudio"),
    a: document.querySelector("#aAudio"),
    b: document.querySelector("#bAudio"),
}
//Function Definition
function playNote(letter) {
    notes[letter].currentTime = 0
    notes[letter].play()
}
//Call the function/event listener
boxes.forEach(function (box) {
    box.addEventListener(`mousedown`, function () {
        playNote(box.id)
        box.classList.toggle("boxShadow")
    })
    box.addEventListener("mouseup" , function(){
        box.classList.toggle("boxShadow")
    } )

})

document.addEventListener(`keydown`, function (event) {
    if (event.key == "c") {
        playNote("c")
    }
    if (event.key == "d") {
        playNote("d")
    }
    if (event.key == "e") {
        playNote("e")
    }
    if (event.key == "f") {
        playNote("f")
    }
    if (event.key == "g") {
        playNote("g")
    }
    if (event.key == "a") {
        playNote("a")
    }
    if (event.key == "b") {
        playNote("b")
    }

})