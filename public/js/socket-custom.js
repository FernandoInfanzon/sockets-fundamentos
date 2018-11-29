var socket = io();
// on para escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log('respuesta server: ', res);
});

//escuchar informacion

socket.on('enviarMensaje', function(respuesta) {
    console.log('Servidor:', respuesta);
})