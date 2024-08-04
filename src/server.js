const express = require("express");
const path = require("path")
const homeRoute = require('../routers/home')
const app = express();

//configuração de arquivos estaticos

app.use(express.static(path.join(__dirname, "./src/public")))

// inicializando para a visualizaçaõ

app.set("views", path.join(__dirname,"../views"));
app.set("view engine", 'ejs');

// uando rotas

app.use("/", homeRoute)


app.get("/",(req, res) =>{
    req.end("oi")
})

app.listen(3001, ()=>{
    console.log("Servidor ativo na porta http//:localhost:3001");
})