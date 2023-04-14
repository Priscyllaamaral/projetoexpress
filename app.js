# projetoexpress

## npm init -y
## npm i express body-parser
## npm run server

### utlizar o postman para testar as rotas



    var express = require('express');
    var bodyparser = require('body-parser');
    var app = express();
    var wiki = require('./router/index');

    //body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body
    app.use(bodyparser.json());
    app.use("/", wiki);

    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send("Something broke!");
    });

    var requestTime = function (req, res, next) {
        req.requestTime = Date.now();
        console.log(req.requestTime, Date.now());
        next();
      };

    app.use(requestTime);
    app.use('/media',express.static('public'));

    app.listen(3000, function() {
      console.log('App de Exemplo escutando na porta 3000!');
    });
