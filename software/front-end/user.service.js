
const url = '127.0.0.1:3000'

const http = new XMLHttpRequest()
module.exports={
//cria usuario
createUser: function(user){
    console.log(user);
    http.open("POST", url+ '/usuario',  user)
  /*  request.onload = function () {
          // Begin accessing JSON data here
          var data = JSON.parse(this.response);
          if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
              console.log(movie.title);
            });
          } else {
            console.log('error');
          }*/
},

 updateUser: function(uder,UderId){
    http.open("PUT", url+ '/usuario/' + uderId,  user)
},

 getUsers:function(){
    http.open("GET", url+ '/usuario')
},
 getUserById:function(userId){
    http.open("GET", url+ '/usuario/' + uderId)
}
}
/*
function createUser (user){
    return this.http.post(url + '/usuario',  user);
}

function updateUser (user, userId){
    return this.http.put(url + '/usuario/' + userId, user);
}

function getUser (){
    return this.http.get(url + '/usuario');
}

function getUserById (user, userId){
    return this.http.get(url + '/usuario/' + userId);
}*/
