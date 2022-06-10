const mongoose = require('mongoose')
const { stringify } = require('querystring')
mongoose.connect('mongodb://localhost:27017/wpu2')



// // Menambah 1 Data
// const contact1 = new Contact({
//     nama: 'Fathur',
//     nohp: '08123456789',
//     email: 'Fathur@gmail.com'
// })

// // simpan ke collection
// contact1.save().then((contact) => console.log('contact'));

