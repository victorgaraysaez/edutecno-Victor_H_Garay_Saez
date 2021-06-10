var num01 = prompt("Ingrese el primero de cinco números distintos entre sí:");
var num02 = prompt("Ingrese el segundo de cinco números distintos entre sí:");
var num03 = prompt("Ingrese el tercreo de cinco números distintos entre sí:");
var num04 = prompt("Ingrese el cuarto de cinco números distintos entre sí:");
var num05 = prompt("Ingrese el quinto de cinco números distintos entre sí:");
num01 = parseInt(num01);
num02 = parseInt(num02);
num03 = parseInt(num03);
num04 = parseInt(num04);
num05 = parseInt(num05);
suma = num01 + num02 + num03 + num04 + num05;
prom = suma/5
document.write("La suma de todos los números es: " + suma + " y el promedio de los 5 números ingresados es: " + prom);
