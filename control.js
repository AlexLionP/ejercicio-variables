// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
edad = 22
if (edad >= 18) {
    console.log("La persona puede votar porque tiene " + edad + " años")
}
else{
    console.log("La persona es menor de edad y no puede votar porque tiene " + edad + " años")
}
/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 */
let calificacion1 = 8
let calificacion2 = 6
let calificacion3 = 5
let calificacion4 = 7 
let promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4)/4
if (promedio >= 7){
    console.log("Aprobado")
}
else {console.log("Reprobado")}

/* Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso

 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
function divisibleSieteYOcho(num){
    if(num%7===0 && num%8===0) {console.log("Verdadero")}
    else {console.log("Falso")}
}

/* Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
function divisibleCuatroONueve(num){
    if(num%4===0 || num%9===0) {console.log("Verdadero")}
    else {console.log("Falso")}
}
/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadora(operacion, num1, num2){
    switch(operacion.toLowerCase()){
        case "suma": 
        suma = num1 + num2;
        console.log("La suma es: " + suma);
        break;
        case "resta": 
        resta = num1 - num2;
        console.log("La resta es: " + resta);
        break;
        case "multiplicacion": 
        multiplicacion = num1*num2;
        console.log("La multiplicación es: " + multiplicacion);
        break;
        case "division": 
        division = num1 / num2;
        console.log("La division es: " + division);
        break;
        default: console.log("No reconozco esa operacion o numeros");
        break;
}
}
/* Ejercicio 7
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
function peliculaRecomendada(genero){
    switch(genero.toLowerCase()){
        case "accion": 
        console.log("Te recomiendo ver Terminator 2");
        break;
        case "drama":
        console.log("Te recomiendo ver The Best Offer");
        break;
        case "comedia":
        console.log("Te recomiendo ver White Chicks");
        break;
        case "romance":
        console.log("Te recomiendo ver My Life Before You");
        break;
        case "suspenso":
        console.log("Te recomiendo ver The Gift");
        break;
        case "Terror":
        console.log("Te recomiendo ver Incantation");
        break;
        default: console.log("No reconozco esa operacion o numeros");
        break;
}
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
function cajeroATM(opcion){
    opcion = opcion.toLowerCase()
    if(opcion == "retirar dinero"){
        console.log("Ya puedes retirar tu dinero")
    }
    else if(opcion == "transferencia"){
        console.log("La transferencia se realizó exitosamente")
    }
    else if(opcion == "deposito"){
        console.log("El deposito se realizó correctamente")
    }
    else if(opcion == "pago de servicios"){
        console.log("El pago se realizó exitosamente")
    }
    else{console.log("No reconozco esa operacion")}
}
/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
function conversorDivisas(divisa,pesos){
    switch(divisa.toLowerCase()){
        case "dolares": 
        dolares =  pesos*0.059;
        console.log("Recibes: " + dolares);
        break;
        case "euros":
        euros =  pesos*0.054;
        console.log("Recibes: " + euros);
        break;
        case "yenes":
        yenes =  pesos*8.57;
        console.log("Recibes: " + yenes);
        break;
        case "libra":
        libra =  pesos*0.046;
        console.log("Recibes: " + libras);
        break;
        case "franco":
        franco =  pesos*0.050;
        console.log("Recibes: " + francos);
        break;
        default: console.log("No reconozco esa operacion o numeros");
        break;
}
}
/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */