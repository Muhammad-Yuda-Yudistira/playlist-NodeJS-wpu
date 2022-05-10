const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// configurasi ejs
app.set('view engine', 'ejs')

// third-party middleware
app.use(expressLayouts)
app.use(morgan('dev'))

// built-in middleware
app.use(express.static('public'))

// application middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})


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