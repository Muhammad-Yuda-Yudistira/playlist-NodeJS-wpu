const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { body, validationResult, check } = require('express-validator')

// flash massage module
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts} = require('./utils/contacts')
const { sendStatus } = require('express/lib/response')
const app = express()
const port = 3000




// configurasi ejs
app.set('view engine', 'ejs')

// third-party middleware
app.use(expressLayouts)

// built-in middleware
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

// halaman daftar contact
app.get('/contact', (req, res) => {
  const contacts = loadContact()
  res.render('contact', {
    title: 'Contact',
    layout: 'layouts/main-layout',
    contacts,
    msg: req.flash('msg')
  })
})

// halaman tambah data contact 
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    title: 'Form Tambah Data Contact',
    layout: 'layouts/main-layout',
  })
})

// proses tammbah data contact
app.post(
  '/contact', 
  [
    body('nama').custom((value) =>{
      const duplikat = cekDuplikat(value)
      if(duplikat) {
        throw new Error('Nama sudah digunakan silahkan ganti nama lain!')
      }
      return true
    }),
    check('email', 'Email Tidak Valid!').isEmail(),
    check('nohp', 'No HP Tidak Valid!').isMobilePhone('id-ID')
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render('add-contact', {
        title: 'Form Tambah Data Contact',
        layout: 'layouts/main-layout',
        errors: errors.array()
      })
    } else {
      const contact = addContact(req.body)
      // kirimkan flash message
      req.flash('msg', 'Data contact berhasil ditambahkan!')
      res.redirect('/contact')
    }
  }
)

// delete contact
app.get('/contact/delete/:nama', (req, res) => {
  const contact = findContact(req.params.nama)

  if(!contact) {
    res.status(404)
    res.send('<h1>404</h1>')
  } else {
    deleteContact(req.params.nama)
    req.flash('msg', 'Data contact berhasil di hapus!')
    res.redirect('/contact')
  }
})

/// halaman tambah data contact 
app.get('/contact/edit/:nama', (req, res) => {
  const contact = findContact(req.params.nama)

  res.render('edit-contact', {
    title: 'Form Ubah Data Contact',
    layout: 'layouts/main-layout',
    contact,
  })
})

// proses ubah data contact
app.post(
  '/contact/update', 
  [
    body('nama').custom((value, {req}) =>{
      const duplikat = cekDuplikat(value)
      if(value !== req.body.oldNama && duplikat) {
        throw new Error('Nama sudah digunakan silahkan ganti nama lain!')
      }
      return true
    }),
    check('email', 'Email Tidak Valid!').isEmail(),
    check('nohp', 'No HP Tidak Valid!').isMobilePhone('id-ID')
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render('edit-contact', {
        title: 'Form Ubah Data Contact',
        layout: 'layouts/main-layout',
        errors: errors.array(),
        contact: req.body,
      })
    } else {
      const contact = updateContacts(req.body)
      // kirimkan flash message
      req.flash('msg', 'Data contact berhasil diubah!')
      res.redirect('/contact')
    }
  }
)

// halaman detail contact
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