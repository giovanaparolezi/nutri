document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcularPesoIdealInfantil").addEventListener("click", calcularPesoIdealInfantil);
    document.getElementById("btnDietaInfantil").addEventListener("click", mostrarCampoPesoInfantil);
    document.getElementById("verificarDietaInfantil").addEventListener("click", verificarDietaInfantil);
  });
  
  function calcularPesoIdealInfantil() {
    var altura = Number(document.getElementById("alturaInfantil").value);
    var sexo = document.getElementById("sexoInfantil").value;
    var resultadoBoxInfantil = document.getElementById("resultadoBoxInfantil");
    var resultadoPesoIdealInfantil = document.getElementById("resultadoPesoIdealInfantil");
    var btnDietaInfantil = document.getElementById("btnDietaInfantil");
  
    if (altura <= 0) {
      alert("Por favor, insira valores válidos.");
      return;
    }
  
    var pesoIdeal = sexo === "masculino"
      ? 50 + 0.91 * (altura - 152.4)
      : 45.5 + 0.91 * (altura - 152.4);
  
    resultadoPesoIdealInfantil.innerHTML = `Faixa de Peso Esperada: ${pesoIdeal.toFixed(2)} kg`;
    resultadoBoxInfantil.style.display = "block";
    btnDietaInfantil.style.display = "block";
  }
  
  function mostrarCampoPesoInfantil() {
    document.getElementById("pesoAtualBox").style.display = "block";
  }
  
  function verificarDietaInfantil() {
    var pesoAtual = Number(document.getElementById("pesoAtualInfantil").value);
    var pesoIdealTexto = document.getElementById("resultadoPesoIdealInfantil").innerText;
    var pesoIdeal = parseFloat(pesoIdealTexto.match(/[\d.]+/)[0]);
    var pesoResultado = document.getElementById("pesoResultado");
  
    if (isNaN(pesoAtual) || pesoAtual <= 0) {
      alert("Insira um peso válido.");
      return;
    }
  
    var linkDieta;
    if (pesoAtual < pesoIdeal) {
      linkDieta = "ganhoinfantil.pdf"; 
      pesoResultado.innerText = "Parece que seu filho está abaixo do peso ideal. Recomendamos uma dieta para ganho de peso.";
    } else if (pesoAtual > pesoIdeal) {
      linkDieta = "emagrecimentoinfantil.pdf"; 
      pesoResultado.innerText = "Parece que seu filho está acima do peso ideal. Recomendamos uma dieta para perda de peso.";
    } else {
      alert("Seu filho já está com o peso ideal!");
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
  
 
    btnBaixarDieta.addEventListener("click", function () {
      var link = document.createElement("a");
      link.href = linkDieta;
      link.download = ""; 
      document.body.appendChild(link); 
      link.click(); 
      document.body.removeChild(link); 
    });
    
  

    var pesoAtualBox = document.getElementById("pesoAtualBox");
    var previousButton = pesoAtualBox.querySelector('.button');
    if (previousButton) {
      pesoAtualBox.removeChild(previousButton);
    }

    pesoAtualBox.appendChild(btnBaixarDieta);
  }
  