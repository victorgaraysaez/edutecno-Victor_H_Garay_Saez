do {
  let num = parseInt(prompt("Comencemos ingresando un número del 1 al 20: "));
  if (num >= 1 && num <= 20) {	
	document.write("<table border=0px <tr> <td>")
    document.write("Multiplicaciones de " + num + "   <br>")
    for (let i=1; i<=num; i++){
      let Mult = i*num;
      document.write( i + " * " + num + " = " + (Mult) + " <br>"); 
    }
	document.write("</td>");
	
	
	document.write("<td>")
    document.write(" Factoriales hasta " + num+ " <br>")
    for (let i=1; i<=num; i++) {
      let Fact = 1
        for (let j = 1; j <= i; j++){
          Fact *= j             
        }  
      document.write(" Factorial de "+ i + " o " + i + "! es : " + (Fact) + " <br>"); 
    }
	document.write("</td> </tr> </table>");
    break;
  } else {
      alert("Número fuera del rango. Recuerde que el número debe ir del 1 al 20");
  }
} while (true);



		
