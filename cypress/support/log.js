class Logger {
    constructor(filePath) {
      this.filePath = filePath;
    }
  
    log(message) {
      const logMessage = `${new Date().toISOString()} - ${message}\n`;
      cy.writeFile(this.filePath, logMessage, { flag: 'a+' });
    }
  }
  
  module.exports = Logger;

/*
const fs = require('fs');

class Logger {
  constructor(filePath) {
    this.filePath = filePath;
  }

  log(message) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync(this.filePath, logMessage);
  }
}

module.exports = Logger;
*/