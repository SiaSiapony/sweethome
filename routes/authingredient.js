const express = require('express')
const router = express.Router()
const Ingredient = require('../models/ingredient')

router.post('/ingredient', async (req, res) => {
  const ingredient = new Ingredient(req.body)
  await ingredient.save()
  console.log(ingredient)
  res.render('ingredient', { ingredient })
})

module.exports = router