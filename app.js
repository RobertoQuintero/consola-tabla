const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");
// console.clear();
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

console.log("base: yargs", argv.b);
const { base, listar, hasta } = argv;
crearArchivo(base, listar, hasta)
  .then((nombreArchivo) => console.log(`${nombreArchivo} creado`.rainbow))
  .catch((err) => console.log(err));
