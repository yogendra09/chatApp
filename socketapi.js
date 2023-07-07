const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {

    console.log( "A user connected" );

    socket.on("disconnect",function(){
        console.log("user disconnected");
    })

  
    socket.on('chat message',function(msg){
        io.emit('chat message', msg);
    })



});


// end of socket.io logic

module.exports = socketapi;