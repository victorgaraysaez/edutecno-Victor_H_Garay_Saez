var num1 = prompt("Ingrese el primer número entero mayor a cero:");
var num2 = prompt("Ingrese el segundo número entero mayor a 0 y distinto al anterior");
document.write("El resultado de la suma de los dos números es: ");
document.write(parseInt(num1)+parseInt(num2));
document.write(" ");
document.write("El resultado de la resta de los dos números es: ");
document.write(parseInt(num1)-parseInt(num2));
document.write(" ");
document.write("El resultado de la multiplicación de los dos números es: ");
document.write(parseInt(num1)*parseInt(num2));
document.write(" ");
document.write("El resultado de la división de los dos números es: ");
document.write(parseInt(num1)/parseInt(num2));
document.write(" ");
document.write("El resultado del modulo o resto de los dos números es: ");
document.write(parseInt(num1)%parseInt(num2));
document.write(" ");
document.write("El resultado del valor absoluto de los dos números es: ");
document.write(Math.abs(num1));
document.write(" y ");
document.write(Math.abs(num2));