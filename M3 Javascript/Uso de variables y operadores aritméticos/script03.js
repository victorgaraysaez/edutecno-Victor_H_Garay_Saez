var Celsius = prompt("Ingrese la temperatura en grados Celsius:");
Celsius = parseFloat(Celsius);
var Kelvin = Celsius + 273.15;
document.write("La temperatura "+ Celsius + "°C en grados Kelvin es: " + Kelvin + "°K");
const convert = 9 / 5;
var Fahrenheit = (Celsius * convert) + 32;
document.write("	")
document.write("La temperatura "+ Celsius + "°C en grados Fahrenheit es: " + Fahrenheit + "°F");
