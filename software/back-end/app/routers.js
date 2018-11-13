//require express
var express = require('express');
var path    = require('path');
var usuario = require('./usuario.js');
var historico = require('./historico.js');

//create router object
var router = express.Router();

//export router
module.exports = router;

//Rotas
//usuario
router.route('/usuario/:id').get(usuario.getUsuarioById);
router.route('/usuario').get(usuario.getAllUsuarios);
router.route('/usuario').post(usuario.saveUsuario);
router.route('/usuario').put(usuario.updateUsuario);
router.route('/usuarioLogin').post(usuario.login2);
router.route('/usuario/:id').removeData(usuario.deleteUsuarioById);

//historico
router.route('/historico/:id').get(historico.getHistoricoById);
router.route('/historico').get(historico.getAllHistoricos);
router.route('/historico').post(historico.saveHistorico);
router.route('/historico/:id').delete(historico.deleteHistoricoById);


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../front-end/index.html'));
});