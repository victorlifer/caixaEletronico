// models/accountModel.js

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.sqlite');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT)");
});

exports.createAccount = (nome, email, senha, callback) => {
    const stmt = db.prepare("INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)");
    stmt.run(nome, email, senha, callback);
    stmt.finalize();
};
