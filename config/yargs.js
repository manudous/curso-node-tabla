const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: 5,
    describe: "Es la base de la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: 10,
    describe: "Muestra hasta que número se va a multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.h)) {
      throw "El multiplicador tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
