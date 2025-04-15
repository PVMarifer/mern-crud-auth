import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload) {
   return new Promise ((resolve, reject) => 
   {
    jwt.sign /*Metodo de la libreria*/({
        payload,
      }, TOKEN_SECRET , {expiresIn: "1d",

      },(err, token) => {
        if (err) reject (err)
        resolve(token)
        
      } );

   }
)
}

//Payload es donde se almacenan los datos en la peticion del cliente al servidor
/**El promise en NodeJS es una operación asíncrona que todavía no se ha completado, pero que eventualmente lo hará
 * Evita que el procedimiento se detenga como un trycatch
 */