var btnEnviar = document.getElementById("env");
var urlInput = document.getElementById("urlInput");
var userJson = document.getElementById("userJson");
//TODO pegar os inputs do html
var dropdownV = document.getElementsByClassName("dropdown-menu")
console.log(dropdownV)

var e = document.getElementById("cb_catinsumo");


btnEnviar.onclick = function () {
    var itemSelecionado = e.options[e.selectedIndex].value; //e possui o componente selectedIndex e entao pego valor
    console.log(itemSelecionado)
    console.log(dropdownV)
    if (itemSelecionado == 2) {
        var editIcon = document.getElementById('iconEdit')
        var deleteIcon = document.getElementById('iconDelete')
        var tabela = document.getElementById('tabela');
        console.log(tabela)
        //GET
        $.get(urlInput.value).done(function (res) {
            console.log(res);
            for (let i = 0; i < res.length; i++) {
                var newRow = tabela.insertRow();
                newRow.id = i;
                var newCell0 = newRow.insertCell();
                newCell0.innerHTML = res[i].id;
                var newCell1 = newRow.insertCell();
                newCell1.innerHTML = res[i].name;
        
                var newCell3 = newRow.insertCell();

                newCell3.innerHTML = `<img class="icons" id=`+res[i].id+` onclick="editItem(this.id)"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF7SURBVGhD7Zk9SgNBHEfXRgRBz2ClhY3gTWwsFEHs/Si0t1EU0nkBwVYEvYIK3kHt9A7i1/vhDgzjbHaLxf2P/B88SDabMC+ZmSVJ5ThOcczgGd7jtg6UyCze4lfkCIsiF1FczLiIoPmYLhFBszFNES+4j+/RsaC5mKaIV1xAsYq5mF00wbjptIcxB5iec4eD07Ym3nAFxTxqmqXn6DozKF0XtmI0fXIRer5eZzCaIjTY8+RYk6YjtLAnUNMlfTzWfERAMReYnieLiRC6X9ya8Ii/xCNqPaIPPKLWI/rAI2o9og/+dYRMv56ajRBzuImX+InxAJ9wCoXpiJQ1TAf6jDtYTETgAdMB5zQdIU4xN/BYMxGLOPlz8xdLeIj6jcl0hDjCG2yKCaxjvAGYm07XqIF1iblCkxFC22p4l9tittBkxDR+YAhpi9F1xlyEWMY4okuMSTYwFyKLijnBePDalR5RG8AxamsuAv0voRh9MppmWjOO4zhOD1TVN1UOi173zKd0AAAAAElFTkSuQmCC">`;
                var newCell4 = newRow.insertCell();
                newCell4.innerHTML = `<img class="icons" id=`+res[i].id+` onclick="deleteItem(this.id)"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVGhD7ZlPK0VhEMaPFFn48wHkC7C2UjbKN5DspGRjJdnY8wGUyNbOgrUoKZaysCFhIUsLKyuep2Zq0nvvofvO9XaaX/02c+/ceZ/TbU6dUwVB2QzBTXgNH9t4AVdhHyyOUXgPv/7gFRyERXEOU4etcx8Wwzi0h9uCMy2chQdQv/sJh2ERzEE92C0LNfTCd6g9k7AIFqAe6pKFX/ACtWeKBW/W4V6NZ1AP9Sa1Oj+g9pxIrZ1LsCN4hXXgf3oIO6IxQVbgtngHU0O85I1VZ8/DbPCqpAZ6yTXuQuODPEDdLtxAWudmspvH9vC3tM5NZz9Tux6EdYX3BK3zXmGxPWMsCK0WSgSpI4IItieC5CCCCLYnguQgggi2J4LkIIIItieC5CCCCLYnguQgggi2J4LkoPFBbuCGuCs1yifuWqe2h4fU+pPUftr1IF66BdmBqYFerkEXFmFqoJfT0IUB+AxTQ3PLF6U90I0J+ApTw3PJp/58S+zOCOT/9xieZvQILsN+GARB0Hiq6hssgzz3gTKVtQAAAABJRU5ErkJggg==">`;
            }
        });
    }
    if (itemSelecionado == 1) {
        //POST
        console.log(userJson.value)
        let user = userJson.value
       /* $.post(urlInput.value, {
            email: "qasdeajjjz@tenorio.com.br",
            password: "1234ss56",
            name: "carolinasde2002"
        }
        ).done(function (res) {
            console.log(res);
            /* if (res == "OK" ){
                 window.location.href='./post.html'
             }
        });
}*/
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:8000/usuario/",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer bd238370-ac5a-4dde-a229-fe063172c44b",
      "Cache-Control": "no-cache",
      "Postman-Token": "0508ba3d-be80-4beb-81d3-5f147dd203dd"
    },
    "processData": false,
    "data": userJson.value
  }
}
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}


function editItem(i) {
    //TODO edit ICON
    console.log("clicou no lapis")
    document.getElementById(i).contentEditable = true;
   /* $.put('http://localhost:8000/historico/'+ i).done(function (res) {
        
        console.log(res);
    });*/
   //s window.location.href='./cadastro.html'
}

function deleteItem(i) {
    console.log(document.getElementById(i))
    //TODO delete icon
    /**
     * chamar o endpoint do backend
     */
   // alert(event.srcElement.id);
    console.log(i)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": 'http://localhost:8000/historico/' +i,
        "method": "DELETE",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer bd238370-ac5a-4dde-a229-fe063172c44b",
          "Cache-Control": "no-cache",
          "Postman-Token": "a969941d-3427-4493-9525-ecf3f060314d"
        },
        "processData": false,
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
   
   
    console.log("clicou no lixo")
}