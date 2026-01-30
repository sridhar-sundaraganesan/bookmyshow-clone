const express = require('express')
const app = express();
const path = require('path')
const homeRouter = require('../bookMyShow/routes/home')
const movieRouter = require('../bookMyShow/routes/rent')

app.use(homeRouter)
app.use(movieRouter)

app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next) => {
  console.log('PAGE NOT FOUND');
  res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'))
})


app.listen(3060)