require("colors");

const {
  inquirerMenu,
  pause,
  readInput,
  confirm,
  printMenu,
  printMultipleMenu
} = require("./helpers/inquirer");
const { writeDB, readDB } = require("./helpers/readFile");
const Tasks = require("./models/tasks");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  const tasksDB = readDB();

  if (tasksDB) {
    tasks.setlist(tasksDB);
  }

  do {
    // call function to print menu
    opt = await inquirerMenu();

    switch (opt.option) {
      case "1":
        const desc = await readInput("Descripcion de la tarea: ");
        tasks.createTask(desc);
        break;

      case "2":
        console.log(tasks.printList());
        break;

      case "3":
        console.log(tasks.printListDoIt(true));
        break;

      case "4":
        console.log(tasks.printListDoIt(false));
        break;

      case "5":

        const choicesList = await tasks.listArr().map((task, index) => {
          const idt = `${index + 1}`.green;
          return {
            value: task.id,
            name: `${idt}` + ` ${task.description}`.white,
            checked: task.doit
          };
        });
        const ids = await printMultipleMenu(choicesList);

        console.log(ids);

        tasks.toggleDoit(ids);

        break;

      case "6":
        const choicesListDelete = await tasks.listArr().map((task, index) => {
          const idt = `${index + 1}`.green;
          return {
            value: task.id,
            name: `${idt}` + ` ${task.description}`.white
          };
        });
        choicesListDelete.unshift({
          value: '0',
          name: `0`.green + ` Cancelar`.white
        });
        const id  = await printMenu(choicesListDelete);
        
        if (id !== '0') {
          const confirmDelete = await confirm("Esta seguro que desea eliminar");
          
          if (confirmDelete) {
            tasks.deleteTask(id);
            console.log("tarea elimninada correctamente");
          }
        }
        break;
    }

    writeDB(tasks.listArr());
    await pause();
  } while (opt.option !== "0");
};

main();
