
const express = require('express')
const server = express()

const{ pageLanding, pageGiveClasses, pageStudy, saveClasses } =require('./pages.js')
//configurar nunjucks 
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
.use(express.urlencoded({extended: true}))
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(3333)

