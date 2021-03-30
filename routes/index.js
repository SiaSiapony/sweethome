var express = require('express');
var router = express.Router();
var {Ing} = require('../models/ingredient')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const ing = await Ing.find();
  res.render('index', {title: "Ing", ing: ing})
});

/* table controller */
var ingredientController= require('../controller/ingredient');
router.post('/ingredient', ingredientController.ingredientData);

/* page */
router.get('/ingredient', function(req,res,next){
  res.render('ingredient');
});

router.get('/topping', function(req,res,next){
  res.render('topping');
});

router.get('/menu', function(req,res,next){
  res.render('menu');
});



module.exports = router;
