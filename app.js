const { crearArchivo } = require("./helpers/multiplicar");
const colors = require('colors');
const argv = require("./config/yargs");

// Ver los argumentos
// console.log(process.argv);
// Destructuramos y cogemos el tercer argumento y le damos un valor de 5
// const [, , arg3 = "base=5"] = process.argv;
// extraemos solo el número
// const [, base = 5] = arg3.split("=");

// console.log(argv);

// base = 4;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
