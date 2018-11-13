var nameIn = document.getElementById("nameIn");
var emailIn = document.getElementById("emailIn");
var passIn = document.getElementById("passIn");
var cadast = document.getElementById("cadast");

cadast.onclick = function(){
    console.log(nameIn.value, emailIn.value, passIn.value) //valores dentro dos inputs da pagina cadastro.html
    //lembrar de colocar o script.js ao qual a pagina html correspode > observar final do cadastro.html
     //direciona para a pagina que vc quer ir
    //montar json

    let user = {
    name: nameIn.value,
    password:passIn.value,
    email:emailIn.value
    }
      console.log(user);
      
      $.post( "http://localhost:8000/usuario", user ).done(function(res){
        console.log(res);
        if(res=='OK'){
            window.location.href='./index.html';
        }
        });
    /*userService.createUser(user).subscribe(res=>{
        console.log("cadast")
    });*/
    //window.location.href='./index.html';
}