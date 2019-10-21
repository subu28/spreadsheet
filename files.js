const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next();
})

router.get('/:sheet', function (req, res) {
  res.send(JSON.stringify(req.params));
})

module.exports = router