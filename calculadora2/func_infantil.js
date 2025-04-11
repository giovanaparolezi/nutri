function calcularIMCInfantil() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value) / 100; 
    let idade = parseInt(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let resultadoBox = document.getElementById("resultadoBox");
    let resultadoIMC = document.getElementById("resultadoIMC");
    let classificacao = document.getElementById("classificacao");

    if (peso > 0 && altura > 0 && idade > 0) {
        let imc = peso / (altura * altura);

       
        let percentil = calcularPercentil(imc, idade, sexo);

        let categoria = "";
        let recomendacao = "";

        if (percentil < 5) {
            categoria = "Baixo peso";
            recomendacao = "Avaliar desnutrição.";
        } else if (percentil >= 5 && percentil < 85) {
            categoria = "Peso saudável";
            recomendacao = "Manter hábitos saudáveis.";
        } else if (percentil >= 85 && percentil < 95) {
            categoria = "Sobrepeso";
            recomendacao = "Ajustar dieta e atividade física.";
        } else {
            categoria = "Obesidade";
            recomendacao = "Acompanhamento médico/nutricional.";
        }

        resultadoIMC.textContent = `IMC: ${imc.toFixed(2)} | Percentil: ${percentil}°`;
        classificacao.textContent = `Classificação: ${categoria} Recomendação: ${recomendacao}`;

        resultadoBox.style.display = "block"; 
    } else {
        resultadoIMC.textContent = "Por favor, insira valores válidos.";
        classificacao.textContent = ""; 
        resultadoBox.style.display = "block"; 
    }
}

// Função fictícia para cálculo do percentil baseado em IMC, idade e sexo
function calcularPercentil(imc, idade, sexo) {
    // Implementação real deveria consultar as tabelas de crescimento da OMS ou CDC
    // Aqui vamos usar um exemplo simplificado.
    // Em um caso real, seria necessário consultar as curvas de crescimento da OMS ou CDC.
    let percentil = Math.random() * 100; // Apenas uma simulação para ilustrar

    return percentil.toFixed(2); // Retorna um valor aleatório entre 0 e 100
}
