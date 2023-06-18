"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = require("http");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = http.createServer(app);
const io = new socket_io_1.Server(server);
app.get('/', (_, res) => {
    res.sendFile(__dirname + "/assets/view.html");
});
io.on('connection', (socket) => {
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});
server.listen(3000, () => {
    console.log("server runs on localhost:3000🔥🦧");
});
