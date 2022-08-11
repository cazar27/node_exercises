 const { v4: uuidv4 } = require('uuid')

class Task {
    id = '';
    description = '';
    doit = false;
    date = null

    constructor( description ) {
        this.id = uuidv4();
        this.description = description;
        this.doit = false;
        this.date = new Date();
    }
}

module.exports = Task;