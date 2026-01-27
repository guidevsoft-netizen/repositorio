var maiormenor;
var status = "0";
let numeroSecreto = Math.floor((Math.random() * 100) + 1);
let numeroTentativas = 10;
function verificarChute() {
    let chute = parseInt(document.getElementById("chute").value);
    if (chute === numeroSecreto) {
        status = "1";
        document.getElementById("resultado").textContent = "Você acertou!";
        document.getElementById("dica").textContent = ""; 
    } else {
        numeroTentativas--;
        document.getElementById("tentativas").textContent = "Suas tentativas: " + numeroTentativas;
        status = "2";
        document.getElementById("resultado").textContent = "Você errou! Tente novamente.";
        if (chute < numeroSecreto) {
            maiormenor = "O número secreto é maior";
        } else {
            maiormenor = "O número secreto é menor";
        }
        document.getElementById("dica").textContent = maiormenor;
        if (numeroTentativas === 0 ) {
            alert("Suas tentativas acabaram! A página será recarregada."); location.reload();
        }
    }
}