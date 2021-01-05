//Imports
const { json } = require('express');
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

require('./models/Metas')
const Meta = mongoose.model('Meta')

//Middleares
app.use(cors())
app.use(express.json())

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-PINGOTHER")
    app.use(cors())
    next()
})

mongoose.connect('mongodb://localhost/celke', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexao com o BD MongoDB foi realizado com sucesso!")
}).catch((err) => {
    console.log("Conexao com o BD MongoDB nao foi realizado com sucesso! " + err)
});

app.post("/metas", async (req,res) => {
   await Meta.create(req.body, (err) => {
       if(err){
           return res.status(400).json({
               error: true,
               message: "Erro: Meta nao cadastrada com sucesso!"
           })
       }
   })
    return res.json({
        error: false,
        message: "Erro: Meta cadastrada com sucesso!"
    })
})


app.get('/metas', async (req,res) => {
    await Meta.find({}).then((metas) => {
        return res.json({
            error: false,
            metas
        })
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado!"
        })
    })

   
})

app.listen(8080, () => {
    console.log("Servidor iniciando na porta 8080: http://localhost:8080")
})