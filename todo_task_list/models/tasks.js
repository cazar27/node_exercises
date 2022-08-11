const Task = require("./task");

class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  deleteTask(id = "") {
    if (this._list[id]) {
      console.log(id);
      delete this._list[id];
    }
  }

  listArr() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }

  setlist(taskList = []) {
    taskList.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  printList() {
    let print = `\n`;
    if ((this.listArr().length === 0)) {
      print += `No hay tareas para mostrar`.red;
    } else {
      this.listArr().forEach((task, index) => {
        print += `${index + 1}`.green + ` ${task.description}, `.white;
        print += task.doit ? `Completada`.green : `Pendiente`.red;
        print += "\n";
      });
    }
    return print;
  }

  printListDoIt(doIt = true) {
    let print = `\n`;

    const list = this.listArr().filter((task) => task.doit === doIt);
    if ((list.length === 0)) {
      print += `No hay tareas para mostrar`.red;
    } else {
      list.forEach((task, index) => {
        print += `${index + 1}`.green + ` ${task.description}, `.white;
        print += task.doit ? `Completada`.green + ` la tarea agregada el ${task.date.toISOString()}`.white : `Pendiente`.red;
        print += "\n";
      });
    }

    return print;
  }
  
  toggleDoit( ids = [] ) {

    ids.forEach( id => {
      const task = this._list[id];
      if(!task.doit) {
        task.doit = true;
      }
    });

    // desmarcamos como completadas los ids que no esten incluidos en tareas completadas
    this.listArr().forEach( task => {
      if(!ids.includes(task.id)) {
        this._list[task.id].doit = false; 
      }
    })

  }

}

module.exports = Tasks;
