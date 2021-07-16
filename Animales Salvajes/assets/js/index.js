import Leon from './leon.js';
import Lobo from './lobo.js';
import Oso from './oso.js';
import Serpiente from './serpiente.js';
import Aguila from './aguila.js';

let AnimalEncontrado = [];
let seccionAnimal = document.getElementById('Animales');
let div = document.createElement('div');
seccionAnimal.appendChild(div);
div.setAttribute('class', 'row row-cols-1 row-cols-md-4');
div.setAttribute('id', 'mural')
let animal = document.getElementById('animal');
animal.addEventListener('change', (event) => {
    try {
        let preview = document.getElementById('preview')
        while (preview.hasChildNodes()) {
            preview.removeChild(preview.firstChild);
        }
    } catch (error) {
    };
    switch (animal.value) {
        case 'Leon':
            llamada.mostrar('./assets/imgs/Leon.png');
            break;
        case 'Lobo':
            llamada.mostrar('./assets/imgs/Lobo.jpg');
            break;
        case 'Oso':
            llamada.mostrar('./assets/imgs/Oso.jpg');
            break;
        case 'Serpiente':
            llamada.mostrar('./assets/imgs/Serpiente.jpg');
            break;
        case 'Aguila':
            llamada.mostrar('./assets/imgs/Aguila.png');
            break;
        default:
            break;
    }
});

let edad = document.getElementById('edad');
let comentarios = document.getElementById('comentarios');
let btnRegistrar = document.getElementById('btnRegistrar');
btnRegistrar.addEventListener('click', () => {
    if ((animal.value == 'Seleccione un animal') || (edad.value == 'Seleccione un rango de años')) {
        return alert('Debe seleccionar un animal y un rango de años de edad')
    }
    else {
        let ingreso;
        switch (animal.value) {
            case 'Leon':
                ingreso = new Leon(animal.value, edad.value, comentarios.value)
                break;
            case 'Lobo':
                ingreso = new Lobo(animal.value, edad.value, comentarios.value)
                break;
            case 'Oso':
                ingreso = new Oso(animal.value, edad.value, comentarios.value)
                break;
            case 'Serpiente':
                ingreso = new Serpiente(animal.value, edad.value, comentarios.value)
                break;
            case 'Aguila':
                ingreso = new Aguila(animal.value, edad.value, comentarios.value)
                break;
            default:
                break;
        }
        AnimalEncontrado.push(ingreso);
        panel.tarjetas(ingreso);

        try {
            animal.value = 'Seleccione un animal';
            edad.value = 'Seleccione un rango de años';
            comentarios.value = '';
            let preview = document.getElementById('preview')
            while (preview.hasChildNodes()) {
                preview.removeChild(preview.firstChild);
            }
        } catch (error) {
        }
    }
})

let llamada = (() => {
    let agregarImagen = (url) => {
        let imagen = document.createElement('img');
        let elem = document.getElementById('preview');
        elem.appendChild(imagen);
        imagen.setAttribute('src', url);
        imagen.setAttribute('class', 'imgRegistro')
    }
    return {
        mostrar: (url) => agregarImagen(url)
    }
})();

let panel = (() => {
        let crearCards = (animalIngresado) => {
            let nombreAnimal = animalIngresado['nombre'];
            let imagenAnimal = animalIngresado['img'];
            let sonidoAnimal = animalIngresado['sonido'];
            let edadAnimal = animalIngresado['edad'];
            let comentariosAnimal = animalIngresado['comentarios'];
            let divMural = document.getElementById('mural');
            let div1 = document.createElement('div');
            divMural.appendChild(div1);
            div1.setAttribute('class', 'col mb-4');
            let divCard = document.createElement('div');
            div1.appendChild(divCard);
            divCard.setAttribute('class', 'card cardMuro h-100');
            let imagen = document.createElement('img');
            divCard.appendChild(imagen);
            imagen.setAttribute('src', imagenAnimal);
            imagen.setAttribute('class', 'card-img-top imgCard');
            imagen.addEventListener("click", function () {
                let content = document.getElementById('content');
                content.innerHTML = `<img src="${imagenAnimal}" class="card-img-top imgModal" alt="imagen">
                <p>${edadAnimal}</p>
                <p>Comentarios</p>
                <p>${comentariosAnimal}</p>`;
                $('#exampleModal').modal();
            });
            let divFooter = document.createElement('div');
            div1.appendChild(divFooter);
            divFooter.setAttribute('class', 'card-footer');
            let button = document.createElement('button');
            button.setAttribute('class', 'btn btn-secondary btn-s');
            button.innerHTML = '<img src="assets/imgs/audio.svg" alt="MDN">';
            divFooter.appendChild(button);
            button.addEventListener("click", function () {
                let audio = document.getElementById('player');
                audio.setAttribute('src', sonidoAnimal);
                audio.setAttribute('type', 'audio/mpeg');
                audio.play();
            })
        }
        return {
            tarjetas: (AnimalEncontrado) => crearCards(AnimalEncontrado)
        }
    }                                                                                           
)();
