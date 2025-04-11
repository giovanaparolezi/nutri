document.getElementById("formTMB").addEventListener("submit", function (event) {
    event.preventDefault();
    calcularTMB();
});

function calcularTMB() {
    var idade = Number(document.getElementById("idade").value);
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);
    var sexo = document.getElementById("sexo").value;
    var resultado = document.getElementById("resultado");
    var resultadoContainer = document.getElementById("resultadoContainer");
    var tmb = 0;

    if (idade <= 0 || peso <= 0 || altura <= 0 || (sexo !== "masculino" && sexo !== "feminino")) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (idade <= 3) {
        tmb = (58.317 * peso) - 31.1;
    } else if (idade <= 10) {
        if (sexo === "masculino") {
            tmb = (22.7 * peso) + 495 + (12.4 * idade) - 266;
        } else {
            tmb = (22.5 * peso) + 499 + (5.9 * idade) - 266;
        }
    } else if (idade <= 18) {
        if (sexo === "masculino") {
            tmb = (17.5 * peso) + 651;
        } else {
            tmb = (12.2 * peso) + 746;
        }
    } else {
        if (sexo === "masculino") {
            tmb = 66.5 + (13.75 * peso) + (5.003 * altura) - (6.755 * idade);
        } else {
            tmb = 655.1 + (9.563 * peso) + (1.850 * altura) - (4.676 * idade);
        }
    }

    resultado.textContent = "Sua Taxa de Metabolismo Basal é: " + tmb.toFixed(2) + " kcal/dia";
    resultadoContainer.style.display = "block";
}
