const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// configurasi ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

const mahasiswa = [
  {
    nama: 'Yudistira',
    email: 'yudistira@gmail.com'
  },
  {
    nama: 'Fathur',
    email: 'Fathur@gmail.com'
  },
  {
    nama: 'Faisal',
    email: 'Faisal@gmail.com'
  },
]

app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname })
    res.render('index', { 
      nama: 'Yuda', 
      title: 'Home', 
      mahasiswa,
      layout: 'layouts/main-layout'
     })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    layout: 'layouts/main-layout'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    layout: 'layouts/main-layout'
  })
})

app.get('/product/:id', (req, res) => {
res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.query.category}`)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})