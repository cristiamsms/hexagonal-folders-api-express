import express, {Application} from "express";
import cors from 'cors'


class Server {

    private app:Application;
    private port:string;
    private apiPaths ={
     
    }

    constructor (){
    //constructor del servidor express
    this.app = express();
    //puerto de conexion
    this.port = process.env.PORT  || '80';
    //database 

    // Definicion de middlewares
    this.middlewares();

    this.routes();
    }



    middlewares() {
    //CORS
    this.app.use(cors());
    // Lectra del body
    this.app.use(express.json({limit: '2mb'}));

    // Carpeta publica
     this.app.use(express.static('public'));
    }
 
    routes() {
  

  
    }

    

    listen() {
    //la app selecciona el puerto asignado y empieza a correr el servidor

    this.app.listen(this.port,()=>{
        console.log('Servidor corriendo en el puerto  ' + this.port);
    })
    }



}
export default Server;