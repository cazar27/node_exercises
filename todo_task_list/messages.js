require("colors");

const showMenu = async () => {
  return new Promise((resolve) => {
    console.clear();
    
    console.log("======================".gray);
    console.log("Seleccione una opcion".green);
    console.log("======================".gray);

    console.log(`${"1.".green} Listar tareas`.green);
    console.log(`${"2.".green} Crear tareas`.green);
    console.log(`${"3.".green} Listar tareas completadas`.green);
    console.log(`${"4.".green} Listar tareas tareas pendientes`.green);
    console.log(`${"5.".green} Completar tareas`.green);
    console.log(`${"6.".green} Borrar Tareas`.green);
    console.log(`${"0.".green} Salir`.green);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question("\nSeleccione una opcion de menu: ".green, (opt) => {
      resolve(opt);
      readline.close();
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(
      `\nPresione ${"ENTER".green} para continuar\n`.white,
      (opt) => {
        readline.close();
        resolve();
      }
    );
  });
};

module.exports = {
  showMenu,
  pause
};
