const {
  inquirerMenu,
  readInput,
  pause,
  printMenu,
  confirm,
  printMultipleMenu
} = require("./helpers/inquirer");
require('dotenv').config();
const Searchs = require("./models/searchs");

const main = async () => {
  let opt = "";
  const searchs = new Searchs();
  do {
    
    opt = await inquirerMenu();
    const searchs = new Searchs();

    switch (opt) {
      case "1":
        // Pedir localizacion
        const term = await readInput(
          "Indique una ciudad para conocer el clima"
        );
        const locations  = await searchs.city(term);
        
        //console.log(locations);
        // Mostrar opicones
        const choicesListChoice = await locations.map((loc, index) => {
          const idt = `${index + 1}`.green;
          return {
            value: loc.id,
            name: `${idt}` + ` ${loc.name}`.white
          };
        });
        choicesListChoice.unshift({
          value: '0',
          name: `0`.green + ` Cancelar`.white
        });
        
        // Seleccionar un lugar
        const id  = await printMenu(choicesListChoice);
        const lugarSelect = locations.find( loc => loc.id === id );
        console.log(lugarSelect);
        // Mostrar Clima
        console.log(`\nInformacion de la ciudad\n`.green);
        console.log(`Ciudad`,lugarSelect.name);
        console.log(`Lat`,lugarSelect.lat);
        console.log(`Lng`,lugarSelect.lng);
        console.log(`Temperatura`);
        console.log(`Mímina`);
        console.log(`Máxima`);
        pause();
        break;

      case "2":
        break;
    }
    await pause();
  } while (opt !== "0");
};

main();
