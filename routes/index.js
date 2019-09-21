//This file gathers any and all exported functions within my routes/api folder and places them in one location. I then export this to my server.js file as opposed to exporting each route individually there. By doing this I keep my code cleaner and easier to read. 

//The fs variable requires and contains the File System module. This allows you to work with the file system on your computer.
const fs = require('fs');

module.exports = (app) => {
  // require all API endpoints
  fs.readdirSync('routes/api').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};