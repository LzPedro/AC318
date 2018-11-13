var path    = require('path');
var db      = require('../db.js');
var mysql   = require('mysql');
var express     = require('express');
var app         = express();

var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = {
    getHistoricoById : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var id = req.params.id;
        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM Historico WHERE id = ?";
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
    getAllHistoricos : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM Historico";
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
	deleteHistoricoById : function(req, res){
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
    saveHistorico : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var corpo = req.body.corpo;
        var data = req.body.data;
        connection.connect(function(err) {
            var query = "INSERT INTO Historico(corpo,data) VALUES (?,NOW())";
            connection.query(query, [corpo,data], function (err, result, fields) {
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
