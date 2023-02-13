require('dotenv').config();
//Importaciones paquetes
const Server = require ('./models/server.js');
//Improtaciones de terceros
const server = new Server();

server.listen();