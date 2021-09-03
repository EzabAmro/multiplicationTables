const argv = require("yargs")
                .option("b", {
                    alias: "base",
                    type: "number",
                    demandOption: true,
                    describe: "Base of the multiplication table"
                })
                .option("l", {
                    alias: "list",
                    type: "boolean",
                    default: false,
                    describe: "Displays the multiplication table on the console"
                })
                .option("u", {
                    alias: "until",
                    type: "number",
                    default: 10,
                    describe: "Iterations amount of the multiplication"
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) throw new Error("base value must be a number");
                    if (isNaN(argv.u)) throw new Error("until value must be a number");
                    return true;
                })
                .argv;


module.exports = {argv};