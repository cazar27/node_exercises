const argv = require("./config/yargs").argv;
const colors = require("colors/safe");

const { makeFile, listTable } = require("./helpers/multiply");

let comando = argv._[0];

switch (comando) {
  case "list":
    listTable(argv.base, argv.limit);
    break;

  case "make":
    makeFile(argv.base, argv.limit)
      .then((file) => console.log(`Archivo creado: `, colors.green(file)))
      .catch((e) => console.log(e));
    break;

  default:
    console.log("Comando no reconocido");
}
