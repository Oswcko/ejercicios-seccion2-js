/*
    1) Crear una clase llamada Calculadora, que no tenga funcion constructora,
    y que tenga los siguientes meotods: sumar, restar, multiplicar y dividir.

    2) Crear una clase llamada Personaje, que tenga los siguientes atributos:
    nombre, apodo, edad, salud, fuerza, rareza, y que tenga los siguientes metodos:
    atacar, defender, saludar (estos metodos deben imprimir en consola, solo eso (GET)).
    Debes crear 5 personajes con diferentes atributos y ejecutar los metodos de cada uno.
*/

// ejerc1

class Calculadora{
    sumar(a,b){
        return a + b
    }
    restar(a,b){
        return a - b
    }
    multiplicar(a,b){
        return a * b
    }
    dividir(a,b){
        if(b === 0){
            return `no es posible`
        }else
            return a / b
    }
}

let calculadoraC = new Calculadora()
console.log(calculadoraC.multiplicar(2,2))

// ejerc 2

class Personaje{
    constructor(nombre, apodo, edad, salud, fuerza, rareza){
        this._nombre = nombre;
        this._apodo = apodo;
        this._edad = edad;
        this._salud = salud;
        this._fuerza = fuerza;
        this._rareza = rareza;
    }

    get defender(){
       return `${this._nombre} esta defendiendo`
    }
    get saludar(){
        return `Hola! soy ${this._nombre}`
    }
    get atacar(){
        return `${this._nombre} esta atacando`
    }
}

let personaje1 = new Personaje("Lux", "Luxy", "24", "1500", "500", "epico")
let personaje2 = new Personaje("Garen", "Garencito ", "28", "3000", "700", "special")
let personaje3 = new Personaje("akali", "aka", "29", "2000", "650", "legendario")
let personaje4 = new Personaje("zed", "zed", "31", "1500", "800", "epico")
let personaje5 = new Personaje("yasuo", "yasu", "30", "1800", "800", "legendario")
console.log(personaje1.defender)
console.log(personaje1.saludar)
console.log(personaje1.atacar)
console.log(personaje5.saludar)
console.log(personaje2.defender)
console.log(personaje3.atacar)
console.log(personaje4.defender)

let espacio = `---------------------- Siguiente ejercicio`
console.log(espacio)

/* EJERCICIOS 

1) Crea un juego en el que el programa genera un numero aleatorio del 1 al 100, y luego le pide al usuario ese numero. El bucle "WHILE" debe continuar ejecutandose
hasta que el usuario adivine correctamente el numero. (Investigar Math.random)

2) Crea un Objeto que contenga informacion sobre libros, donde cada propiedad es el titulo de un libro y su valor es un objeto con detalles adicionales
(autor,año de publicacion u otra cosa). Utilizar un bucle "FOR IN" para imprimir el titulo y el autor.

3) Crea un array de objetos que presenten personas, donde cada objeto tenga propiedades como (nombre,edad y ciudad). Utilizar un bucle "FOR OF" para imprimir el nombre
y la ciudad de cada persona.

4) Crea un programa que elija una palabra al azar de una lista predefinida y le pida al usuario que adivine la palabra letra por letra. Utilizar bucle "DO WHILE", para continuar solicitando letras hasta que el usuario adivine la palabra o haya cometido un numero maximo de intentos. (Investigar Math.random).

5) Crea una clase llamada "Persona" que tenga un constructor que reciba dos parametros (nombre y edad). La clase debe tener un metodo "saludar" y que imprima un mensaje de saludo con el nombre y la edad de la persona.

6) Crea una clase llamada "Estudiante" que herede de la clase "Persona" del ejercicio anterior. La clase "Estudiante" debe tener un constructor adicional que reciba un
parametro (curso). Agregar un metodo "presentar" a la clase "Estudiante" que incluya la informacion del nombre,edad y curso.

7) Crea una funcion que tome una cadena de texto y dos palabras como argumentos (parametros), y reemplace todas las ocurrencias de la primera palabra con la segunda
palabra.

8) Escribe una funcion que tome un array de objetos, donde cada objeto tiene una propiedad "edad" y filtre los objetos que tienen una edad mayor o igual a 18.

9) Dado el siguiente array [{nombre: "Luis", edad: 33, hobbies: ["videojuegos, "musica, "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]. Recorre e imprime cada uno de los valores de cada uno de los elementos.
  
10) Agrega un ultimo elemento al array anterior con el nombre de "Maria" y la edad de 25 años

11) Encuentra el elemento con el nombre de "Pedro" y elimina el elemento hobbies.

12) Encuentra el elemento con el nombre de "Juanito" y agrega un elemento hobbies con el valor de "diseñar".

13) Crear una clase llamada "Inventario" que se encargará de gestionar un inventario de productos:
 * La clase "Inventario" debe tener un constructor que inicialice un arreglo vacío llamado productos.
 * Debe haber un método llamado agregarProducto que acepte tres parámetros (nombre, precio, y cantidad). Este método deberá agregar un objeto producto al arreglo productos con los datos proporcionados.
 * Debe existir un método llamado calcularValorTotal que calcule y devuelva el valor total del inventario multiplicando el precio por la cantidad para cada producto en el arreglo y sumándolos.
 * Debe haber un método llamado listarProductos que recorra el arreglo productos y muestre en la consola los detalles de cada producto (nombre, precio y cantidad).
 * Crea una instancia de la clase "Inventario" llamada miInventario.
 * Agrega al menos tres productos a miInventario utilizando el método agregarProducto
 * Llama al método listarProductos en miInventario para mostrar la lista de productos en la consola.
 * Llama al método calcularValorTotal en miInventario y muestra el valor total del inventario en la consola.

*/

//1
/*
console.log(`-----> MATH RANDOM ${Math.floor(Math.random() * 100) + 1}`);
console.log(`-----> MATH RANDOM ${Math.random()}`);  

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinanza;

while(adivinanza !== numeroAleatorio){
    adivinanza = parseInt(prompt("Adivina el numero (1-100): "));
    intentos++; // intentos = intentos + 1

    if(adivinanza < numeroAleatorio){
        console.log("El numero es mayor")
    }else if(adivinanza > numeroAleatorio){
        console.log("El numero es menor");
    }
}

console.log(`Correcto! Adivinaste el numero en ${intentos} intentos`);
*/

/*2 Crea un Objeto que contenga informacion sobre libros, donde cada propiedad es el titulo de un libro y su valor es un objeto con detalles adicionales
(autor,año de publicacion u otra cosa). Utilizar un bucle "FOR IN" para imprimir el titulo y el autor.
*/

let Libros = {
    Sumando : " autor Josua Perez",
    TeoriasConspirativas: " autor Angel Sequera",
    Paraiso: " autor Los Mesoneros"
}

for(let i in Libros){
    console.log(i  + Libros[i])    
}

console.log(espacio)
/* 3) Crea un array de objetos que presenten personas, donde cada objeto tenga propiedades como (nombre,edad y ciudad). Utilizar un bucle "FOR OF" para imprimir el nombre
y la ciudad de cada persona.
*/

let personas = [
    {
        nombre: 'Jose',
        edad: 20,
        ciudad: 'Valencia'
    },
    {
        nombre: 'Maria',
        edad: 26,
        ciudad: 'Merida'
    },
    {
        nombre: 'Pedro',
        edad: 30,
        ciudad: 'Bolivar'
    },
];

for(let j of personas){
    console.log(j.nombre, j.ciudad)
}

console.log(espacio)
/*
5) Crea una clase llamada "Persona" que tenga un constructor que reciba dos parametros (nombre y edad). La clase debe tener un metodo "saludar" y que imprima un mensaje de saludo con el nombre y la edad de la persona.
*/

class Persona{
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    get saludar(){
        return `Hola soy ${this._nombre} y tengo ${this._edad}`
    }
}

let persona11 = new Persona('Jose', '22 annos')
console.log(persona11.saludar)

console.log(espacio)
/*
6) Crea una clase llamada "Estudiante" que herede de la clase "Persona" del ejercicio anterior. La clase "Estudiante" debe tener un constructor adicional que reciba un
parametro (curso). Agregar un metodo "presentar" a la clase "Estudiante" que incluya la informacion del nombre,edad y curso.
*/

class Estudiantes extends Persona{
    constructor(nombre, edad, curso){
        super(nombre, edad);
        this._curso = curso;
    }
    get presentar(){
        return `${this._nombre}, ${this._edad} annos ${this._curso}`
    }
}

let estudiante = new Estudiantes('Jorge', '28', 'programacion')
console.log(estudiante.presentar)

console.log(espacio)
/*
8) Escribe una funcion que tome un array de objetos, donde cada objeto tiene una propiedad "edad" y filtre los objetos que tienen una edad mayor o igual a 18.
*/

let texto = [
    {
        nombre: 'Oscar',
        edad: 19,
    },
    {
        nombre: 'Marcos',
        edad: 17
    }
];

for(let l of texto){
    if(l.edad >= 18){
        console.log(l.nombre, l.edad + ' es mayor de edad')
    }
    else{
        console.log(l.nombre, l.edad + ' es menor de edad')
    }
}

console.log(espacio)
/*
9) Dado el siguiente array [{nombre: "Luis", edad: 33, hobbies: ["videojuegos, "musica, "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]. Recorre e imprime cada uno de los valores de cada uno de los elementos.
*/

let hombres = [
    {
        nombre: "Luis", 
        edad: 33, 
        hobbies: ["videojuegos", " musica", "cine"]
    },
    {
        nombre: "Juanito", 
        edad: 30
    }, 
    {
        nombre: "Pedro", 
        edad: 20, 
        hobbies: ["deportes", " leer"]
    }
]

for(let m of hombres){
    console.log(m)
}

console.log(espacio)
/*
10) Agrega un ultimo elemento al array anterior con el nombre de "Maria" y la edad de 25 años
*/

hombres.push({
    nombre: "Maria",
    edad: 25
})

for(let m of hombres){
    console.log(m)
}

console.log(espacio)

/*
11) Encuentra el elemento con el nombre de "Pedro" y elimina el elemento hobbies.
*/
hombres.splice(2)
hombres.push({
    nombre: "Pedro",
    edad: 20,
})
hombres.push({
    nombre: "Maria",
    edad: 25
})

console.log(hombres)

console.log(espacio)

/*
12) Encuentra el elemento con el nombre de "Juanito" y agrega un elemento hobbies con el valor de "diseñar".
*/

/*
13) Crear una clase llamada "Inventario" que se encargará de gestionar un inventario de productos:
 * La clase "Inventario" debe tener un constructor que inicialice un arreglo vacío llamado productos.
 * Debe haber un método llamado agregarProducto que acepte tres parámetros (nombre, precio, y cantidad). Este método deberá agregar un objeto producto al arreglo productos con los datos proporcionados.
 * Debe existir un método llamado calcularValorTotal que calcule y devuelva el valor total del inventario multiplicando el precio por la cantidad para cada producto en el arreglo y sumándolos.
 * Debe haber un método llamado listarProductos que recorra el arreglo productos y muestre en la consola los detalles de cada producto (nombre, precio y cantidad).
 * Crea una instancia de la clase "Inventario" llamada miInventario.
 * Agrega al menos tres productos a miInventario utilizando el método agregarProducto
 * Llama al método listarProductos en miInventario para mostrar la lista de productos en la consola.
 * Llama al método calcularValorTotal en miInventario y muestra el valor total del inventario en la consola.
 * */

class Inventario{
    constructor(){
        this.productos = [];
    }

    agregarProducto(nombre,precio,cantidad){
        const producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };
        this.productos.push(producto);
    }

    calcularValorTotal(){
        let valorTotal = 0;
        for(let i = 0; i < this.productos.length; i++){
            valorTotal += this.productos[i].precio * this.productos[i].cantidad;
        }
        return valorTotal;
    }

    listarProductos(){
        for(let i = 0; i < this.productos.length; i++){
            const producto = this.productos[i];
            console.log(`Nombre: ${producto.nombre}, Precio:${producto.precio}, Cantidad: ${producto.cantidad}`);
        }
    }
}

const miInventario = new Inventario();

//Agregar productos
miInventario.agregarProducto("Producto1", 20, 3);
miInventario.agregarProducto("Producto2",12, 5);
miInventario.agregarProducto("Producto3",5, 2);

console.log(miInventario);

// Listar productos
miInventario.listarProductos();

// Calcular total de productos
console.log(miInventario.calcularValorTotal());

console.log(espacio)
//7

function remplazarPalabra(cadena, palabra1, palabra2){
    return cadena.split(palabra1).join(palabra2)
}

const cadenaTexto = ('La familia es muy unida cuando hay valores')
console.log(remplazarPalabra(cadenaTexto, 'familia', 'amistad'))

// 4 

//4 

const palabras = ["manzana","banana","naranja","pera","uva"];
const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
const letrasPalabra = palabraAleatoria.split("");
const maxIntentos = 6;
let intentos = 0;
let palabraAdivinada = [];

do{
    let letra = prompt(`Adivina una letra de la palabra (${palabraAdivinada.join("_")}):`);

    if(letrasPalabra.includes(letra)){
        for(let i = 0; i < letrasPalabra.length; i++){
            if(letrasPalabra[i] === letra){
                palabraAdivinada[i] = letra;
            }
        }
    }else{
        intentos++;
        console.log(`Letra incorrecta. Te quedan ${maxIntentos - intentos} intentos`)
    }

}while(intentos < maxIntentos && palabraAdivinada.join("") !== palabraAleatoria);

if(palabraAdivinada.join("") === palabraAleatoria){
    console.log(`Felicitaciones! adivinaste la palabra : ${palabraAleatoria}`)
}else{
    console.log(`Agostaste tus intentos... la palabra era : ${palabraAleatoria}`);
}