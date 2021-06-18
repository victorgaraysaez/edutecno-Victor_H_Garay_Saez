
let radiologia = [
    {Hora: '11:00', Especialista: 'IGNACIO SCHULZ',        Paciente: 'FRANCISCA ROJAS', RUT: '9878782-1',  Previsión: 'FONASA'},
    {Hora: '11:30', Especialista: 'FEDERICO SUBERCASEAUX', Paciente: 'PAMELA ESTRADA',  RUT: '15345241-3', Previsión: 'ISAPRE'},
    {Hora: '15:00', Especialista: 'FERNANDO WURTHZ',       Paciente: 'ARMANDO LUNA',    RUT: '16445345-9', Previsión: 'ISAPRE'},
    {Hora: '15:30', Especialista: 'ANA MARIA GODOY',       Paciente: 'MANUEL GODOY',    RUT: '17666419-0', Previsión: 'FONASA'},
    {Hora: '16:00', Especialista: 'PATRICIA SUAZO',        Paciente: 'RAMON ULLOA',     RUT: '14989389-K', Previsión: 'FONASA'},

];

let traumatologia = [
    {Hora: '8:00',  Especialista: 'MARIA PAZ ALTUZARRA', Paciente: 'PAULA SANCHEZ',     RUT: '15554774-5', Previsión: 'FONASA'},
    {Hora: '10:00', Especialista: 'RAUL ARAYA',          Paciente: 'ANGÉLICA NAVAS',    RUT: '15444147-9', Previsión: 'ISAPRE'},
    {Hora: '10:30', Especialista: 'MARIA ARRIAGADA',     Paciente: 'ANA KLAPP',         RUT: '17879423-9', Previsión: 'ISAPRE'},
    {Hora: '11:00', Especialista: 'ALEJANDRO BADILLA',   Paciente: 'FELIPE MARDONES',   RUT: '1547423-6',  Previsión: 'ISAPRE'},
    {Hora: '11:30', Especialista: 'CECILIA BUDNIK',      Paciente: 'DIEGO MARRE',       RUT: '16554741-K', Previsión: 'FONASA'},
    {Hora: '12:00', Especialista: 'ARTURO CAVAGNARO',    Paciente: 'CECILIA MENDEZ',    RUT: '9747535-8',  Previsión: 'ISAPRE'},
    {Hora: '12:30', Especialista: 'ANDRES KANACRI',      Paciente: 'MARCIAL SUAZO',     RUT: '11254785-5', Previsión: 'ISAPRE'},
];

let dental = [
    {Hora: '8:30',  Especialista: 'ANDREA ZUÑIGA',          Paciente: 'MARCELA RETAMAL',RUT: '11123425-6', Previsión: 'ISAPRE'},
    {Hora: '11:00', Especialista: 'MARIA PIA ZAÑARTU',      Paciente: 'ANGEL MUÑOZ',    RUT: '9878789-2',  Previsión: 'ISAPRE'},
    {Hora: '11:30', Especialista: 'SCARLETT WITTING',       Paciente: 'MARIO KAST',     RUT: '7998789-5',  Previsión: 'FONASA'},
    {Hora: '13:00', Especialista: 'FRANCISCO VON TEUBER',   Paciente: 'KARIN FERNANDEZ',RUT: '18887662-K', Previsión: 'FONASA'},
    {Hora: '13:30', Especialista: 'EDUARDO VIÑUELA',        Paciente: 'HUGO SANCHEZ',   RUT: '17665461-4', Previsión: 'FONASA'},
    {Hora: '14:00', Especialista: 'RAQUEL VILLASECA',       Paciente: 'ANA SEPULVEDA',  RUT: '14441281-0', Previsión: 'ISAPRE'},
];

        Radiocontent = () => {
            var contenttbl = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
            for (var i = 0; i < radiologia.length; i++) {
                contenttbl += `<tr>
                <td>${radiologia[i].Hora}</td>
                <td>${radiologia[i].Especialista}</td>
                <td>${radiologia[i].Paciente}</td>
                <td>${radiologia[i].RUT}</td>
                <td>${radiologia[i].Previsión}</td>
                </tr>`;
            }
            document.getElementById("table-content").innerHTML = contenttbl;
        }

        let attnrayosX = document.getElementById("buttn-attn-rayosX");
        attnrayosX.addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("title").innerHTML = `Primera Atención: ${radiologia[0].Paciente} - ${radiologia[0].Previsión} || Última atención: ${radiologia[(radiologia.length-1)].Paciente} - ${radiologia[(radiologia.length-1)].Previsión}<br>`;
        });
		
		let Xrays = document.getElementById("buttn-rayosX");
        Xrays.addEventListener("click", function (e) {
            e.preventDefault();
            Radiocontent("rayosX");
        });

        Traumacontent = () => {
            var contenttbl = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
            for (var i = 0; i < traumatologia.length; i++) {
                contenttbl += `<tr>
                <td>${traumatologia[i].Hora}</td>
                <td>${traumatologia[i].Especialista}</td>
                <td>${traumatologia[i].Paciente}</td>
                <td>${traumatologia[i].RUT}</td>
                <td>${traumatologia[i].Previsión}</td>
                </tr>`;
            }
            document.getElementById("table-content").innerHTML = contenttbl;
        }

        let attntrauma = document.getElementById("buttn-attn-trauma");
        attntrauma.addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("title").innerHTML = `Primera Atención: ${traumatologia[0].Paciente} - ${traumatologia[0].Previsión} || Última atención: ${traumatologia[(traumatologia.length-1)].Paciente} - ${traumatologia[(traumatologia.length-1)].Previsión}<br>`;
        });
		
		let Jeremy = document.getElementById("buttn-trauma");
        Jeremy.addEventListener("click", function (e) {
            e.preventDefault();
            Traumacontent("trauma");
        });
			

        Dentalcontent = () => {
            var contenttbl = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
            for (var i = 0; i < dental.length; i++) {
                contenttbl += `<tr>
                <td>${dental[i].Hora}</td>
                <td>${dental[i].Especialista}</td>
                <td>${dental[i].Paciente}</td>
                <td>${dental[i].RUT}</td>
                <td>${dental[i].Previsión}</td>
                </tr>`;
            }
            document.getElementById("table-content").innerHTML = contenttbl;
        }

        let attndental = document.getElementById("buttn-attn-dental");
        attndental.addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("title").innerHTML = `Primera Atención: ${dental[0].Paciente} - ${dental[0].Previsión} || Última atención: ${dental[(dental.length-1)].Paciente} - ${dental[(dental.length-1)].Previsión}<br>`;
        });
		
		let Dentine = document.getElementById("buttn-dental");
        Dentine.addEventListener("click", function (e) {
            e.preventDefault();
            Dentalcontent("dental");
        });
					