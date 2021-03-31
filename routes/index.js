var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index');
});

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

router.get('/cashier', function(req,res,next){
  res.render('cashier')
})

router.get('/cook', function(req,res,next){
  res.render('cook')
})

module.exports = router;
