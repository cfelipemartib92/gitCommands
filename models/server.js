//Traemos la librería de express
const express = require('express');


class Server{

    constructor(){
    //Donde alamceno la const app
        this.app = express();
    //Llamo las rutas
        this.routes();
    //Llamo el puerto y luego en el listen
        this.port= process.env.PORT;
    }

    routes(){
        this.app.get('/', (req, res)=> {
            res.send('Hello amiguis');
        });
    }

    listen(){
    //Asignamos el puerto - llamo el puerto constructor
        this.app.listen(this.port,()=>{
            console.log('Nuevo Servidor corriendo', this.port);
        });

    }

}

module.exports= {
    Server
}