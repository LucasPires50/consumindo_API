var url = "http://localhost:8096";


//pegar os dados da api 
function getUsuarios (){
    var data =  new FormData();
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText); // tranforma a respota da api em objeto 
            
            exibirUsuarios(usuarios);// objeto dentro da rotina
        }
    });

    xhr.open("GET", url);
    xhr.send(data);

}

//Adicionar os dados na api
function adicionarUsuario(objUsuario){
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuario = JSON.parse(this.responseText); // tranforma a respota da api em objeto 
            getUsuarios();
            alert("Usuário adiconado");
        }
    });

    xhr.open("POST", url);
    xhr.send(JSON.stringify(objUsuario));
}