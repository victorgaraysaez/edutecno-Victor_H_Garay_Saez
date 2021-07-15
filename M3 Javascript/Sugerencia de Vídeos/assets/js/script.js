const playVideo = () => {
    let privateFunction = (url, id) => {
        id.setAttribute("src", url);
    }
    return {
        public_f: (url, id) => {
            privateFunction(url, id);
        }
    }
};

class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }
    get url() {
        return this.getUrl();
    }
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`;
    }
}
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }
    playMultimedia() {
        playVideo().public_f(this.url, this.id);
    }
    setInicio(tiempo) {
        let temp_url = `${this.url}?start=${tiempo}`;
        this.id.setAttribute("src", temp_url);
        return "Estoy en el set Inicio";
    }
}

let iframeMusica = document.getElementById("musica");
let iframePeliculas = document.getElementById("peliculas");
let iframeSeries = document.getElementById("series");

let urlMusica = "https://www.youtube.com/embed/6j0HfZCP-og";
let urlPeliculas = "https://www.youtube.com/embed/ovcaSUhcC1s";
let urlSeries = "https://www.youtube.com/embed/kLVDMMWZXIQ";

var optMusica = new Reproductor(urlMusica, iframeMusica);
var optPeliculas = new Reproductor(urlPeliculas, iframePeliculas);
var optSeries = new Reproductor(urlSeries, iframeSeries);

optMusica.playMultimedia();
optPeliculas.playMultimedia();
optSeries.playMultimedia();
