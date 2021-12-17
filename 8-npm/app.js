const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('yudistira.belajar@gmail.co'));
// console.log(validator.isMobilePhone('07812345678', 'id-ID'));
// console.log(validator.isNumeric('07812345678'));

// console.log(chalk.bold.bgCyan.white('Hello world!'));
const nama = 'yudistira';
const pesan = chalk`The maintainers of chalk and {bgBlue.white.bold thousands} of other packages are working with Tidelift to deliver {bgYellow.black commercial} support and nama saya : ${nama}.`
console.log(chalk(pesan));