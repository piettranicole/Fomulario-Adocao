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

document.getElementById("formulario").addEventListener("submit", function(e) {
    let erros = [];

    const idade = Number(document.getElementById("idade").value);
    const tel = document.getElementById("telefone").value.replace(/\D/g,'');
    const cpf = document.getElementById("cpf").value;
    const moradiaVal = moradia.value;
    const permite = document.getElementById("permiteAnimais").value;
    const possuiQuintalVal = possuiQuintal.value;
    const quintalSeguro = document.getElementById("quintalSeguro").value;
    const pet = document.getElementById("pet").value;
    const horas = Number(document.getElementById("hora").value);
    const motivo = document.getElementById("mensagem").value.toLowerCase();
    const financeiro = document.getElementById("financeiro").value;
    const decisao = document.getElementById("decisao").value;
    const termo = document.getElementById("termo").checked;

    if (idade < 18) erros.push("Deve ter 18 anos ou mais");

    if (tel.length < 8) erros.push("Telefone inválido (mínimo 8 números)");

    if (cpfsCadastrados.includes(cpf)) erros.push("CPF já cadastrado");

    if (moradiaVal === "apartamento" && permite !== "sim") erros.push("Apartamento deve permitir animais");

    if (moradiaVal === "casa") {
        if (possuiQuintalVal !== "sim") erros.push("Casa precisa ter quintal");
        
        if (possuiQuintalVal === "sim" && quintalSeguro !== "sim") erros.push("O quintal precisa ser seguro");
    }

    if (horas > 8) erros.push("O pet ficará mais de 8 horas sozinho! Justifique melhor");

    if (pet === "nao") alert("A ONG poderá acompanhar sua adaptação com o pet");

    const motivosInvalidos = ["quero", "porque sim"];
    if (motivosInvalidos.some(m => motivo.includes(m))) erros.push("Motivo muito genérico");

    if (financeiro === "ruim") erros.push("Condição financeira insuficiente");

    if (decisao === "hoje") erros.push("Atenção: sua decisão pode estar sendo impulsiva");

    if (!termo) erros.push("Você precisa aceitar os termos");

    if (erros.length) {
        e.preventDefault();
        alert("Erros encontrados:\n" + erros.join("\n"));
    }
});