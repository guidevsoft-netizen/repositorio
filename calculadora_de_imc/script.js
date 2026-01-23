function calculadoraIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let imc = peso / (altura * altura);
    var status;
    if (imc < 20) {
        status = "Abaixo do peso";
    }
    if (imc > 20 && imc < 30) {
        status = "Peso ideal";
    }
    if (imc > 30) {
        status = "Acima do peso";
    }
    document.getElementById("resultado").textContent = "Valor do IMC é: " + imc;
    document.getElementById("status").textContent = status;
}