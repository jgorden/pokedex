var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.send(null);
});
router.get('/dex', function(req, res) {
  var data = {};
  console.log('does this even run');
  request('http://pokeapi.co/api/v2/pokedex', function (error, response, body) {
    data.body = JSON.parse(body);
    console.log('woohoo');
    res.json(data.body.results);   
  });
  console.log('wooooowooooowoooo')
});
router.get('/other', function(req, res) {
  res.render('other', { title: 'Other' });
});


module.exports = router;
