console.log("Hello My World, I'm @Vinioficial_");
//CRIAÇÃO DE UMA APLICAÇÃO EXPRESS
const express = require('express');//IMPORTADO EXPRESS

const path = require('path');//IMPORTADO PATH
//O PATH RETORNA O CAMINHO DE FORMA DINAMICA

const app = express();
//O APP IRÁ RETORNAR O EXPRESS E TODAS SUAS DEPENDÊNCIA

const router = express.Router();
// ISSO PERMITE QUE A GENTE CRIE DIFERENTES URLs E ENDPOINTs PARA QUE O FRONTEND POSSA FAZER CHAMADAS

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})
//AQUI DEFINIMPS NOSSA ROTA PARA O ARQUIVO HTML USADO O PATH PARA SEMPRE RETORNAR DINAMICAMENTE O QUE VEM ANTES DA "/pages/home.html"
// TUDO QUE SE ENCONTRA DEPOIS DA BARRA "/" SERÃO NOSSA ROTAS.

app.use(router);//CHAMA
//APÓS DECLARAR NOSSAS ROTAS, AQUI FALAMOS PARA NOSSO APP USAR ELAS COMO REFERÊNCIA


app.listen(3333, ()=>{
    console.log('SERVIDOR RODANDO');
})
//AQUI DEFINIMOS QUEM IRÁ ESCUTAR NOSSA CHAMADA E NÓS RESPONDER







app.get('/hello', (req,res)=>{
    console.log('GET FUNCIONANDO');
    res.send({message:'Hello World'});
})
//Dentro do get ja definimos uma função anonima de CALLBACK, que recebe uma requisição com o REQUEST e que retorna uma resposta com o REPLY
app.get('/usuario', (req,res)=>{
    console.log('GET USÁRIO FUNCIONANDO');
    res.send({usuario: 'Vinicius'});
})
