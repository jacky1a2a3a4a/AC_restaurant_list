const express = require('express')
const app = express()
const port = 3000
// 載入express-hbs
const { engine } = require('express-handlebars')
//引用restaurants.json資料
const restaurants = require('./public/jsons/restaurants.json').results

//Express提供的中間件函數
app.use(express.static('public'))
// 載入express-hbs
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs');
app.set('views', './views');


app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  const keyword = req.query.search?.trim().toLowerCase()
  const matchedRst = keyword ? restaurants.filter((rst) => {
    return Object.values(rst).some((property) => {
      return typeof property === 'string' && property.toLowerCase().includes(keyword)
    })
    }) : restaurants
res.render('index', { restaurants: matchedRst, keyword })
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  const restaurant = restaurants.find((rst) => rst.id.toString() === id)
  res.render('detail', { restaurants, restaurant })
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})
