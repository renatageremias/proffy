//servidor
const express = require('express')
const server = express()

const { 
    pageLandig, 
    pageStudy, 
    pageGiveClasses,
    saveClasses} = require('./pages')


//configurar nunjunks
const nunjucks = require('nunjucks')    
nunjucks.configure('src/views',{   
    express: server,
    noCache: true,
})


//inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
//Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLandig)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

//start do servidor
.listen(5500);


