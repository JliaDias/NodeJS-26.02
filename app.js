//Importação do módulo express
const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.end("Página Inicial")
})

//Criação de rotas
app.get("/", function(req,res){
    res.end("Node.JS")
})

app.get("/contato", function(req,res){
    res.send("Página de Contato")
})

app.get("/editar", function(req,res){
    res.send("Página para Editar Formulário")
})

app.get("/visualizar", function(req,res){
    res.end("Página para Visualização")
})

//parametro ex: item
app.get("/cadastrar/:item/:eu", function(req,res){
    res.end("Item: " + req.params.item + "\nTeste: " +req.params.eu)
})

//Criando o servidor web com a porta 8081 
app.listen(8081, function(){
    console.log("Servidor está rodando!!")
})