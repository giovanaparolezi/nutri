function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultadoBox = document.getElementById("resultadoBox");
    let resultadoIMC = document.getElementById("resultadoIMC");
    let classificacao = document.getElementById("classificacao");

    if (!isNaN(peso) && peso > 0 && !isNaN(altura) && altura > 0) {
        let imc = peso / (altura * altura);
        let categoria = "";

        if (imc < 18.5) {
            categoria = "Abaixo do peso";
        } else if (imc < 24.9) {
            categoria = "Peso normal";
        } else if (imc < 29.9) {
            categoria = "Pré-obesidade";
        } else {
            categoria = "Obesidade";
        }

        resultadoIMC.textContent = `Seu IMC é ${imc.toFixed(2)}`;
        classificacao.textContent = `Classificação: ${categoria}`;
        resultadoBox.style.display = "block"; 
    } else {
        resultadoIMC.textContent = "Por favor, insira valores válidos.";
        classificacao.textContent = ""; 
        resultadoBox.style.display = "block"; 
    }
}
