var CantDias = prompt("Ingrese la cantidad de días:");
CantDias = parseInt(CantDias);
var años = Math.floor(CantDias / 365);
var RestoAños = CantDias % 365;
var semanas = Math.floor(RestoAños / 7);
var dias= RestoAños % 7;
document.write("	")
document.write("El resultado es: " + años + " años, " + semanas + " semanas y " + dias + " días");
