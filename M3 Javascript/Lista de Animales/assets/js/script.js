class Dueno {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    generarDatos() {
        return `El nombre del dueño es: ${this.nombre}, Su domicilio es: ${this.direccion}, y el número teléfonico de contacto es: ${this.telefono}`
    }
}
class Mascota extends Dueno {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }
    mostrarTipo() {
        return `El tipo de animal es un: ${this.tipo}`;
    }

}

class Especie extends Mascota {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(nuevo_nombreMascota) {
        this._nombreMascota = nuevo_nombreMascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(nueva_enfermedad) {
        this._enfermedad = nueva_enfermedad;
    }
};

let lanudo = new Especie(
  "Julio Cesar",
  "Barrio Italia",
  "987654321",
  "perro",
  "satochiTomy",
  "somnolencia"
);
console.log(lanudo);
console.log(lanudo.nombre);
console.log(lanudo.direccion);
console.log(lanudo.telefono);
console.log(lanudo.tipo);
console.log(lanudo.nombreMascota);
console.log(lanudo.enfermedad);

let llenarFicha = document.querySelector('form');
let ficha = (event) => {
    event.preventDefault();
    let nombreDueno = document.getElementById('propietario').value;
    let numTelef = document.getElementById('telefono').value;
    let domicilio = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let resultado = document.getElementById('resultado');
    if (tipo == 'perro') {
        let perro = new Especie(nombreDueno, domicilio, numTelef, tipo, nombreMascota, enfermedad);
        resultado.innerHTML = `<li>${perro.generarDatos()}.</li>
    <li>${perro.mostrarTipo()}, mientras que el nombre de la mascota es: ${perro.nombreMascota} y la enfermedad es: ${perro.enfermedad}.</li>`;

    } else if (tipo == 'gato') {
        let gato = new Especie(nombreDueno, domicilio, numTelef, tipo, nombreMascota, enfermedad);
        resultado.innerHTML = `<li>${gato.generarDatos()}.</li>
<li>${gato.mostrarTipo()}, mientras que el nombre de la mascota es: ${gato.nombreMascota} y la enfermedad es: ${gato.enfermedad}.</li>`;
    } else if (tipo == 'conejo') {
        let conejo = new Especie(nombreDueno, domicilio, numTelef, tipo, nombreMascota, enfermedad);
        resultado.innerHTML = `<li>${conejo.generarDatos()}.</li>
    <li>${conejo.mostrarTipo()}, mientras que el nombre de la mascota es: ${conejo.nombreMascota} y la enfermedad es: ${conejo.enfermedad}.</li>`;
    }

}

llenarFicha.addEventListener('submit', ficha);