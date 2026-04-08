function validacao () {

    let valido = true;
    let nome = document.getElementByld("nome").value;
    let email = document.getElementByld("email").value;
    let telefone = document.getElementByld("telefone").value;
    let cidade = document.getElementByld("idade").value;
    let horas = document.getElementByld("horas").value;
    let motivo = document.getElementByld("motivo").value;
    let cpf = document.getElementByld("cpf").value;
    let moradia = document.querySelector('input [name="moradia"]:checked');
    let quintal = document.querySelector('input [name="quintal"]:checked');
    let pet_antes = document.querySelector('input [name="pet_antes"]:checked');
    let finaceiro = document.querySelector('input [name="financeiro"]:checked');
    let cpf_registrado = [
        "11111111111",
        "12345678909",
        "12324354657",
        "98765432112"
    ]
    
    let termo = document.getElementById("termo")

    if (nome.length === 0) {
    alert ("informe seu nome");
    valido = false;
    } else if (nome.lenght < 3) {
    alert ("O nome deve ter no mínimo 3 caracteres.");
    valido = false;
    }

     if (email.length === 0) {
    alert ("informe seu email");
    valido = false;
    } else if (!email.includes("@")) {
    alert ("O email deve ter @");
    valido = false;

    }

     if (telefone.lenght === 0) {
    alert ("informe seu telefone");
    valido = false;
    } else if (telefone.lenght < 8) {
    alert ("O telefone deve ter no mínimo 8 dígitos.");
    valido = false;
    }

     if (cpf.lenght == 0) {
    alert ("Campo CPF obrigatório");
    valido = false;
    } else if (cpf_registrado.includes(cpf)) {
    alert ("O cpf que você digitou já está cadastrado");
    valido = false;
    }

     if (idade.lenght === 0) {
    alert ("informe sua idade");
    valido = false;
    } else if (idade < 18) {
    alert ("Você deve ser maior de idade para continuar o processo de adoção.");
    valido = false;
    }

    if (!moradia){
    alert("Selecione o tipo de moradia")
    valido = false;
    } else if (moradia && moradia.value === "apartamento" && quintal && quintal.value === "sim") {
        alert ("Erro, quem mora em apartamento não pode ter quintal.");
        valido = false;
    } else if (moradia && moradia.value === "casa" && quintal && quintal.value === "nao") {
        alert ("Aviso: por naõ possuir quintal, o uso de espaço externo pode ser limitado");
    }

    if (!quintal) {
        alert ("selecione se tem quintal");
        valido = false;
    }

    if (!pet_antes) {
        alert ("Você já teve animais alguma vez antes?");
        valido = false;
    } else if (pet_antes && pet_antes.value === "nao") {
        alert ("Como você nunca teve nenhum amiguinho pet antes, pode haver um acompanhamento da ONG!");
    }


    if (!financeiro) {
        alert ("Você tem condição financeira para ter um amiguinho pet?");
        valido = false;
    } else if (finaceiro && financeiro.value === "nao") {
        alert ("Você marcou que não tem condição para cuidar de um animalzinho, opte por um momento em que você tenha condições de dar uma vida boa para seu pet");
        valido = false;
    }


    }
