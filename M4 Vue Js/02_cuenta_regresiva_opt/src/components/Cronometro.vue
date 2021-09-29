<template>
<!--Es primera vez que ocupo una pagina de componentes -->
    <div>
        <h1> Desafío Opcional - Cuenta Regresiva </h1>
        <h1>{{cronometro(crono)}}</h1>
        <button class="boton" v-for="tictoc in boton" :key="tictoc" @click="cuentaRegresiva(tictoc.tiempo)">{{tictoc.name}}</button>
    </div>
</template>
<script>
export default {
    name: 'Cronometro',
    data() {
        return {
            crono: 0,
            boton: [
                {name: '3s', tiempo: 3},
                {name: '10s', tiempo: 10},
                {name: '30s', tiempo: 30},
                {name: '1m', tiempo: 60},
            ],
            intervalo: '',
            estado: {activo: false},
        }
    },
    //este metodo es muy genial y lo dejo citado para evitar lios de propiedad intelectual//
    //https://qastack.mx/programming/3733227/javascript-seconds-to-minutes-and-seconds//
    methods: {
        cronometro: function(crono) {
            let segundos = ('0' + Math.floor(crono % 60)).slice(-2);
            let minutos = ('0' + Math.floor(crono / 60 % 60)).slice(-2);
            return `${minutos}:${segundos}`
        },
        cuentaRegresiva: function(cuenta) {
            this.crono = cuenta;
            this.estado.activo = true;
            this.intervalo = setInterval(() => {
                if (this.crono > 0) {
                    this.crono --;
                } else {
                    clearInterval(this.intervalo)
                }
            },2000)
        }
    },
}
</script>
<style>
.boton{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 17px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>