var ingredientModel= require('../models/ingredient');
module.exports={
    ingredientData:function(req, res){
      ingreModel.ingreData(function(data){
          res.render('ingredient-table',{ingreData:data});
      })
    }
}