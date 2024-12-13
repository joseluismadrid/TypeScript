
//TODO:  Comentarios en  Ts

// * Comentario de una sola linea

/**
 *  * Comentario de varias lineas
 */
console.log('Hola pirobos')

// ! Declaracion de variables:
//  ? Definicion de tipo 
// *  Variable : tipo de dato = valor
var nombre: string = "Jose luis "; // * Variable global
let apellido: string = "Madrid"; // * Variable local
const edad: any = 30; // * Variable constante
console.log("Hola! " + nombre, apellido + " Tu edad es " + edad); // * Concatenacion de variables
console.log("¿Como estas?", nombre, apellido, "?"); // * Concatenacion de variables
console.log(`¿Como han te esta llendo ${nombre} ${apellido} tu tienes: ${edad}`); // * Template string

var error: boolean; // * Variable booleana
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
let a:string, b:boolean, c:number;
a = "Hola";
b = true;
c = 30.9;
 //! Tipos mas Complejos
let listaTareas:string[] = ["Tarea 1", "Tarea 2", "Tarea 3"];

let valores: (string | number | boolean) []= [false, "hola",true,49];

// ! Enumerados
// * Enum : Conjunto de constantes

enum Estado {
    "Pendiente"= "P",
    "EnProceso" = "E",
    "Terminado" = "T"
}
 enum PuestoCarrera{
      "Ingeniero" = 1,
      "Licenciado" ,
      "Doctor" 
 }

let estadoTarea: Estado = Estado.Pendiente;
let puesto: PuestoCarrera = PuestoCarrera.Doctor;


//! Inerfaces
// * Definicion de una estructura de datos
interface Persona {
    nombre: string,
    apellido: string,
    edad: number,
    estado: Estado
}

//! Podemos Crear Varias que sigen la interfaces Persona

let persona1: Persona = {
    nombre: "Jose",
    apellido: "Madrid",
    edad: 30,
    estado: Estado.Pendiente
}
console.log("Prsona:",persona1.nombre, persona1.apellido, persona1.edad, persona1.estado);
// ! Type de typeScripts

type ProductoType = {
    nombre: string,
    precio: number,
    anio: number,
}

let coche : ProductoType = {
    nombre: "Audi",
    precio: 3000,
    anio: 2020
}

// ! operadores ternarios
console.log(coche.anio <2010 ?`Coche:${coche.nombre} es Viejo`:`Coche:${coche.nombre} es Nuevo`);

// ! condiciones   if-else
if (error) {
    console.log("Hay un error");  

}else{
    console.log("No hay error");
}

//! If-elsIf-else

if(coche.anio < 2010){
    console.log(`Coche:${coche.nombre} es Viejo`);

}else if(coche.anio === 2010) {
    console.log(`Coche:${coche.nombre} es Medio Viejo`); 
}else{
    console.log(`Coche:${coche.nombre} es Nuevo`);
}



