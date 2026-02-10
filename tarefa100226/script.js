function calcularTempoDeEstacionamento() {
let valor = parseFloat(document.getElementById('valor').value);
let resto = 0;

if (valor < 1) {
  document.getElementById("contagem").textContent = "O valor não pode ser menor que 1.";
}

if (valor >= 1 && valor < 1.75) {
  document.getElementById("contagem").textContent = "Você tem 30 minutos";
  resto = valor - 1;
  if (resto > 0) {
    document.getElementById("resto").textContent = "O seu troco é " + resto;
  }
}

if (valor >= 1.75 && valor < 3) {
  document.getElementById("contagem").textContent = "Você tem 1 hora";
  resto = valor - 1.75;
  if (resto > 0) {
    document.getElementById("resto").textContent = "O seu troco é " + resto;
  }
}

if (valor >= 3) {
  document.getElementById("contagem").textContent = "Você tem 2 horas";
  resto = valor - 3;
  if (resto > 0) {
    document.getElementById("resto").textContent = "O seu troco é " + resto;
  }
}
}