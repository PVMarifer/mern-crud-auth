//arrancara el codigo
import app from './app.js'
import {connectDB} from './db.js'

connectDB();

app.listen(3000)
console.log('Server on port', 3000)

//morgan modulo es el que ve las peticiones por consola que van llegando