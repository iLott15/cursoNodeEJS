const express = require('express'); //chamando o express
const app = express(); //instanciando e guardando o express na variável app

app.set("view engine", "ejs"); // está falando para o express, que a ferramente que vai ser utilizada para renderizar html, vai ser utilizado o ejs

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver Aplicações/serviços de forma fácil."
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML."
        },
        {
            title: "M",
            message: "uito fácil de usar."
        },
        {
            title: "A",
            message: "gora teste seus conhecimentos."
        },
        {
            title: "I",
            message: "nteligência é a chave a sucesso."
        },
        {
            title: "S",
            message: "eu sucesso depende de você."
        },
    ];

    const subtitle = "A templating language for creating HTML pages using JavaScript."

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    }); //app.get está criando uma rota, a / refere-se ao nome do site ---- o ejs já entende que os arquivos estão dentro da pasta view
});

app.get("/about", function (req, res) { // é o nome do site/sobre
    res.render("pages/about");
});

app.listen(4040); //carregando tudo do express, com a função listen q irá ouvir a porta 8080
console.log('Server OK!');