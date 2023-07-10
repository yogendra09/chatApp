const io = require( "socket.io" )();
const socketapi = {
    io: io
};


 var activeUsersId = [];
 var activeUsersName = [];

// Add your socket.io logic here!
io.on( "connection", function( socket ) {

    console.log( "A user connected" );
   
   var naam;

    socket.on("disconnect",function(){
        console.log("user disconnected");
        activeUsersId.splice(activeUsersId.indexOf(socket.id),1);
        activeUsersId.splice(activeUsersName.indexOf(socket.id),1);
    })

    socket.on("setName",function(data){
        activeUsersId.push(socket.id);
        activeUsersName.push(socket.name);
       io.emit("activeUsers",activeUsersId.length);
       naam = data.name;
    })


  
    socket.on('chat message',function(msg){
        io.emit('chat message', msg , naam );
    })

     

});


// end of socket.io logic

module.exports = socketapi;