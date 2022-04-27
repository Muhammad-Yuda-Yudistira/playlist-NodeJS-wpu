const http = require('http')
const fs = require('fs')

const port = 3000

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    const url = req.url
    if (url === '/about') {
        res.write('<h1>Halaman About</h1>')
        res.end()
    } else if (url === '/contact') {
        res.write('<h1>Halaman Contact</h1>')
        res.end()
    } else {
        // res.write('Hello world!')  

        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404)
                console.log('Error: file not found')
            } else {
                res.write(data)
            }
            res.end()
        })
    } 
    // res.end()
}).listen(port, () => {
    console.log(`server is listening on port ${port}..`)
})