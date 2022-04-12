const validator = require('validator')
const chalk = require('chalk')

// const email = validator.isEmail('yudistira@gmail.c')
// console.log(validator.isMobilePhone('082123456789', 'id-ID'))
// const nama = "51"
// console.log(validator.isNumeric(nama))

// console.log(email)
const nama = 'yudistira'
const umur = 21
// console.log(chalk.bgGreen.underline.yellow('Hello world!'))
// console.log(chalk.bgCyanBright.underline.inverse('Hello', 'world!'))
console.log(chalk `Hello nama {yellow saya ${nama}} umur saya{bgRed ${umur} tahun}.`)