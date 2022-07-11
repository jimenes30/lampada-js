var lamp = document.getElementById("lampada")
var titulo = document.getElementById("titulo")

function lamp_on() {
    if (lamp.src.indexOf("quebrada") > -1) {
        titulo.innerHTML = "Tá quebrada ué '-'"
        lamp.src = "./assets/imagens/quebrada.jpg"
    }
    else {
        titulo.innerHTML = "Acendeu"
        lamp.src = "./assets/imagens/ligada.jpg"
    }
}

function lamp_off() {
    if (lamp.src.indexOf("quebrada") > -1) {
        titulo.innerHTML = "Quebrou"
        lamp.src = "./assets/imagens/quebrada.jpg"
    }
    else {
        titulo.innerHTML = "Apagou"
        lamp.src = "./assets/imagens/desligada.jpg"
    }
}
function break_lamp() {
    titulo.innerHTML = "Quebrou :/"
    lamp.src = "./assets/imagens/quebrada.jpg"
}

lamp.addEventListener("mouseenter", lamp_on)
lamp.addEventListener("mouseout", lamp_off)
lamp.addEventListener("dblclick", break_lamp)
