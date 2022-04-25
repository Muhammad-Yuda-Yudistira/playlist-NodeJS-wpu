const yargs = require("yargs")
const contacts = require("./contacts")

// console.log(yargs.argv)
yargs.
    command({
        command: 'add',
        describe: 'Menambahkan kontak baru',
        builder: {
            nama: {
                describe: 'Nama Lengkap',
                demandOption: true,
                type: 'string'
            }, 
            email: {
                describe: 'Email',
                demandOption: false,
                type: 'string'
            },
            noHP: {
                describe: 'Nomor Handphone',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            contacts.simpanContact(argv.nama, argv.email, argv.noHP)
        }
    })

yargs.parse()





// const command = process.argv[2]

// if(command === "add") {
//     console.log()
// } else if(command === "delete") {
//     console.log()
// } else if(command === "list") {
//     console.log()
// }


// const contacts = require('./contacts')

// const main = async () => {

//     const nama = await contacts.tulisPertanyaan('Masukan nama anda : ')
//     const email = await contacts.tulisPertanyaan('Masukan email anda : ')
//     const noHP = await contacts.tulisPertanyaan('Masukan no hp anda : ')

//     contacts.simpanContact(nama, email, noHP)
// }

// main()