const express = require('express')
const expressLayouts = require('express-ejs-layouts')

require('./utils/db')
const Contact = require('./model/contact')

// flash massage module
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')



const app = express()
const port = 3000

// setup ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// konfigurasi flash message
app.use(cookieParser('secret'))
app.use(session({
  cookie: { maxAge: 6000 },
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))
app.use(flash())

// Halaman Home
app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Yudistira',
            nohp: '08123456789',
            email: 'yudistira@gmail.com'
        },
        {
            nama: 'Fathur',
            nohp: '08123456789',
            email: 'fathur@gmail.com'
        },
        {
            nama: 'Faisal',
            nohp: '08123456789',
            email: 'faisal@gmail.com'
        }
    ]
    res.render('index', { 
      nama: 'Yudistira', 
      title: 'Home', 
      mahasiswa,
      layout: 'layouts/main-layout'
     })
})

// Halaman About
app.get('/about', (req, res) => {
    res.render('about', {
      title: 'About',
      layout: 'layouts/main-layout'
    })
  })

// Halaman Contact
app.get('/contact', async (req, res) => {
    // Contact.find().then(contact => res.send(contact))
    const contacts = await Contact.find()

    res.render('contact', {
      title: 'Contact',
      layout: 'layouts/main-layout',
      contacts,
      msg: req.flash('msg')
    })
  })

  // halaman detail contact
app.get('/contact/:nama', async (req, res) => {
    const contact = await Contact.findOne({nama: req.params.nama})
    res.render('detail', {
      title: 'Detail',
      layout: 'layouts/main-layout',
      contact
    })
  })

app.listen(port, (result) => {
    console.log(`Mongo Contact App | listening at http://localhost:${port}`)
})