// arquivo chamado index.js dentro da pasta contoller

      const modulo = require('../modulo');
      let posts = [];

      exports.post = (req, res, next) => {
          posts.push(req.body);
          res.status(201).send(posts);
          console.log("post");
      };
      exports.put = (req, res, next) => {
          let usuario = posts.find(x => x.nome == req.params.nome);
          usuario.nome = req.body.nome;
          usuario.idade = req.body.idade;
          res.status(201).send(usuario);
      };
      exports.patch =(req, res, next) =>{
          let usuario = posts.find(x => x.nome == req.params.nome);

          usuario.nome = req.body.nome;
          usuario.idade = req.body.idade;

          res.status(201).send(usuario);
      }
      exports.all = (req,res, next) =>{
          console.log('Accessing the secret section ...');
          res.status(404).send('Seção secreta');
      }
      exports.delete = (req, res, next) => {
          posts = posts.filter(x => x.nome != req.params.nome);
          res.status(201).send(posts);
      };
      exports.get = (req, res, next) => {
          res.status(200).send(posts);
          console.log(modulo.area(10));
      };
      exports.postId = (req, res, next) => {
          res.status(201).send(`user ${req.params.id}`);

      }
