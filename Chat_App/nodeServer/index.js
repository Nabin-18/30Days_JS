//Node server which will handle the requests

const io = require('socket.io')(8000)

const users = {};

//io.on is used to listen to the event
//connection is the event
//socket.on is used to emit the event

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);

        //boradcast.emit is used to send the message to all the users except the user who is sending the message

    })
    socket.on("send", message => {
        socket.broadcast.emit('receive',
            {
                message: message,
                name: users[socket.id]
            }
        )
    })
})