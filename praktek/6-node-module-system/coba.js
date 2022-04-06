function cetakNama(nama) {
    return `halo, nama saya ${nama}.`
}

const PI = 3.14

const mahasiswa = {
    nama: 'yudistira',
    umur: 21,
    cetakMhs() {
        return `halo, nama saya ${this.nama}, saya berumur ${this.umur}.`
    }
}

class Orang {
    constructor() {
        return 'object orang telah dibuat!'
    }
}

module.exports = { cetakNama, PI, mahasiswa, Orang }