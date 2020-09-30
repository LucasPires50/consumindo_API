
function exibirUsuarios(usuarios){
    var usuario = usuarios [0];

    // Para teste
    // var elemCodigo = document.getElementById("codigo");
    // var elemNome = document.getElementById("nome");
    // var elememail = document.getElementById("email");
    // var elemlogin = document.getElementById("login");
    // elemCodigo.innerHTML = usuario.codigo;
    // elemNome.innerHTML = usuario.nome;
    // elememail.innerHTML = usuario.email;
    // elemlogin.innerHTML = usuario.login;

    //inserirLinhaTabela(usuario);
    popularTabela(usuarios);
}

function popularTabela(usuarios){
    for (var i = 0; i < usuarios.length; i++) {
        inserirLinhaTabela(usuarios[i]);
        
    }
}

function inserirLinhaTabela (usuario){
    var tabela = document.getElementById('listaDeUsuarios');
    var numLinhas = tabela.rows.lenght;
    var novaLinha = tabela.insertRow(numLinhas);

    var celCodigo = novaLinha.insertCell(0);
    var celNome = novaLinha.insertCell(1);
    var celEmial = novaLinha.insertCell(2);
    var celLogin = novaLinha.insertCell(3);
    celCodigo.innerHTML = usuario.codigo;
    celNome.innerHTML = usuario.nome;
    celEmial.innerHTML = usuario.email;
    celLogin.innerHTML = usuario.login;

}

function validarUsuario(acao){
    //caputurar os campos do form
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var login = document.getElementById('login');
    var senha = document.getElementById('senha');
    var senhaValidar = document.getElementById('senhaValidar');

    if(acao == "add"){
        var dadosValidos = true;
        if(nome.value == ""){
            dadosValidos = false;
            alert("Preencha o campo do nome.")
        } else if(email.value == ""){
            dadosValidos = false;
            alert("Preencha o campo do e-mail.")
        } else if(login.value == ""){
            dadosValidos = false;
            alert("Preencha o campo do login.")
        }else {
            if(senha.value != ""){
                if(senha.value == senhaValidar.value){  
                    // var senhatxt = senha.value;
                    if(senha.value.length < 6){
                        dadosValidos = false;
                        alert("A senha precisa ter pelo menos 6 caracteres.");
                    }
                } else {
                    dadosValidos = false;
                    alert("As senha informadas não são iguais.");
                }
            } else {
                dadosValidos = false;
                alert("Informe a senha.");
            }
        }

        if(dadosValidos){
            //Envias os dados para API
            var objUsuario = {
                "nome": nome.value,    
                "email": email.value,
                "login": login.value,
                "senha": senha.value     
            }

            //Adiconar o novo usuario
            adicionarUsuario(objUsuario);
            var nome = document.getElementById('nome').value = "";
            var email = document.getElementById('email').value = "";
            var login = document.getElementById('login').value = "";
            var senha = document.getElementById('senha').value = "";
            var senhaValidar = document.getElementById('senhaValidar').value = "";
        }
        
        }
        return false;
    }


    

window.onload =  function (){
    getUsuarios();
}