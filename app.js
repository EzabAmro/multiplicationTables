const {functionCreateFile} = require('./helpers/multiply');
const {argv} = require("./config/yargs");

console.clear();

//console.log(process.argv);
console.log(argv);
console.log(argv.b);


/* 

const [, , argument3 = "base=5"] = process.argv;
const [, base] = argument3.split("=");

console.log(base);
 */

//const base = 7;


functionCreateFile(argv.b, argv.l, argv.u)
    .then((fileName) => console.log(`File ${fileName} created`))
    .catch((error) => console.log(error));
