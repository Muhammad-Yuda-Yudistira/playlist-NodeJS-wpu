const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

require('./utils/db')
const Contact = require('./model/contact')

const app = express()
const port = 3000

// setup EJS
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded())

// configurasi flash
app.use(cookieParser('secret'))
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
)
app.use(flash())

// halaman home
app.get('/', (req, res) => {
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
    res.render('index', { 
        nama: 'Yudistira Yuda', 
        title: 'Halaman Home',
        mahasiswa,
        layout: 'layouts/main-layout'
    });
})

// halaman about
app.get('/about', (req, res) => {
    res.render('about', { 
        layout: 'layouts/main-layout',
        title: 'Halaman About',
     });
})

// halaman contact 
app.get('/Contact', async (req, res) => {
    // Contact.find().then((contact) => {
    //     res.send(contact)
    // })
    
    const contacts = await Contact.find()

    res.render('contact', { 
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
        contacts,
        msg: req.flash('msg'),
     });
})

// halaman detail contact
app.get('/Contact/:nama', async (req, res) => {
    const contact = await Contact.findOne({ nama: req.params.nama })

    res.render('detail', { 
        layout: 'layouts/main-layout',
        title: 'Halaman Detail Contact',
        contact,
     })
})

app.listen(port, () => {
    console.log(`Mongo contact app | listening at http://localhost:${port}`)
})