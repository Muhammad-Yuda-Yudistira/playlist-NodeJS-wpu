const fs = require('fs');
const { rawListeners } = require('process');

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

const findContact = (nama) => {
    const contacts = loadContact()
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
    return contact
}

// menimpa data contacts.json
const saveContact = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

// tambah data contact baru
const addContact = (contact) => {
    const contacts = loadContact()
    contacts.push(contact)
    saveContact(contacts)
}

// cek nama yang duplikat
const cekDuplikat = (nama) => {
    const contacts = loadContact()
    return contacts.find((contact) => contact.nama === nama)
}

module.exports = { loadContact, findContact, addContact, cekDuplikat }