// var fs = require('fs') // core modules
// var cetakNama = require('./coba.js') // local modules
// var momment = require('momment') // third party modules / npm modules / node_modules

var coba = require('./coba.js')

console.log(
    coba.cetakNama('yudistira'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
)