var tosses = parseInt(prompt("Ingrese el número de veces que desea jugar: " , 3));
var j=0;

    while(j<tosses){
        
        var UserToss = prompt("Anote su jugada elijiendo entre Piedra, Papel o Tijera" , "Papel");
        let Plays = ['Tijera','Piedra','Papel'];
        let RoundRobin = Math.floor (Math.random()*3);    
        let MachineToss = Plays [RoundRobin];       
        if (UserToss === MachineToss) { 
            alert ("Es empate");
            } else if (UserToss === 'Papel' && MachineToss === 'Piedra') { 
            alert ("Ganaste!!!");
            } else if (UserToss === 'Piedra' && MachineToss === 'Tijera') { 
            alert ("Ganaste!!!");
			} else if (UserToss === 'Tijera' && MachineToss === 'Papel') { 
            alert ("Ganaste!!!");
            } else if (UserToss === 'Tijera' && MachineToss === 'Piedra') { 
            alert ("Has perdido :-(");
            } else if (UserToss === 'Piedra' && MachineToss === 'Papel') { 
            alert ("Has perdido :-(");
            } else if (UserToss === 'Papel' && MachineToss === 'Tijera') { 
            alert ("Has perdido :-(");
            } else { 
            alert ("Algo ha salido mal, recuerda anotar Piedra, Papel o Tijera al igual que ves en este mensaje."); 
            }
         j= j+1
    }
