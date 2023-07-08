const io = require( "socket.io" )();
const socketapi = {
    io: io
};


 var activeUsers = [];

// Add your socket.io logic here!
io.on( "connection", function( socket ) {

    console.log( "A user connected" );
    activeUsers.push(socket.id);
    io.emit("userPushed",activeUsers.length);

    socket.on("disconnect",function(){
        console.log("user disconnected");
        activeUsers.splice(activeUsers.indexOf(socket.id),1);
    })

  
    socket.on('chat message',function(msg){
        io.emit('chat message', msg);
    })

     

});


// end of socket.io logic

module.exports = socketapi;