
// const nama = 'yudistira yuda';
// const cetakNama = (nama) => `nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require('fs'); //core module
// const cetakNama = require('./coba'); //local module
// const moment = require('moment'); //third party module / npm module / node_modules

// const cetakNama = require('./coba');
// const PI = require('./coba');
const coba = require('./coba');

console.log(coba.cetakNama('yudistira'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());