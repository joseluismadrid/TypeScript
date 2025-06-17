
//SECTION - Practica De TypeScript
// Importar determinada funcion de una libreria 
const http = require('http')
const Cookies = require('cookies')
//NOTE - Variables

var nombre: string = "jose luis "; // varable globlal
let apellido: string = "madrid lodoño "; // varaible local
const edads: any = 31; // variable constante
let edad: any = 31; // variable constante
var error: boolean; // variable booleana 
error = false; // Asignacion de valor 

//NOTE -  Concatención E impresion de valor

console.log(" !Hola " + nombre, apellido + " Tu edad es " + edads, '\n'); // concatenacion de variables  con el usu de simbolo mas
console.log(" ¿Como estas ", nombre, apellido, "?", '\n'); // concarenación de variables con el usu del simbolo de puntuacion la coma solamente 
console.log(`¿ Como te esta llendo ${nombre} ${apellido} tu tienes ${edad}`, '\n'); // Concatención usando el template string
console.log(`Hay un erro ${error}`); // * Imprimir valor en consola deleditor o navegador 

//NOTE - Tipos de datos Primitivos
// String: "Cadena de texto";
// Number: "numberos";
// Boolean: "True o False";
// Any: "Cualquier tipo de dato";
// Array: "Arreglo de datos";
// Tuple: "Arreglo de datos  con tipos de datos definidos";
// Void: "Vacio";
// Null: "nulo";
// Undefined: "Indefinido";

//NOTE -  Instancias multiples de variables 
let a: String, b: boolean, c: number;

a = "Hola";
b = true;
c = 30.9;

// Tipos mas complejos
let listaTareas: string[] = ["Tarea1", "Tarea2", "Tarea3"];
let valor: (string | number | boolean)[] = [false, "hola", true, 49];

//NOTE - Enumerados  Enum: Conjunto de cantantes
enum Estado {
    "Pendiente" = "P",
    "EnProceso" = "E",
    "Terminado" = "T",
}

enum PuestoCarrera {
    "Ingeniero" = 1,
    "Licenciado",
    "Doctor",
}

let estadoTarea: Estado = Estado.Pendiente;
let puesto: PuestoCarrera = PuestoCarrera.Doctor;

//NOTE - Interfaces  Definición de una estructura de datos
interface Persona {
    nombre: string,
    apellido: string,
    edad: number,
    estado: Estado // se llama al enum 
}

// podemos crear varias que sigan la interface persona

let personal: Persona = {
    nombre: "jose luis",
    apellido: "Madrid Londoño",
    edad: 30,
    estado: Estado.Pendiente,
}
console.log("\nPersona:", personal.nombre, personal.apellido, 'Su edad es: ', personal.edad, 'Su estado esta en: ', personal.estado)

// NOTE - Asignación multiple de variables
let Mitarea = {
    titulo: "Mitarea",
    estado: Estado.EnProceso,
    urgencia: 1
}
let { titulo, estado, urgencia } = Mitarea;

//NOTE - ## Factor Spread (Propagacón) En asignación de variable 

//  En Listas
let listadecomprasLunes: string[] = ["leche", "Patatas"];
let listadecomprasMartes: string[] = [...listadecomprasLunes, "Pan", "Huevos"]
let listadecomprasMiercoles: string[] = ["Carnes", "pescado"]
let listadelaSemana = [...listadecomprasLunes, ...listadecomprasMartes, ...listadecomprasMiercoles]

// En objetos 
let estadoApp = {
    usuario: "Admin",
    session: 3,
    jwt: "bernsddff123****"
}

// ! cambiar un valor por propagación 
let nuevoEstado = {
    ...estadoApp,
    session: 4
}
// NOTE - Types en typeScripts
type ProductoType = {
    nombre: string,
    precio: number,
    anio: number
}
let coche: ProductoType = {
    nombre: "Audi",
    precio: 3000,
    anio: 2020,
}
// NOTE - Operarios ternarios 
//Operarios ternarios
console.log(coche.anio < 2010 ? `\nCoche:${coche.nombre} es Viejo` : `\nCoche:${coche.nombre} es Nuevo \n`);

//NOTE - Condicionales 
//Es una estructura de control condicional que permite ejecutar un bloque de código si una condición específica se evalúa como verdadera. Funciona de manera similar a JavaScript, pero con las ventajas de tipado estático que ofrece TypeScript.

// ! condiciones   if-else
if (error) {
    console.log("Hay un error \n");

} else {
    console.log("No hay error \n");
}

//! If-elsIf-else

if (coche.anio < 2010) {
    console.log(`Coche:${coche.nombre} es Viejo`);

} else if (coche.anio === 2010) {
    console.log(`Coche:${coche.nombre} es Medio Viejo`);
} else {
    console.log(`Coche:${coche.nombre} es Nuevo`);
}

// NOTE - Elemento Switch 
switch (personal.estado) {
    case Estado.Terminado:
        console.log("\nLa persona termino su tarea")
        break;
    case Estado.Pendiente:
        console.log("\nLa persona tiene incompleta su tarea")
        break;
    case Estado.EnProceso:
        console.log("\nLa persona acabo de iniciar  su tarea")
        break;
    default:
        break;
}
// NOTE - Bucles 
// Puedes utilizar varios tipos de bucles para iterar sobre datos o realizar tareas repetitivas
let listaTareasNuevas: Persona[] = [
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
]

// ! For clasico
for (let index = 0; index < listaTareasNuevas.length; index++) {
    const tarea = listaTareasNuevas[index];
    console.log(`${index} - ${tarea.nombre}`)

}
// !   ForEach
listaTareasNuevas.forEach((tarea: Persona, index: number,) => {
    console.log(`${index} - ${tarea.nombre}`)
})


//  ! Bucle While

while (personal.estado == Estado.Terminado) {
    personal.edad++;
    if (personal.edad == 10) {
        personal.estado = Estado.Terminado
        break;
    } else {
        personal.edad++;
    }
}

// !  Do while  ( se ejecuta al menos una vecez)
do {
    personal.edad++;
    personal.estado = Estado.Terminado

} while (personal.estado != Estado.Terminado);

// NOTE - Funciones

// ------------------------------
// ✅ Función: saludar
// 🔧 Tipo: Función normal
// 🎯 Propósito: Muestra un saludo básico sin parámetros
function saludar() {
    let nombre = " Maria Fernanda";
    console.log(`Hola Mundo! ${nombre}`);
}
saludar();

// ------------------------------
// ✅ Función: saludarConParametros
// 🔧 Tipo: Función normal
// 🎯 Propósito: Muestra un saludo con nombre personalizado
function saludarConParametros(nombre: string) {
    console.log(`Hola Mundo! ${nombre}`);
}
saludarConParametros("Martin jose");

// ------------------------------
// ✅ Función: despedirPersona
// 🔧 Tipo: Función normal con parámetro por defecto
// 🎯 Propósito: Muestra una despedida con nombre por defecto
function despedirPersona(nombre: string = " Jose luis ") {
    console.log(`¡Adios, ${nombre}`);
}
despedirPersona();
despedirPersona('Alba');

// ------------------------------
// ✅ Función: despedirPersonaOpcional
// 🔧 Tipo: Función normal con parámetro opcional
// 🎯 Propósito: Muestra una despedida opcionalmente personalizada
function despedirPersonaOpcional(nombre?: string) {
    if (nombre) {
        console.log(`Adios, ${nombre}`);
    } else {
        console.log(`¡Adios`);
    }
}
despedirPersonaOpcional();
despedirPersonaOpcional('Juanjose');

// ------------------------------
// ✅ Función: variosParametros
// 🔧 Tipo: Función normal con parámetros opcionales y por defecto
// 🎯 Propósito: Muestra nombre, apellido (si aplica) y edad
function variosParametros(nombre: string, apellidos?: string, edad: number = 30) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    } else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}
variosParametros('martin');
variosParametros('martin', 'san josé');
variosParametros('martin', undefined, 30);
variosParametros('martin', 'san josé', 35);
variosParametros("valentino", "londoño", 15);

// ------------------------------
// ✅ Función: ejmploVariosTipos
// 🔧 Tipo: Función normal con unión de tipos
// 🎯 Propósito: Verifica si el parámetro es string o number
function ejmploVariosTipos(a: string | number) {
    if (typeof a === 'string') {
        console.log('A es un string');
    } else if (typeof a === 'number') {
        console.log('A es un number');
    } else {
        console.log('A no es un string ni tampoco un number');
        throw Error('A no es un string ni tampoco un number');
    }
}
ejmploVariosTipos('sepulveda');
ejmploVariosTipos(2);

// ------------------------------
// ✅ Función: ejemploReturn
// 🔧 Tipo: Función normal con retorno
// 🎯 Propósito: Devuelve el nombre completo
function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn('Manuel', 'campo');
console.log(nombreCompleto);

// ------------------------------
// ✅ Función: ejmploMiltipleParams
// 🔧 Tipo: Función normal con parámetros rest
// 🎯 Propósito: Muestra múltiples nombres
function ejmploMiltipleParams(...nombres: string[]): void {
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}
ejmploMiltipleParams('Gilma');
ejmploMiltipleParams("gilma", "rosa", "Juan", "Alba");

const listasNombre = ["Roma", "minios"];
ejmploMiltipleParams(...listasNombre);

// ------------------------------
// ✅ Función: ejemploParamsLisra
// 🔧 Tipo: Función normal
// 🎯 Propósito: Muestra un listado de nombres desde un array
function ejemploParamsLisra(nombres: string[]) {
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}
ejemploParamsLisra(listasNombre);

// ------------------------------
// ✅ Tipo personalizado: Empleados
// 🔧 Tipo: Alias de tipo (type)
// 🎯 Propósito: Representa la estructura de un empleado
type Empleados = {
    nombre: string;
    apellido: string;
    edad: number;
};

let empleadosHogar: Empleados = {
    nombre: "Pedro Nel",
    apellido: "Campo",
    edad: 80
};

// ------------------------------
// ✅ Función: datosPerson
// 🔧 Tipo: Función flecha
// 🎯 Propósito: Devuelve una descripción del empleado
const datosPerson = (empleado: Empleados) =>
    `${empleado.nombre} ${empleado.apellido} tiene ${empleado.edad} años`;

console.log(datosPerson(empleadosHogar));

// ------------------------------
// ✅ Función: datosEmpleados
// 🔧 Tipo: Función flecha con lógica condicional
// 🎯 Propósito: Indica si el empleado está en edad laboral o jubilación
const datosEmpleados = (empleado: Empleados): string => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} está en edad de jubilación`;
    } else {
        return `Empleado ${empleado.nombre} está en edad laboral`;
    }
};
console.log(datosEmpleados(empleadosHogar));

// ------------------------------
// ✅ Función: salario
// 🔧 Tipo: Función flecha con callback
// 🎯 Propósito: Ejecuta el callback si el empleado no está jubilado
const salario = (empleado: Empleados, cobrar: () => string) => {
    if (empleado.edad > 70) {
        return;
    } else {
        cobrar(); // Callback llamado
    }
};
salario(empleadosHogar, () => 'El trabajador va a cobrar');

// ------------------------------
// ✅ Función: EjemploAsync
// 🔧 Tipo: Función async
// 🎯 Propósito: Simula una tarea asincrónica y retorna un mensaje
async function EjemploAsync(): Promise<string> {
    await console.log("Tarea asíncrona");
    console.log("Completado");
    return 'Completado';
}
EjemploAsync()
    .then((respuesta) => console.log("Respuesta", respuesta))
    .catch((error) => console.log("Ha habido un error", error))
    .finally(() => console.log("Todo ha terminado"));

// ------------------------------
// ✅ Función: ejemploGen
// 🔧 Tipo: Función generadora (generator)
// 🎯 Propósito: Genera números del 0 al 4 usando yield
function* ejemploGen() {
    let index = 0;
    while (index < 5) {
        yield index++;
    }
}
let generadora = ejemploGen();
console.log(generadora.next().value); // 0
console.log(generadora.next().value); // 1
console.log(generadora.next().value); // 2
console.log(generadora.next().value); // 3

// ------------------------------
// ✅ Funciones: watcher y worker
// 🔧 Tipo: Funciones generadoras con delegación yield*
// 🎯 Propósito: Demuestran la delegación de generadores entre sí
function* watcher(valor: number) {
    yield valor;
    yield* worker(valor);
    yield valor + 4;
}
function* worker(valor: number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generetorSaga = watcher(0);
console.log("Generadoras yield");
console.log(generetorSaga.next().value); // 0
console.log(generetorSaga.next().value); // 1
console.log(generetorSaga.next().value); // 2
console.log(generetorSaga.next().value); // 3
console.log(generetorSaga.next().value); // 4

// NOTE - Sobrecarga de fuciones

function mostrarError(error: string | number): void {
    console.log("Ha habido un error ", error);
}
mostrarError(2);

// NOTE - Persistencia de datos
/**
 * 1. localStorage --> Almacena los datos en el navegador (no se eliminan automáticamente)
 * 2. SessionStore --> La diferencia radica en la sesión de navegador. es decir, los datos se persisten en la sesión de navegador
 * 3. Cookies --> Tienen una fecah de caducudad y tambien un ambito de url
 *
 */

// NOTE - LocalStorage y sessionStorage
function guardar(): void {
    localStorage.set("Nombre", "Martin");
}
function leer(): void {
    let nombre = localStorage.get("nombre")
}

// NOTE - Cookies
const Keys = ['Prueba']

let server = http.createServer(function (req: any, res: any) {

    // creamos la cookies
    let cookies = new Cookies(req, res, { keys: Keys })

    // leer cookies 
    let cookiesget = cookies.get('cookiesget', { signed: true })

    // seteamos cookies
    cookies.set('cookiesget', new Date().toLocaleString(), { signed: true })

    if (!cookiesget) {
        res.setHeader('Content-Type', 'text/plain')
        res.end('Welcome, first time visitor!')
    } else {
        res.setHeader('Content-Type', 'text/plain')
        res.end('Welcome back! Nothing much changed since your last visit at ' + cookiesget + '.')
    }
})
server.listen(3000, function () {
    console.log('Visit us at http://127.0.0.1:3000/ !')
})

// NOTE -  clase temporizador

class Temporizador {
    public terminar?: ( tiempo:any) => void;

    public empezar(): void {
        setTimeout(() => {
            // Comprobamos que exista la funcion terminar como callback
            if (!this.terminar) return;

            // Cuando haya pasado el tiempo, se ejecutara la funcion terminar
            const fechaFormateada = new Date(Date.now()).toLocaleString('es-CO');
            this.terminar(fechaFormateada);
        }, 10000)
    }
}

const miTemporizador: Temporizador = new Temporizador()

// Definimos la funcion del callback a ejcutar cuando termine el tiempo

miTemporizador.terminar = (tiempo: any)=>{
    console.log("Evento Terminado",tiempo);
}


// Lanzamos el temporizador 
miTemporizador.empezar(); // Se inicia el timeout y cuando termina se ejcuta  la funcion terminar()

// setInterval(()=> console.log("tic-tock"),1000)

//  eliminar la ejecucion de la funcion 
delete miTemporizador.terminar;
