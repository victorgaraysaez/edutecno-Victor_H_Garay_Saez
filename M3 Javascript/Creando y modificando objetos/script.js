var $texto = '';
function Consultorio(nombre, paciente) {
     this.nombre = nombre;
  this.paciente = paciente || [];
}

function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    Object.defineProperty(this, "_getNombre", {
        get: function () {
        return _nombre;
        }
        });

        Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
        _nombre = nombre;
        }
        });

    var _edad = edad;
    Object.defineProperty(this, "_getEdad", {
        get: function () {
        return _edad;
        }
        });

        Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
        _edad = edad;
        }
        });

    var _rut = rut;
    Object.defineProperty(this, "_getRut", {
        get: function () {
        return _rut;
        }
        });

        Object.defineProperty(this, "_setRut", {
        set: function (rut) {
        _rut = rut;
        }
        });
    
    var _diagnostico = diagnostico;
    Object.defineProperty(this, "_getDiag", {
        get: function () {
        return _diagnostico;
        }
        });

        Object.defineProperty(this, "_setDiag", {
        set: function (diagnostico) {
        _diagnostico = diagnostico;
        }
        });
     
}

Paciente.prototype.getNombre = function(nombre){
return this._getNombre;
};
Paciente.prototype._setNombre = function(nombre){
this._setNombre = nombre;
};

Paciente.prototype.getRut = function(rut){
return this._getRut;
};
Paciente.prototype._setRut = function(rut){
this._setRut = rut;
};

Paciente.prototype.getEdad = function(edad){
return this._getEdad;
};
Paciente.prototype._setEdad = function(edad){
this._setEdad = edad;
};

Paciente.prototype.getDiag = function(diagnostico){
return this._getDiag;
};
Paciente.prototype._setDiag = function(diagnostico){
this._setDiag = diagnostico;
};

Consultorio.prototype.setAgregarPaciente = function (paciente_nuevo) {
  this.paciente.push(paciente_nuevo);
}

var paciente1 = new Paciente('Julio Cesar', 56, '9876543-2', 'Rotavirus');
var consultorio1 = new Consultorio('Consultorio N°1', [paciente1]);

const guardar_pacientes = () => {

  var an = document.getElementById('nomPac').value;
  var ae = parseInt(document.getElementById('eddPac').value);
  var ar = document.getElementById('rutPac').value;
  var ad = document.getElementById('dgnPac').value;
  if (an.length == 0) {
    alert('Nombre Vacío');
    document.getElementById("nomPac").focus();
    return;
  }

  if (isNaN(ae) || ae < 0) {
    alert('Edad debe ser mayor o igual a 0');
    document.getElementById("eddPac").focus();
    return;
  }
  if (ar.length == 0) {
    alert('Rut Vacío');
    document.getElementById("rutPac").focus();
    return;
  }
  if (ad.length == 0) {
    alert('Diagnóstico Vacío');
    document.getElementById("dgnPac").focus();
    return;
  }

  var pacienteX = new Paciente(an, ae, ar, ad);
  consultorio1.setAgregarPaciente(pacienteX);
    
  document.getElementById("nomPac").value = '';
  document.getElementById("eddPac").value = '';
  document.getElementById("rutPac").value = '';
  document.getElementById("dgnPac").value = '';
}

const mostrar_pacientes = () => {
  var divr = document.getElementById("mstrPac")
  var $i = 0;
      for ($i = 0; $i < consultorio1.paciente.length; $i++) {
    $texto += '<p>NOMBRE:' + consultorio1.paciente[$i].getNombre() + ', EDAD:' + consultorio1.paciente[$i].getEdad() + ', RUT:';   
    $texto += consultorio1.paciente[$i].getRut() + ', DIAGNOSTICO:' + consultorio1.paciente[$i].getDiag() + '</p>';
   console.log(consultorio1.paciente[$i].nombre);
  }

  document.getElementById("mstrPac").innerHTML = $texto;
}

const buscar_pacientes = () => {
    var abuscar = document.getElementById("nombre2_p").value
   const resultado = consultorio1.paciente.find(
    pac => pac.getNombre() === abuscar
  );
    if (resultado === undefined ){} 
    else
    {
      $texto = '<p></p>';
      $texto +=
      resultado.getNombre() +
      ", EDAD:" +
      resultado.getEdad() +
      ", RUT:" +
      resultado.getRut() +
      ", DIAGNOSTICO:" +
      resultado.getDiag();
      document.getElementById("bscrPac").innerHTML = $texto;
    }
}