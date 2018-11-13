
var nameL = document.getElementById("nomeL");
var password = document.getElementById("password");
var log = document.getElementById("log");
//TODO pegar os inputs do html

log.onclick = function(){
    //TODO aqui pego os inputs do login e 
    //comparo com algum cadastro do banco de dados
    //se existe
    console.log(nameL.value, password.value,  document.getElementById("password"), document.getElementById("nomeLogin"))
    let user = {
        name: nameL.value,
        password:password.value
        }
          console.log(user);
          $.post( "http://localhost:8000/usuarioLogin", user ).done(function(res){
            console.log(res);
            if (res == "OK" ){
                window.location.href='./post.html'
            }
            });
    //se nao  erro!
}