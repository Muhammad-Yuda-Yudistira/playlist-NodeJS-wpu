const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { loadContact, findContact } = require('./utils/contacts')
const app = express()
const port = 3000

// configurasi ejs
app.set('view engine', 'ejs')

// third-party middleware
app.use(expressLayouts)

// built-in middleware
app.use(express.static('public'))


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
  const contacts = loadContact()
  res.render('contact', {
    title: 'Contact',
    layout: 'layouts/main-layout',
    contacts
  })
})

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama)
  res.render('detail', {
    title: 'Detail',
    layout: 'layouts/main-layout',
    contact
  })
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})