Vamos a utilizar el File System que son carpetas, directorios, archivos,.. todo lo que se encuentre en el servidor.

- [Documentación de Node](https://nodejs.org/dist/latest-v14.x/docs/api/)

Utilizaremos el writeFile

- [Documentacion WriteFile](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback)

## Importar archivos

Para exportarlo lo hacemos de la siguente manera:

```javascript
module.exports = {
  crearArchivo,
};
```

Y despues para importarlo en el archivo sería:

```javascript
const { crearArchivo } = require("./helpers/multiplicar");
```

## Dependencias

#### NodeMon

- Instalamos primero el paquete de colores para distinguir mejor la consola

```bash
$ npm install colors
```

- Instalamos Nodemon, es una utilidad que monitorea los cambios en el código fuente que se esta desarrollando y automáticamente re inicia el servidor. Es una herramienta muy útil para desarrollo de aplicaciones en nodojs.

```
$ npm install nodemon --save-dev
```

- Para instalar una versión específica de un paquete.

```
$ npi i colors@1.0.0
```

- Para actualizar a la última versión del paquete, mejor actualizarlos manualmente por si hay conflictos.

```
$ npm update
```

## Yargs

```
$ npm i yargs
```

Para utilizarlo y nos traemos argv.

```javascript
cosnt argv = require('yargs').argv;
```

### Configuración

```javascript
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
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
  }).argv;
```

Lo exporto por defecto

```javascript
module.exports = argv;
```
