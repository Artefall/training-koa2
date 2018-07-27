let fs = require('fs');
let example = require('/example.js');

class Storage {
    constructor(fileName) {
        this.fileName = fileName;
        this.fullFileName = fileName + ".json";
        fs.writeFile(fullFileName , JSON.stringify(example));
        this.value = JSON.stringify(example);
      }

}

let gop = new Storage("boby");
