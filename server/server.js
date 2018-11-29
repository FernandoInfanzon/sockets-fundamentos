const express = require('express');
const socketIO = require('socket.io');
const http = require('http'); // levantar un servidor


const path = require('path');

const app = express();
let server = http.createServer(app); // montado el servidor con toda la configuracion de express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = socketIO(server); // IO = esta es la comunicacion del Backend
require('./sockets/socket');


server.listen(port, (err) => { // se cambia app.listen por server.listen

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});