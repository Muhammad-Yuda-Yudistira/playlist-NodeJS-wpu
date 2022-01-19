const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { getMaxListeners } = require('process')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set("layouts extractScripts", true)

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
    res.render('contact', { 
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
     });
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`)
})

app.use('', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})