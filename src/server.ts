import express, { Application } from "express"; // importamos express y Application desde express
import cors from 'cors' // importamos cors

class Server {

    private app: Application; // declaramos la variable app como tipo Application
    private port: string; // declaramos la variable port como tipo string
    private apiPaths = { // definimos el objeto apiPaths que contendrá las rutas

    }

    constructor() { // constructor de la clase
        this.app = express(); // instanciamos express y lo asignamos a la variable app
        this.port = process.env.PORT || '80'; // asignamos el puerto de conexión, tomándolo de la variable de entorno PORT, o usando el puerto 80 por defecto si no está definido

        // Definicion de middlewares
        this.middlewares(); // llamamos al método middlewares
        this.routes(); // llamamos al método routes
    }

    middlewares() { // método que define los middlewares
        this.app.use(cors()); // permite peticiones CORS desde cualquier origen
        this.app.use(express.json({ limit: '5mb' })); // permite leer el cuerpo de peticiones con formato JSON con un límite de 5mb
        this.app.use(express.static('public')); // sirve archivos estáticos desde la carpeta public
    }

    routes() { // método que define las rutas
        // aquí se definen las rutas usando this.app.use
    }

    listen() { // método que arranca el servidor
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port); // imprime en consola un mensaje indicando que el servidor se está ejecutando
        })
    }
}

export default Server; // exporta la clase Server