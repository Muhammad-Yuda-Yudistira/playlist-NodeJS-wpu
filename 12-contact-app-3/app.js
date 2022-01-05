const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    }
}).demandCommand();

// menampilkan daftar semua nama & no HP contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler() {
        contacts.listContact();
    }
});

// menampilkan detail sebuah contact
yargs.command({

});

yargs.parse();