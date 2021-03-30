const express = require('express')
const router = express.Router()
const Topping = require('../models/topping')

router.post('/topping', async (req, res) => {
  const topping = new Topping(req.body)
  await topping.save()
  console.log(topping)
  res.render('topping', { topping })
})

module.exports = router