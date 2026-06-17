// MENSAGEM DE CADASTRO

if (document.getElementById("btnCadastro")) {

    document.getElementById("btnCadastro").onclick = function () {

        document.getElementById("mensagem").innerHTML =
        "Cadastro realizado com sucesso!";

    };

}

// MENSAGEM DE RECUPERAÇÃO

if (document.getElementById("btnRecuperar")) {

    document.getElementById("btnRecuperar").onclick = function () {

        document.getElementById("mensagemRecuperar").innerHTML =
        "Senha alterada com sucesso!";

    }

}

// RESERVA

if (document.getElementById("btnReserva")) {

    document.getElementById("btnReserva").onclick = function () {

        document.getElementById("mensagemReserva").innerHTML =
        "MESA RESERVADA COM SUCESSO!";

    };

} 