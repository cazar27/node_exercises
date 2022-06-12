const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit = 10) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limit; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }

}


let makeFile = (base, limit = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limit }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limit }.txt`);

        });

    });

}

module.exports = {
    makeFile,
    listTable
}