const mongoose = require('mongoose')
const { getMaxListeners } = require('process')
const { stringify } = require('querystring')

mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
    useCreateIndex: true
})

// // menambahkan 1 data
// const contact1 = new Contact({
//     nama: "fathur rohman",
//     nohp: '08123456789',
//     email: "fathur@gmail.com"
// })

// // simpan ke collection
// contact1.save().then(() => console.log(contact1))