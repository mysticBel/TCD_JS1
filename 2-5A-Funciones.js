
/*
Funciones

*******
Una función es un bloque de código que nos permite agrupar una funcionalidad 
para usarla todas las veces que necesitemos.
Normalmente, realiza una tarea específica y retorna un valor como resultado.
*******

*/ 
// Palabra reservada , Nombre de la función , Parámetros (variables)
// cuerpo (la logica) , el retorno (return) 
function sumar (a, b) {
	return a + b;
}

/************ Funciones declaradas *******/
/* Son aquellas que se declaran usando la estructura básica.*/
function nombreDeLaFuncion(parametros) {
    // código...
    return valor
}

function saludar(nombre) {
	return 'Hola' + nombre;
}

/************ Funciones expresadas *******/
/* Son aquellas que se asignan como valor de una variable.
 En este caso, la función en sí no tiene nombre, es una función anónima. 
Para invocarla podremos usar el nombre de la variable que declaremos.
*/
const saludar = function(nombre) {
    return 'Hola' + nombre;
}

let triplicar = function (numero) {
	return numero * 3;
}



/*
Invocando una funciòn

*******
Antes de poder invocar una función, necesitamos que haya sido declarada. 
Entonces, vamos a declarar una función:
*/
function hacerHelado() {
	return '🍦';
}
/*La forma de invocar —también se puede decir llamar o ejecutar— una función es
 escribiendo su nombre seguido de apertura y cierre de paréntesis. */
 hacerHelado(); // Retornará '🍦'

 
// Es importante respetar el orden  : JS asigna valores en el orden en que lleguen.

 function saludar(nombre, apellido) {
	return 'Hola ' + nombre + ' ' + apellido;
}

saludar('Robertito', 'Rodríguez');
// retornará 'Hola Robertito Rodríguez'

/**cuando tenemos parámetros en nuestra función, JS va a esperar que se los indiquemos 
 * al ejecutarla.
 */

function saludar(nombre, apellido) {
	return 'Hola ' + nombre + ' ' + apellido;
}

saludar(); // retorna 'Hola undefined undefined'

/*
Para casos como el anterior podemos definir valores por defecto.
*/
function saludar(nombre = 'visitante', 
	apellido = 'anónimo') {
	return 'Hola ' + nombre + ' ' + apellido;
}

saludar(); // retornará 'Hola visitante anónimo'



/*
Guardando los resultados

*******
En caso de querer guardar lo que retorna una función, será necesario almacenarlo en una variable.

*******
*/
function hacerHelados(cantidad) {
	return '🍦'.repeat(cantidad);
}

let misHelados = hacerHelados(3);   //almacenamos en variable misHelados
console.log(misHelados); // Mostrará en consola '🍦🍦🍦'

/*******************************
Llamamos parámetros a las variables que escribimos cuando definimos la función. 
Llamamos argumentos a los valores que enviamos cuando invocamos la función.
 *******************************/

/*
Scope

*******
El scope o ámbito se refiere al alcance que tiene una variable, es decir, desde dónde podemos acceder a ella. 
En JavaScript los scopes son definidos principalmente por las funciones. */


// Scope local
function hola() {
    let saludo = 'Hola ¿qué tal?';
    return saludo; //Definimos la variable saludo dentro de la función hola(), p
    //por lo tanto su scope es local.

 }
 console.log(saludo); // saludo is not defined

 //Scope global

 let saludo = 'Hola ¿qué tal?';
 function hola() {
    return saludo;
 }
 console.log(saludo); // 'Hola ¿qué tal?'


 /*
 crear una función que se va a llamar ejemplo y 
 tiene que devolver un String diciendo "hola, soy una función". */
 function ejemplo(){
    let string = "hola, soy una función"
    return string;
}
ejemplo();