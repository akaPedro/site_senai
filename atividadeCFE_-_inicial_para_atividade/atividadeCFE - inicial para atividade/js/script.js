//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}

//Validação de Login

function Login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var usuario = document.getElementById("senha").value;

    if(usuario == 'admin' && senha == 123456){
        window.location = "index.html";
        logado = 1;
    }
    if(logado == 0){
        alert("acesso negado X");
    }
}

//Ativar alert no botão cadastrar
function cadastro(){
    alert("cadastrado.");
    window.location.href = "index.html";
}