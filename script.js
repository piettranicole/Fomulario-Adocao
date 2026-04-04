const cpfsCadastrados = ["11111111111"];

const moradia = document.getElementById("moradia");
const apartamentoDiv = document.getElementById("apartamentoDiv");
const casaDiv = document.getElementById("casaDiv");
const possuiQuintal = document.getElementById("possuiQuintal");
const quintalSeguroDiv = document.getElementById("quintalSeguroDiv");

moradia.addEventListener("change", function() {
    apartamentoDiv.classList.add("hidden");
    casaDiv.classList.add("hidden");
    if (this.value === "apartamento") apartamentoDiv.classList.remove("hidden");
    if (this.value === "casa") casaDiv.classList.remove("hidden");
});

possuiQuintal.addEventListener("change", function() {
    quintalSeguroDiv.classList.add("hidden");
    if (this.value === "sim") quintalSeguroDiv.classList.remove("hidden");
});
