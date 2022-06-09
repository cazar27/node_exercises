const fs = require('fs');

console.clear();

let base = 3;
let salida = ''; 

salida += ('================='+ '\n');
salida += ('   Tabla del: ' + base + '   '+ '\n');
salida += ('================='+ '\n');

for ( let i = 1; i <= 10; i++ ) {
    salida += ( base + ' x ' + i + ' = ' + ( i * base ) + '\n' );
}

// console.log(salida);

const data = new Uint8Array(Buffer.from(salida));

fs.writeFile('tabla_del_'+ base +'.txt', data, (err) => {
  if (err) throw err;
  console.log('Archivo: tabla_del_'+ base +'.txt creado');
});