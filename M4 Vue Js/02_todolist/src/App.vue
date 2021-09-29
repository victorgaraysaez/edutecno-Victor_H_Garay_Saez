<template>
<div id="app" align="center" style="width:400px;">
<div>
<H3>Crea una nueva tarea.</H3>
  <input type="text" v-model="nuevaTarea" placeholder="Ingresa nueva tarea">
  <button @click="crearTarea">Crear</button>
  <br>
  <table class="table text-center">
    <thead>
      <tr>
        <th>id</th>
        <th></th>
        <th>tarea</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="(tarea, index) in tareas" :key="index">
        <td v-text="index"></td>
        <td>:</td>
        <td v-text="tarea.texto"></td>
      </tr>
    </tbody>
  </table>
</div>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            tareas: [{texto:'Poner la mesa'}],
            nuevaTarea: '',
        };
    },
    methods: {
        crearTarea: function(){
            if(this.nuevaTarea.length > 0) {
                this.tareas.push({texto: this.nuevaTarea});
                this.nuevaTarea = '';
            }
        }
    }
};
</script>

<style>
        #app {
            font-size: 25px;
            font-family: 'Calibri', sans-serif;
            color: #8d948d;
            align-items: center;
        }
</style>
