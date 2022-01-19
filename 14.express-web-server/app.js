const express = require('express')
const { getMaxListeners } = require('process')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>')
// res.json({
//     nama: 'yudistira',
//     email: 'yudistira@gmai.com',
//     noHP: '123456789',
//     })
res.sendFile('./index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname })
})

app.get('/Contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname })
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

// const http = require('http');
// const fs = require('fs');

// const port =3000

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(400);
//             res.write('Error: file not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// }

// http
// .createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type' : 'text/html',
//     });

//     const url = req.url;

//     switch(url) {
//         case '/about':
//             renderHTML('./about.html', res);
//             break;
//         case '/contact':
//             renderHTML('./contact.html', res);
//             break;
//         default:
//             renderHTML('./index.html', res);
//     };

//     // if( url === '/about') {
//     //     renderHTML('./about.html', res);
//     // } else if( url === '/contact') {
//     //     renderHTML('./contact.html', res);
//     // } else {
//     //     // res.write('Hello World!');
//     //    renderHTML('./index.html', res);
//     // }
// })
// .listen(port, () => {
//     console.log(`Server is listening on port ${port}..`);
// });