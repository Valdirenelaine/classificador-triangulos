function classificar() {
    let lado1 = document.getElementById("lado1").value
    let lado2 = document.getElementById("lado2").value
    let lado3 = document.getElementById("lado3").value

    if ((lado1 == "") || (lado2 == "") || (lado3 == "")) {
        document.querySelector(".resultado").style.visibility = "hidden"
        alert("Preencha todos os campos!")
    } else
    if ((lado1 == lado2) && (lado2 == lado3)) {
        document.querySelector(".resultado p").innerHTML = 'Triângulo Equilátero'
        document.getElementById("imagem").src = "img/equilatero.svg"
        document.querySelector(".resultado").style.visibility = "visible"


    } else
    if (((lado1 == lado2) && (lado2 != lado3)) || ((lado1 == lado3) && (lado2 != lado3)) || ((lado2 == lado3) && (lado1 != lado3))) {
        document.querySelector(".resultado p").innerHTML = 'Triângulo Isósceles'
        document.getElementById("imagem").src = "img/isoceles.svg"
        document.querySelector(".resultado").style.visibility = "visible"

    } else
    if ((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)) {
        document.querySelector(".resultado p").innerHTML = 'Triângulo Escaleno'
        document.getElementById("imagem").src = "img/escaleno.svg"
        document.querySelector(".resultado").style.visibility = "visible"

    }

}

function limpar() {
    document.querySelector(".resultado").style.visibility = "hidden"

}