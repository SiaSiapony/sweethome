const express = require('express')
const router = express.Router()
const Manage = require('../models/manage')

router.post('/index', async (req, res) => {
  const manage = new Manage(req.body)
  await manage.save()
  console.log(manage)
  res.render('index', { manage })
})

module.exports = router