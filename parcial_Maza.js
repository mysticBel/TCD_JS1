
/* Ejercicio 1 */

function operarSegunPares(numero1, numero2) {
    if (numero1 % 2 === 0 && numero2 % 2 === 0) {
        return numero1 + numero2;
    } else if (numero1 % 2 === 0 || numero2 % 2 === 0) {
        return numero1 * numero2;
    } else {
        return 'ninguno es par';
    }
}

// Ejemplos :
console.log(operarSegunPares(2, 3));  // Retorna : 2 * 3 = 6
console.log(operarSegunPares(4, 6));  // Retorna : 4 + 6 = 10
console.log(operarSegunPares(1, 3));  // Retorna : 'ninguno es par'

//******************************************************************* 

/* Ejercicio 2 */

const ciclista = {
    nombre: "Maribel",
    apellido: "Maza",
    edad: 28,
    tieneBici: true,
};

function evaluarCiclistaPuedeCompetir(ciclista) {
    if (ciclista.edad >= 18 && ciclista.tieneBici) {
        return "Puede competir";
    } else if (ciclista.tieneBici && ciclista.edad < 18) {
        return "Podrá competir pero con un adulto acompañante";
    } else {
        return "No podrá competir";
    }
}

// Evaluando resultado
let resultado = evaluarCiclistaPuedeCompetir(ciclista);
console.log(resultado); // Retorna : 'Puede competir'


//******************************************************************* 

/* Ejercicio 3 */

const libros = [];

/*** datos ***/


let historiasInconscientes = {
    anio: 2013,
    autor: "Gabriel Rolón",
    paginas: 352
}
let elAlquimista = {
    anio: 1988,
    autor: "Paulo Coehlo",
    paginas: 192
}
let elCampamento = {
    anio: 2021,
    autor: "Blue Jeans",
    paginas: 480
}
let operacionMasacre = {
    anio: 2009,
    autor: "Rodolfo Walsh",
    paginas: 236
}

// 1. Agregamos los objetos al array libros
libros.push(historiasInconscientes, elAlquimista, elCampamento, operacionMasacre);

// 2. Mostramos por consola el array
console.log("Libros :", libros);

// 3. Creamos la función para agregar la propiedad época en base a la condicion
function agregarPropiedadEpoca(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].anio < 2020) {
            array[i].epoca = "pre-pandemia";
        } else {
            array[i].epoca = "post-pandemia";
        }
    }
    return array;
}

//4. Ejecutamos la función y mostramos por consola los cambios
agregarPropiedadEpoca(libros);
console.log("Libros con propiedad Epoca:", libros);
