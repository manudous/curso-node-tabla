// Importamos fs de la documentación para grabar en un archivo
const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida, consola = "";

    console.clear();

    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("===================".green);
      console.log("Tabla del:".green, colors.blue(base) );
      console.log("===================".green);
      console.log(consola);
    }

    // Hay que mostrarle el path donde queremos que se guarde y se lo mostramos, sino le pusieramos nada
    // se guardaría directamente en app.js, luego lo que queremos sacar, como tercer parámetro un callback
    // que nos muestre el error y si todo está bien nos saca por consola que se ha creado la tabla.

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) throw err;

    //   console.log(`tabla-${base}.txt creado`);
    // });

    // Es más sencillo utilizar el fs.writeFileSync, si sucede un error habría que
    // atraparlo en tre try/catch

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
