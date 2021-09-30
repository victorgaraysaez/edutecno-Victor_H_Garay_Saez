<template>
  <div id="app">
    <img alt="logo pokemon" src="./assets/logo_pokemon.png">
     <h2>PokeGuía</h2>
        <label for="nombre_pokemon">Nombre</label>
        <input type="text" id="nombre_pokemon" v-model="nombre_pokemon.name">
        <button  type="button" class="btn" @click="createBuscar">buscar </button>
        <p>Recomendamos buscar tambien a charmeleon y a charizard junto con tipear solo minusculas.</p>
        <div v-if="ver">
        <img class="pokeimagen" v-bind:src= "image" >
        <h3>Habilidades</h3>
        <ul>
         <li v-for="(habilidad, index) in abilities" :key="index">
         {{habilidad.ability.name }}
         </li>
        </ul>
        <h3>Movimientos</h3>
        <ul>
         <li v-for="(movimiento, index) in moves" :key="index">
          {{movimiento.move.name }}
         </li>
        </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      nombre_pokemon: {
        name: 'charmander',
        moves:{},
        abilities:{},
        sprites:{
          front_default: '',
        },
      },
        ver: 'true',   
    }
  },
  methods:{
    createBuscar(){
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.nombre_pokemon.name}`)
      .then(resp => resp.json())
      .then(data => {
        this.nombre_pokemon = data;
      })
.catch(error => {
    alert('Lo sentimos, el nombre del Pokemon no existe o no ha seguido las recomendaciones de tipeo',error)
       })
    },
  },
  computed:{
    moves(){
      return this.nombre_pokemon.moves;
    },
    abilities(){
      return this.nombre_pokemon.abilities;
    },
    image(){
      return this.nombre_pokemon.sprites.front_default;
    },
  },
  created(){
    this.createBuscar();
  },
}
</script>

<style>
#app {
  font-family: 'Arial';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #323339;
  font-size: 20px;
}
img {
  width: 300px;
  height: 100px;
}
.pokeimagen{
  width: 200px;
  height: 200px;
  }
.btn {
    width: 60px;
    height: 25px;
    border: 3px solid #000000;
    border-radius: 10px;
}
h3{
  color: #00281f;
}
li {
  list-style: none;
  color: #000000;
  font-size: 20px;
  font-family: 'Arial';
}
</style>