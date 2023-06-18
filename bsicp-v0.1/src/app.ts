import express , {Application, Request, Response} from 'express';
import http = require('http')
import { Server,Socket } from 'socket.io';

const app :Application = express();
const server :http.Server  = http.createServer(app)
const io : Server<any> = new Server(server)


app.get('/',(_ :Request,res :Response)=>{
    res.sendFile(__dirname + "/assets/view.html");
})

io.on('connection', (socket :Socket)=>{
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
      });
})

server.listen(3000, ()=>{
    console.log("server runs on localhost:3000🔥🦧")
}) 


 