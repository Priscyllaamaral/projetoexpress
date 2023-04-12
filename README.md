# projetoexpress

## npm init -y
## npm i express body-parser
## npm run server

### utlizar o postman para testar as rotas


    var express = require('express');
    var bodyparser = require('body-parser');
    var app = express();
    app.use(bodyparser.json());

    let posts = [];

    app.get('/', function(req, res) {
        console.log("aqui "+posts);
        res.send(posts);
    });

    app.get('/post/:id', (req, res) => {
        res.send(`user ${req.params.id}`)
    });

    app.post('/post', function (req,res) {
    
        posts.push(req.body);
        res.send(posts);
        console.log("post");
    });

    app.delete('/post/:nome', function (req,res){
        let y = posts.find(x => x.nome == req.params.nome);
        res.send(y)
        console.log(y)
    });

    app.patch('/post/:nome', function (req,res){
        let y = posts.find(x => x.nome == req.params.nome);

        y.nome = req.body.nome;
        y.idade = req.body.idade;

        res.send(y)
    })

    app.put('/post/:nome', function(req,res){
        let y = posts.find(x => x.nome == req.params.nome);

        y.nome = req.body.nome;
        y.idade = req.body.idade;

        res.send(y)

    })

    app.listen(3000, function() {
        console.log('App de Exemplo escutando na porta 3000!');
    });
