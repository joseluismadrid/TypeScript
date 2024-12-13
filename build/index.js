"use strict";
//TODO:  Comentarios en  Ts
// * Comentario de una sola linea
/**
 *  * Comentario de varias lineas
 */
console.log('Hola pirobos');
// ! Declaracion de variables:
//  ? Definicion de tipo 
// *  Variable : tipo de dato = valor
var nombre = "Jose luis "; // * Variable global
let apellido = "Madrid"; // * Variable local
const edad = 30; // * Variable constante
console.log("Hola! " + nombre, apellido + " Tu edad es " + edad); // * Concatenacion de variables
console.log("¿Como estas?", nombre, apellido, "?"); // * Concatenacion de variables
console.log(`¿Como han te esta llendo ${nombre} ${apellido} tu tienes: ${edad}`); // * Template string
var error; // * Variable booleana
error = true; // * Asignacion de valor
console.log(`Hay un erro ${error}`); // * Imprimir valor
/**
 *  ! Tipos de datos  primitivos
 * * string : Cadena de texto
 * * number : Numeros
 * * boolean : Verdadero o falso
 * * Any : Cualquier tipo de dato
 *  * Array : Arreglo de datos
 * * Tuple : Arreglo de datos con tipos de datos definidos
 * * Void : Vacio
 * * Null : Nulo
 * * Undefined : Indefinido
 */
// ! Instancias multiples de varables
let a, b, c;
a = "Hola";
b = true;
c = 30.9;
//! Tipos mas Complejos
let listaTareas = ["Tarea 1", "Tarea 2", "Tarea 3"];
let valores = [false, "hola", true, 49];
// ! Enumerados
// * Enum : Conjunto de constantes
var Estado;
(function (Estado) {
    Estado["Pendiente"] = "P";
    Estado["EnProceso"] = "E";
    Estado["Terminado"] = "T";
})(Estado || (Estado = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Ingeniero"] = 1] = "Ingeniero";
    PuestoCarrera[PuestoCarrera["Licenciado"] = 2] = "Licenciado";
    PuestoCarrera[PuestoCarrera["Doctor"] = 3] = "Doctor";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estado.Pendiente;
let puesto = PuestoCarrera.Doctor;
//! Podemos Crear Varias que sigen la interfaces Persona
let persona1 = {
    nombre: "Jose",
    apellido: "Madrid",
    edad: 30,
    estado: Estado.Pendiente
};
console.log("Prsona:", persona1.nombre, persona1.apellido, persona1.edad, persona1.estado);
// ! Asignacion multiples de variable
let Mitarea = {
    titulo: "Mitarea",
    estado: Estado.EnProceso,
    urgencia: 1
};
// ! Factor Spread (Prpagacion)
// *En asignacin de variables
let { titulo, estado, urgencia } = Mitarea;
//  En Listas
let listadecomprasLunes = ["leche", "Patatas"];
let listadecomprasMartes = [...listadecomprasLunes, "Pan", "Huevos"];
let listadecomprasMiercoles = ["Carnes", "pescado"];
let listadelaSemana = [...listadecomprasLunes, ...listadecomprasMartes, ...listadecomprasMiercoles];
// !   En Objectos 
let estadoApp = {
    usuario: "Admin",
    session: 3,
    jwt: "bernsddff123****"
};
// ! cambiar un valor por propagación 
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
let coche = {
    nombre: "Audi",
    precio: 3000,
    anio: 2020
};
// ! operadores ternarios
console.log(coche.anio < 2010 ? `Coche:${coche.nombre} es Viejo` : `Coche:${coche.nombre} es Nuevo`);
// ! condiciones   if-else
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay error");
}
//! If-elsIf-else
if (coche.anio < 2010) {
    console.log(`Coche:${coche.nombre} es Viejo`);
}
else if (coche.anio === 2010) {
    console.log(`Coche:${coche.nombre} es Medio Viejo`);
}
else {
    console.log(`Coche:${coche.nombre} es Nuevo`);
}
//  ! Switch
switch (persona1.estado) {
    case Estado.Terminado:
        console.log("La persona termino su tarea");
        break;
    case Estado.Pendiente:
        console.log("La persona tiene incompleta su tarea");
        break;
    case Estado.EnProceso:
        console.log("La persona acabo de iniciar  su tarea");
        break;
    default:
        break;
}
// ! blucles
let listaTareasNuevas = [
    {
        nombre: "Julio cesar",
        apellido: "Acosta lopez",
        edad: 20,
        estado: Estado.EnProceso
    },
    {
        nombre: "Felipe jose",
        apellido: "Acosta perez",
        edad: 30,
        estado: Estado.Pendiente
    },
    {
        nombre: "Julian ",
        apellido: " perez",
        edad: 40,
        estado: Estado.Terminado
    }
];
// ! For clasico
for (let index = 0; index < listaTareasNuevas.length; index++) {
    const tarea = listaTareasNuevas[index];
    console.log(`${index} - ${tarea.nombre}`);
}
// !   ForEach
listaTareasNuevas.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
//  ! Bucle While
while (persona1.estado != Estado.Terminado) {
    persona1.edad++;
    if (persona1.edad == 100) {
        persona1.estado = Estado.Terminado;
        break;
    }
    else {
        persona1.edad++;
    }
}
// !  Do while  ( se ejecuta al menos una vecez)
do {
    persona1.edad++;
    persona1.estado = Estado.Terminado;
} while (persona1.estado != Estado.Terminado);
// !Funciones
/**
 *  ? Funcion que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Maria fernanda";
    console.log(`Hola Mundo! ${nombre}`);
}
// ! Invocacion de la funcion 
saludar();
/**
 *
 * @param nombre
 */
function saludarConparametros(nombre) {
    console.log(`Hola Mundo! ${nombre}`);
}
saludarConparametros("Martin jose");
// Sobrecarga de funciones
// Funciones asincronas
// Funciones Generadoras
