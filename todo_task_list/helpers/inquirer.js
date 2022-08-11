const inquirer = require("inquirer");
require("colors");

const menuOpt = [
  {
    type: "list",
    name: "option",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear tarea`
      },
      {
        value: "2",
        name: `${"2.".green} Listar tareas`
      },
      {
        value: "3",
        name: `${"3.".green} Listar tareas completadas`
      },
      {
        value: "4",
        name: `${"4.".green} Listar tareas pendientes`
      },
      {
        value: "5",
        name: `${"5.".green} Cambiar estado de las tareas`
      },
      {
        value: "6",
        name: `${"6.".green} Borrar tarea`
      },
      {
        value: "0",
        name: `${"0.".green} Salir`
      }
    ]
  }
];

const inquirerMenu = async () => {
  console.clear();

  console.log("======================".green);
  console.log("Seleccione una opcion".gray);
  console.log("======================".green);

  const opt = await inquirer.prompt(menuOpt);

  return opt;
};

const pause = async () => {
  const options = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"enter".green} para continuar`.white
    }
  ];

  console.log("\n");
  await inquirer.prompt(options);
};

const confirm = async (message) => {
  const options = [
    {
      type: "confirm",
      name: "ok",
      message
    }
  ];

  console.log("\n");
  const {ok} = await inquirer.prompt(options);
  return ok;
};

const readInput = async ( message ) => {
  
  const options = [
    {
      type: "input",
      name: "desc",
      message,
      validate( value ){
        if(value.length === 0 ) {
          return 'Por favor ingrese un valor valido'.red
        }
        return true;
      }
    }
  ];

  console.log("\n");
  const { desc } = await inquirer.prompt(options);
  return desc;
};

const printMenu = async ( choices = [] ) => {
  const menuOpt = [
    {   
      type: "list",
      name: "id",
      message: "¿Que tarea desea borrar?",
      choices
    }
  ];
  const {id} = await inquirer.prompt(menuOpt);

  return id;
};


const printMultipleMenu = async ( choices = [] ) => {
  const menuOpt = [
    {   
      type: "checkbox",
      name: "ids",
      message: "¿Que tarea desea marcar como completada?",
      choices
    }
  ];
  const {ids}  = await inquirer.prompt(menuOpt);
  return ids;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  printMenu,
  confirm,
  printMultipleMenu
};
