window.open('https://www.superheroapi.com/ids.html', 'Si conoce el nombre pero no el número...');
$("document").ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let numTyped = $("#searchInput").val();
    if (numTyped > 731) {
      alert('Por favor, ingrese un número entre 1 y 731, Su número es: ' + numTyped);
    }
	else {
      var res = '';
	}
    $.ajax({
      url: 'https://www.superheroapi.com/api.php/10226299794298182/' + numTyped + '/',
      success: function (data) {
        let imagen = data.image.url;
        let nombre = data.name;
        let conexiones = data.connections["group-affiliation"];
        let publicado = data.biography.publisher;
        let ocupacion = data.work.occupation;
        let primAparicion = data.biography["first-appearance"];
        let altura = data.appearance.height;
        let peso = data.appearance.weight;
        let alias = data.biography.aliases;
        let poder = data.powerstats.intelligence;
        if (ocupacion == "-") {
          ocupacion = "Sin ocupación registrada";
        }
        if (conexiones == "-") {
          conexiones = "Sin conexiones registradas";
        }
        if (primAparicion == "-") {
          primeraAparicion = "No hay registro";
        }
        if (poder == "null") {
          alert(
            "Todos los datos de este heroe son nulos."
          );
        }
        $("#heroInfo").html(`
        <div class="row">
            <div class="col-md-4">
                <img src="${imagen}" height="auto" width="100%">
            </div>
            <div class="col-md-4">
                <h1 class="heroInfo--h1">SuperHero Encontrado</h1>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><h5 class="card-text"><b>Nombre: ${nombre}</b></h5></li>
                        <li class="list-group-item"><p class="card-text"><b>Conexiones:</b> ${conexiones}.</p></li>
                        <li class="list-group-item"><p class="card-text"><b>Publicado por:</b> ${publicado}.</p></li>
                        <li class="list-group-item"><p class="card-text"><b>Ocupación:</b> ${ocupacion}.</p></li>
                        <li class="list-group-item"><p class="card-text"><b>Primera aparición:</b> ${primAparicion}.</p></li>
                        <li class="list-group-item"><p class="card-text"><b>Altura:</b> ${altura}.</p></li>
                        <li class="list-group-item"><p class="card-text"><b>Peso:</b> ${peso}.</p></li>
                        <li class="list-group-item"><p class="card-text"><b>Alias:</b> ${alias}.</p></li>
					          </ul>
				        </div>
            </div>
            <div class="col-md-4">
                <div id="heroStats" style="height:360px; width:auto"></div>
            </div>
        </div>
        `);
        let estadisticas = [];
        estadisticas.push(
          { y: data.powerstats.intelligence, label: "Inteligencia" },
          { y: data.powerstats.strength, label: "Fuerza" },
          { y: data.powerstats.speed, label: "Velocidad" },
          { y: data.powerstats.durability, label: "Resistencia" },
          { y: data.powerstats.power, label: "Poder" },
          { y: data.powerstats.combat, label: "Combate" }
        );
        let config = {
          animationEnabled: true,
          title: {
            text: `Estadisticas de Poder para ${data.name}`,
          },
          data: [{
              type: "pie",
              startAngle: 120,
			  yValueFormatString: "(##0\)",
              toolTipContent: "<b>{label}</b>: {y}",
              showInLegend: "true",
              legendText: "{label} {y}",
              indexLabelFontSize: 17,
              indexLabel: "{label} {y}",
              dataPoints: estadisticas,
            }]
        };
        let chart = new CanvasJS.Chart("heroStats", config);
        chart.render();
      },
    });
  });
});
