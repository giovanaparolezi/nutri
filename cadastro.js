document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cadastroForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Cadastro realizado com sucesso!");
        this.reset();
        toggleCampos();
    });
});

function toggleCampos() {
    let tipo = document.getElementById("tipoCliente").value;
    document.getElementById("adultoCampos").style.display = tipo === "adulto" ? "block" : "none";
    document.getElementById("criancaCampos").style.display = tipo === "crianca" ? "block" : "none";
}