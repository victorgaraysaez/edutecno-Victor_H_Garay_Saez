<template>
  <div id="app">
    <ListaHija msg="Añade y/o Elimina una Tarea"/>
    Tarea:
<input type="text" placeholder="ingresa nueva tarea" v-model="añadetarea"/>
<button v-if="modificar" type="button" name="button" @click="agregarlista">Añade</button>
      
<ul>
<li v-for="(lista, index) in listas" :key="index">
<span>{{ lista.tarea }}</span>
<button class="btn-eliminar" type="button" name="button" @click="eliminartarea">eliminar</button>
</li>
</ul>
    
  </div>
</template>

<script>
import ListaHija from './components/ListaHija.vue'
export default {
  name: 'App',
  components: {
ListaHija
  },
  data() {
    return {
  modificar: true,
listas: [
  { tarea:'Poner la mesa'}
],
añadetarea:'',
}
},
 methods: {
  agregarlista: function() {
    if (this.añadetarea!= ''){
      this.listas.push({tarea:this.añadetarea, 
      })
    } else {
      alert('Por favor ingrese una tarea'
      )
    }
  this.añadetarea='';
  },
    eliminartarea(index){
      this.listas.splice(index,1);
  },
 },
}
</script>

<style>
#app {
  font-size: 25px;
  font-family: 'Calibri', sans-serif;
  color: #8d948d;
  align-items: center;
  text-align: center;
  margin-top: 60px;
}
li {
    list-style-position: inside;
}
.btn-eliminar {
  margin: 10px;
}
button {
  background-color: white;
  border: 1px solid #323339;
  border-radius: 5px;
}
</style>