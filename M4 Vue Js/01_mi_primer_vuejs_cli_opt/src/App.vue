<template>
  <div id="app" class="container">
    <h1>Tabla de Usuarios</h1>
    <table>
      <thead>
           <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
              <th scope="col">RUN</th>
              <th scope="col">Nacimiento</th>
              <th scope="col">Edad</th>
          </thead>
         <tbody>
            <tr v-for="(persona, index) in personas" :key="index">
              <th scope="row">{{ persona.id }}</th>
              <td >{{ persona.nombre }}</td>
              <td >{{ persona.apellido }}</td>
              <td >{{ persona.run }}</td>
              <td >{{ persona.nacimiento }}</td>
              <td >{{ persona.edad }}</td>
            </tr>
          </tbody>
        </table>
</div>
</template>

<script>
export default {
  data() {
    return {
      personas: [
        { id:1,nombre: 'Martin Alonso',apellido:'Pinzon',run:'12345678-1', nacimiento:'23-05-1441',edad:52},
        { id:2,nombre: 'Juan Sebastian',apellido:'Elcano',run:'9876543-2', nacimiento:'01-01-1486',edad:40 },
        { id:3,nombre: 'Americo',apellido:'Vespucio',run:'1243576-3', nacimiento:'09-03-1454',edad:58 },
      ],
    };
  },
};
</script>

<style>

body {
  font-family: "Arial", sans-serif;
  color: black;
}

h1 {
    text-align:center;
}

.container {
  padding: 10px 10%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

}

th, td {
  text-align: left;
  padding: 16px;
}

tr:nth-child(odd) {
  background-color: #f2f2f2;
}
</style>
