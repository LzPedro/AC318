//var botao = document.getElementById('btnAtt');
var editIcon = document.getElementById('iconEdit')
var deleteIcon = document.getElementById('iconDelete')

window.onload =function(){
    var array=[];
    var tabela = document.getElementById('tabela');
    array =[{'body':'nath', 'data':'02111991'}, {'body':'pedro', 'data':'07081995'},{'body':'let', 'data':'17091993'}]
    for(let i = 0; i<array.length;i++){
        var newRow = tabela.insertRow();
        var newCell1 = newRow.insertCell();
        newCell1.innerHTML = array[i].body;
        var newCell2 = newRow.insertCell();
        newCell2.innerHTML = array[i].data;
        var newCell3 = newRow.insertCell();
        newCell3.innerHTML =`<img class="icons" id='iconEdit' onclick="editItem()"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF7SURBVGhD7Zk9SgNBHEfXRgRBz2ClhY3gTWwsFEHs/Si0t1EU0nkBwVYEvYIK3kHt9A7i1/vhDgzjbHaLxf2P/B88SDabMC+ZmSVJ5ThOcczgGd7jtg6UyCze4lfkCIsiF1FczLiIoPmYLhFBszFNES+4j+/RsaC5mKaIV1xAsYq5mF00wbjptIcxB5iec4eD07Ym3nAFxTxqmqXn6DozKF0XtmI0fXIRer5eZzCaIjTY8+RYk6YjtLAnUNMlfTzWfERAMReYnieLiRC6X9ya8Ii/xCNqPaIPPKLWI/rAI2o9og/+dYRMv56ajRBzuImX+InxAJ9wCoXpiJQ1TAf6jDtYTETgAdMB5zQdIU4xN/BYMxGLOPlz8xdLeIj6jcl0hDjCG2yKCaxjvAGYm07XqIF1iblCkxFC22p4l9tittBkxDR+YAhpi9F1xlyEWMY4okuMSTYwFyKLijnBePDalR5RG8AxamsuAv0voRh9MppmWjOO4zhOD1TVN1UOi173zKd0AAAAAElFTkSuQmCC">`;
        var newCell4 = newRow.insertCell();
        newCell4.innerHTML =`<img class="icons" id='iconDelete' onclick="deleteItem()"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVGhD7ZlPK0VhEMaPFFn48wHkC7C2UjbKN5DspGRjJdnY8wGUyNbOgrUoKZaysCFhIUsLKyuep2Zq0nvvofvO9XaaX/02c+/ceZ/TbU6dUwVB2QzBTXgNH9t4AVdhHyyOUXgPv/7gFRyERXEOU4etcx8Wwzi0h9uCMy2chQdQv/sJh2ERzEE92C0LNfTCd6g9k7AIFqAe6pKFX/ACtWeKBW/W4V6NZ1AP9Sa1Oj+g9pxIrZ1LsCN4hXXgf3oIO6IxQVbgtngHU0O85I1VZ8/DbPCqpAZ6yTXuQuODPEDdLtxAWudmspvH9vC3tM5NZz9Tux6EdYX3BK3zXmGxPWMsCK0WSgSpI4IItieC5CCCCLYnguQgggi2J4LkIIIItieC5CCCCLYnguQgggi2J4LkoPFBbuCGuCs1yifuWqe2h4fU+pPUftr1IF66BdmBqYFerkEXFmFqoJfT0IUB+AxTQ3PLF6U90I0J+ApTw3PJp/58S+zOCOT/9xieZvQILsN+GARB0Hiq6hssgzz3gTKVtQAAAABJRU5ErkJggg==">`;
    }
};

function editItem(){
    //TODO edit ICON
    console.log("clicou no lapis")
}

function deleteItem(){
    //TODO delete icon
    /**
     * chamar o endpoint do backend
     */
    console.log("clicou no lixo")
}