const express = require('express');
const app = express();
const http = require('http')
const cors = require('cors')
const db = require('./config/db');
const bodyParser = require("body-parser");
const fileupload =require( "express-fileupload" );
const { v4:uuidv4}= require('uuid')

const {Server} = require("socket.io")

// const io = socketIo();
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors())

const server = http.createServer(app)

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
const adminrouter = require('./router/adminRouter');
const userrouter = require('./router/userRouter');
app.use(
    fileupload({
        createParentPath: true, 
    }),
);
const PORT = 5000;
server.listen(PORT,()=> console.log("server Started @ 5000 "));

// const io = new Server(server,{
//     cors:{
//         origin:"http://localhost:5173",
//         methods:["GET","POST"]
//     }
// })

// io.on("connection", (socket) => {
//     console.log(`User Connected: ${socket.id}`);
//     // console.log(`Connected: ${socket}`);
  
//     socket.on("join_room", (data) => {
//       socket.join(data);
//       console.log(`User with ID: ${socket.id} joined room: ${data}`);
//     });
  
//     socket.on("send_message", (data) => {
//       socket.to(data.room).emit("receive_message", data);
//     });
  
//     socket.on("disconnect", () => {
//       console.log("User Disconnected", socket.id);
//     });
//   });



db(()=>{
    try {
        console.log("DataBase Successfully Connected");        
    } catch (error) {
        console.log("Database Not Connected : ", error);    
    }});


app.use('/',userrouter);
app.use('/admin',adminrouter);

