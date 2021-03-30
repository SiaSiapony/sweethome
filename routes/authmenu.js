const express = require('express')
const router = express.Router()
const Menu = require('../models/menu')

router.post('/menu', async (req, res) => {
  const menu = new Menu(req.body)
  await menu.save()
  console.log(menu)
  res.render('menu', { menu })
})

module.exports = router