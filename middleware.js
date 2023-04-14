// arquivo chamado index.js dentro da pasta middleware  
  
  function fazerOutraCoisa (req, res, next){
      console.log('entrou no middleware');
      next();
  }


  module.exports = fazerOutraCoisa;
