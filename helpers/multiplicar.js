const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base = 5, listar, hasta) => {
  if (isNaN(base)) throw "No es un numero";
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${i * base}\n`;
      consola +=
        `${base} ${colors.yellow("x")} ${colors.green(i)} = `.green +
        `${i * base}\n`.yellow;
    }

    listar && console.log(consola);

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
