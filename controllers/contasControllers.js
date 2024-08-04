
const accountModel = require('../models/accountModel');

exports.getAbrirConta = (req, res) => {
    res.render('abrirConta');
};

exports.postAbrirConta = (req, res) => {
    const { nome, email, senha } = req.body;
    accountModel.createAccount(nome, email, senha, (err) => {
        if (err) {
            return res.status(500).send("Erro ao criar conta.");
        }
        res.redirect('/account/entrar');
    });
};

exports.getEntrarConta = (req, res) => {
    res.render('entrarNaConta');
};
