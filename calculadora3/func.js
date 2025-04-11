document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcularPesoIdeal").addEventListener("click", calcularPesoIdeal);
    document.getElementById("btnDieta").addEventListener("click", mostrarCampoPeso);
    document.getElementById("verificarDieta").addEventListener("click", verificarDieta);
});

function calcularPesoIdeal() {
    var altura = Number(document.getElementById("altura").value);
    var sexo = document.getElementById("sexo").value;
    var resultadoBox = document.getElementById("resultadoBox");
    var resultadoPesoIdeal = document.getElementById("resultadoPesoIdeal");
    var btnDieta = document.getElementById("btnDieta");

    if (altura <= 0) {
        alert("Por favor, insira uma altura válida.");
        return;
    }

    var pesoIdeal;
    if (sexo === "masculino") {
        pesoIdeal = 50 + (0.91 * (altura - 152.4));
    } else {
        pesoIdeal = 45.5 + (0.91 * (altura - 152.4));
    }

    resultadoPesoIdeal.innerHTML = `Peso Ideal: ${pesoIdeal.toFixed(2)} kg`;
    resultadoBox.style.display = "block";
    btnDieta.style.display = "block";
}

function mostrarCampoPeso() {
    document.getElementById("pesoAtualBox").style.display = "block";
}

function verificarDieta() {
    var pesoAtual = Number(document.getElementById("pesoAtual").value);
    var pesoIdealTexto = document.getElementById("resultadoPesoIdeal").innerText;
    var pesoIdeal = parseFloat(pesoIdealTexto.match(/[\d.]+/)[0]); 
    var dietaMensagem = document.getElementById("dietaMensagem");

    if (isNaN(pesoAtual) || pesoAtual <= 0) {
        alert("Insira um peso válido.");
        return;
    }

    var linkDieta;
    if (pesoAtual < pesoIdeal) {
        linkDieta = "ganho.pdf";  
        dietaMensagem.innerText = "Parece que você está abaixo do peso ideal. Recomendamos uma dieta para ganho de peso.";
    } else if (pesoAtual > pesoIdeal) {
        linkDieta = "emagrecimento.pdf";  
        dietaMensagem.innerText = "Parece que você está acima do peso ideal. Recomendamos uma dieta para perda de peso.";
    } else {
        alert("Seu peso já está ideal!");
        return;
    }

  
    var btnBaixarDieta = document.createElement("div");
    btnBaixarDieta.classList.add("button");


    var buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("button-wrapper");

    var text = document.createElement("div");
    text.classList.add("text");
    text.innerText = "Baixar Dieta";

    var icon = document.createElement("span");
    icon.classList.add("icon");
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>`;

    buttonWrapper.appendChild(text);
    buttonWrapper.appendChild(icon);
    btnBaixarDieta.appendChild(buttonWrapper);

    btnBaixarDieta.addEventListener("click", function() {
        var link = document.createElement("a");
        link.href = linkDieta;
        link.download = linkDieta;
        link.click();
    });


    var pesoAtualBox = document.getElementById("pesoAtualBox");
    var previousButton = pesoAtualBox.querySelector('.button');
    if (previousButton) {
        pesoAtualBox.removeChild(previousButton);
    }

    pesoAtualBox.appendChild(btnBaixarDieta);
}
