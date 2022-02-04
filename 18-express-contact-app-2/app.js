const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { loadContact, findContact } = require('./utils/contacts')
const { getMaxListeners } = require('process')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')

// third-party middleware
app.use(expressLayouts)

// built-in middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname })
    const mahasiswa = [
    {
        nama: 'Yudistira Yuda',
        email: 'yudistira@gmail.com',
    },
    {
        nama: 'Fathur Rohman',
        email: 'fathur@gmail.com',
    },
    {
        nama: 'Muhammad Faisal',
        email: 'faisal@gmail.com',
    },
]
    res.render('layout', { 
        nama: 'Yudistira Yuda', 
        title: 'Halaman Home',
        mahasiswa,
        layout: 'layouts/main-layout'
    });
})

app.get('/about', (req, res) => {
    res.render('about', { 
        layout: 'layouts/main-layout',
        title: 'Halaman About',
     });
})

app.get('/Contact', (req, res) => {
    const contacts = loadContact();
    res.render('contact', { 
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
        contacts,
     });
})


// halaman tambah data
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form Tambah Data Contact',
        layout: 'layouts/main-layout'
    })
})

// halaman detail contact
app.get('/Contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama);

    res.render('detail', { 
        layout: 'layouts/main-layout',
        title: 'Halaman Detail Contact',
        contact,
     });
})

app.use('', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})