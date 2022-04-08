// core modules
// file system
const fs = require('fs')

// import * as fs from 'fs';

// menulis string ke file secara synchronuous
// try {
//     fs.writeFileSync('datas/test.txt', 'Hello world secara synchronuous!')
// } catch (e) {
//     console.log(e)
// }

// menulis string ke file secara asynchronuous
// fs.writeFile('data/test.txt', 'Hello world secara asynchronuous!', (err) => {
//     console.log(err)
// })
// fs.writeFile('datas/test.txt', 'Hello world secara asynchronuous!', (err) => {
//     if(err) throw err
// })

// membaca file synchronuous
// data = fs.readFileSync('data/test.txt')
// console.log(data.toString())
// data = fs.readFileSync('datas/test.txt', 'utf-8')
// console.log(data)

// membaca file asynchronuous
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

// readline
const readline = require('readline')

// konfugurasi
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
})

// rl.question('Masukan nama anda: ', (nama) => {
//   rl.question('Masukan umur anda: ', (umur) => {
//     console.log(`Halo nama saya ${nama}, saya berumur ${umur} tahun.`)
    
//     rl.close()
//   })
// })
rl.question('Masukan nama anda: ', (nama) => {
  rl.question('Masukan no HP anda: ', (noHP) => {
    const contact = { nama, noHP }
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)

    contacts.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log('Terimakasih telah memasukan data!')

    rl.close()
  })
})