var nameIn = document.getElementById("nameIn");
var emailIn = document.getElementById("emailIn");
var passIn = document.getElementById("passIn");
var cadast = document.getElementById("cadast");

cadast.onclick = function(){
    console.log(nameIn.value, emailIn.value, passIn.value) //valores dentro dos inputs da pagina cadastro.html
    //lembrar de colocar o script.js ao qual a pagina html correspode > observar final do cadastro.html
    window.location.href='./index.html'; //direciona para a pagina que vc quer ir
}