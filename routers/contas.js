const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/abrir', accountController.getAbrirConta);
router.post('/abrir', accountController.postAbrirConta);
router.get('/entrar', accountController.getEntrarConta);

module.exports = router;
