// Variables

/* Las variables son espacios de memoria en la computadora donde podemos almacenar distintos tipos de datos.
En JavaScript existen estos tipos de variables: 
   let
   const

Buena practica : 
-      Usar camelCase
-      palabras reservadas como var, let y const

* Declaracion de Variable
        let miVariable
* Asignación de Variable
        let miApodo = 'Galletita' (NOmbre,  = : Asignacion) , valor)
        miApodo =   'Pastelito'  // Una vez que la variable ya fue declarada, le asignamos valores sin let.

        const email = "mi.email@hotmail.com";
        // Error de asignación, no se puede cambiar 
        // el valor de un const

*/

/*-SCOPE */
if (true) {
    let nombre = "Maribel";
  }
  
  console.log(nombre)

// Error: nombre no existe -> nombre no podrá ser accedida fuera del if.

if (true) {
    var nombre = "Daniela";
  }
  
  console.log(nombre);
  // Ok, muestra "Daniela"
  