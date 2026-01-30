const express = require('express')
const router = express.Router();
const path = require('path')
const rootDir = require('../utils/path')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))


router.get('/rent-movies', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'movies.html'))
})



router.post('/rent-movies', (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
})

module.exports = router

