const express = require('express'); //chamando o express
const app = express(); //instanciando e guardando o express na variável app

app.set("view engine", "ejs"); // está falando para o express, que a ferramente que vai ser utilizada para renderizar html, vai ser utilizado o ejs

app.get("/",function(req, res){
    res.render("index"); //app.get está criando uma rota, a / refere-se ao nome do site
});

app.get("/sobre",function(req, res){ // é o nome do site/sobre
    res.render("about");
});

app.listen(4040); //carregando tudo do express, com a função listen q irá ouvir a porta 8080
console.log('rodando');