// core module
// file system
const fs = require('fs');
const { rawListeners } = require('process');

const chalk = require('chalk')
const validator = require('validator')

// membuat folder data ketika belum ada
const dirPath = 'data'
if( !fs.existsSync(dirPath) ) {
    fs.mkdirSync(dirPath)
}

// membuat file contacts.json ketika belum ada
const dataPath = 'data/contacts.json'
if( !fs.existsSync(dataPath) ) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    return contacts
}

const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP }
    // const file = fs.readFileSync('data/contacts.json', 'utf-8');
    // const contacts = JSON.parse(file);
    const contacts = loadContact()

    // cek duplikat nama
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if(duplikat) {
        console.log(
            chalk.red.inverse.bold('Nama sudah terdaftar, gunakan nama lain!')
            )
        return false
    }

    // cek email
    if(email) {
        if (!validator.isEmail(email)) {
            console.log(
                chalk.red.inverse.bold('Email tidak valid, gunakan email lain!')
                )
            return false
        }
    }

    // cek nomor handphone
    if (!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log(
            chalk.red.inverse.bold('Nomor HP tidak valid!')
            )
        return false
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log(chalk.green.inverse.bold('Terimakasih sudah memasukan data!'))
}

const listContact = () => {
    const contacts = loadContact()
    
    console.log(chalk.blue.inverse.bold('Daftar kontak : '))

    contacts.forEach((contact, i) => {
        console.log(`${i +1} ${contact.nama} - ${contact.noHP}`)
    })
}

const detailContact = (nama) => {
    const contacts = loadContact()

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())

    if(!contact) {
        console.log(chalk.red.inverse.bold(`Nama kontak ${nama} tidak ditemukan!`))
        return false
    }

    console.log(chalk.blue.inverse.bold(contact.nama))
    console.log(contact.noHP)
    if(contact.email) {
        console.log(contact.email)
    }
}

const deleteContact = (nama) => {
    const contacts = loadContact()

    const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase())

    if(contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`Nama kontak ${nama} tidak ditemukan!`))
        return false
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))

    console.log(chalk.green.inverse.bold(`data kontak ${nama} berhasil di hapus!`))
}

module.exports = { simpanContact, listContact, detailContact, deleteContact }