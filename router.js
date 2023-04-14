// arquivo chamado index.js dentro da pasta router   
   
    const express = require('express');
    const router = express.Router();
    const controller = require('../controller/index')
    const index = require('../middleware/index')

    router.get('/post', index,  controller.get);
    router.get('/post/:id', controller.postId);
    router.post('/post', controller.post);
    router.delete('/post/:nome', controller.delete);
    router.put('/post/:nome', controller.put)
    router.patch('/post/:nome', controller.patch);
    router.all('/secret', controller.all)



    module.exports = router;
