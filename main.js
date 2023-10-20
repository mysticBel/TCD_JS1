
/* EJERC 1
const prompt = require("prompt-sync")({ sigint: true });
let respUsuarioCodigo = prompt("¿Cual es tu código de estudiante?") 
let respUsuarioConsulta = prompt("¿Cual es tu consulta?") 

console.log("El alumno con codigo " + respUsuarioCodigo + " " +" tiene la siguiente consulta :"+ respUsuarioConsulta) */

/* EJERC 2
const prompt = require("prompt-sync")({ sigint: true });
let edadUsuario = prompt("cuantos años tienes?") 

let edadMax = 18

if(edadMax > edadUsuario){
    console.log("Aún no puedes tener licencia de conducir.. :c")
}else{
    console.log("Ya puedes tramitar tu licencia de conducir!")
} */


/* DESAFIO
Supongamos que estás acomodando tu casa y guardaste las remeras en el cajón de los pantalones ¡Un horror! ¿Cómo haríamos para invertirlos?
Pensá con qué código podrías invertir el contenido de las variables de cajones.

*/
const prompt = require("prompt-sync")({ sigint: true });

let contenidoCajonPantalones =  "remeras";
let contenidoCajonRemeras =  "pantalones";

contenidoCajonRemeras = prompt("¿Qué guardas en el cajón de remeras? ") ;
contenidoCajonPantalones = prompt("¿Qué guardas en el cajón de pantalones? ") ;

console.log(" Contenido en cajon remeras: " + contenidoCajonRemeras) ;
console.log(" Contenido en cajon pantalones: " + contenidoCajonPantalones) ;

/**
 * 
 * ¿Qué guardas en el cajón de remeras? remeras
*  ¿Qué guardas en el cajón de pantalones? pantalones
     Contenido en cajon remeras: remeras
     Contenido en cajon pantalones: pantalones

 */