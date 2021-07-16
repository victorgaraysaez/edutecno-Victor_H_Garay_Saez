import Impuesto from './impuesto.js';
import Cliente from './cliente.js';

const btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', () =>{

    let nombre = document.getElementById('nombre').value
    let montoBruto = document.getElementById('montoBruto').value
    let deducciones = document.getElementById('deducciones').value
    let form = document.getElementById('form')

    const impuesto = new Impuesto(montoBruto, deducciones)
    const cliente = new Cliente(nombre, impuesto) 

const agregar = () =>{
    document.getElementById('datos').innerHTML += cliente._nombre + '. Su impuesto a pagar es: $' + cliente.calcularImpuesto() + '.-' +  '<br>'
    }
    agregar()
});
