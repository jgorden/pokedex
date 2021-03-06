var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.send(null);
});
router.get('/dex', function(req, res) {
  var data = {};
  request('http://pokeapi.co/api/v2/pokedex', function (error, response, body) {
    data.body = JSON.parse(body);
    res.json(data.body.results);   
  });
});
router.get('/dex/:dexNum', function(req, res) {
  var data = {};
  request('http://pokeapi.co/api/v2/pokedex/'+ req.params.dexNum, function (error, response, body) {
    data.body = JSON.parse(body);
    res.json(data.body);   
  });
});
router.get('/poke/:id', function(req, res) {
  var data = {};
  var initialCall = new Promise(function(resolve, reject){

    request('http://pokeapi.co/api/v2/pokemon/'+ req.params.id, function (error, response, body) {
      data.standard = JSON.parse(body);
      resolve(true)
    });

    
  });
  var secondCall = new Promise(function(resolve, reject){

    request('http://pokeapi.co/api/v2/pokemon-species/'+ req.params.id, function (error, response, body) {
      data.species = JSON.parse(body);
      resolve(true)
    });

    
  });

  initialCall.then(
    () => {
      secondCall.then(
        () => res.json(data)
      )
    }
  )
  
});


module.exports = router;
