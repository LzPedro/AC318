var path    = require('path');
var db      = require('../db.js');
var mysql   = require('mysql');
var express     = require('express');
var app         = express();

var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

   


module.exports = {

    login2: function(req,res){
        var connection = mysql.createConnection(db.dbData);
        var data = req.body;
        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM Usuario WHERE name = ? and password= ?";
                connection.query(query, [data.name,data.password], function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        console.log(result);
                        res.send(200);
                    }
                });
                connection.end();
            }
        });
    }
    login: login,
    deleteUsuarioById : function(req, res){
        var connection = mysql.createConnection(db.dbData);
    
        var id = req.params.id;
        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "DELETE FROM usuario WHERE id = ?";
                connection.query(query, [id], function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        console.log(result);
                        res.send(result);
                    }
                });
                connection.end();
            }
        });
    },
    getUsuarioById : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var id = req.params.id;
        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM Usuario WHERE id = ?";
                connection.query(query, [id], function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        console.log(result);
                        res.send(result);
                    }
                });
                connection.end();
            }
        });
    },
    getAllUsuarios : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM Usuario";
                connection.query(query, function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        console.log(result);
                        res.send(result);
                    }
                });
                connection.end();
            }
        });
    },
    saveUsuario : function(req, res){
        var connection = mysql.createConnection(db.dbData);
        console.log(req.body);
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        connection.connect(function(err) {
            var query = "INSERT INTO Usuario(name, email, password) VALUES (?, ?, ?)";
            connection.query(query, [name, email, password], function (err, result, fields) {
                if (err) {
                    if (err.code == 'ER_DUP_ENTRY') {
                        console.log(err);
                        res.sendStatus(409);
                    } else {
                        console.log(err);
                        res.sendStatus(500);
                    }
                } else {
                    console.log(result);
                    res.sendStatus(200);
                }
            });
            connection.end();
        });
    },
    updateUsuario : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        connection.connect(function(err) {
            var query = "UPDATE Usuario SET name = ?, email = ?, password = ? WHERE name = ?";
            connection.query(query, [name, email, password, name], function (err, result, fields) {
                if (err) {
                    if (err.code == 'ER_DUP_ENTRY') {
                        console.log(err);
                        res.sendStatus(409);
                    } else {
                        console.log(err);
                        res.sendStatus(500);
                    }
                } else {
                    console.log(result);
                    res.sendStatus(200);
                }
            });
            connection.end();
        });
    }
}