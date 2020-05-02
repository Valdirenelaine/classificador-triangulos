function classificar() {
    let lado1 = document.getElementById("lado1").value
    let lado2 = document.getElementById("lado2").value
    let lado3 = document.getElementById("lado3").value

    if ((lado1 == "") || (lado2 == "") || (lado3 == "")) {
        alert("Preencha todos os campos!")
    } else
    if ((lado1 == lado2) && (lado2 == lado3)) {
        document.querySelector(".resultado").innerHTML = 'Triângulo Equilátero'

    } else
    if ((lado1 == lado2) && (lado2 != lado3)) {
        document.querySelector(".resultado").innerHTML = 'Triângulo Isósceles'

    } else
    if ((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)) {
        document.querySelector(".resultado").innerHTML = 'Triângulo Escaleno'

    }

}