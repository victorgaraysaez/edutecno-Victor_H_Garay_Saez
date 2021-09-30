<template>
  <div class="content">
    <div class="title">
      <h1> Random Gif Cat </h1>
    </div>
    <div class="Filters">
      <p class="instruction">
        Título:
        <input
          v-model="message"
          class="alteInput"
          type="text"
          placeholder="Aca, mensaje chistoso XD"
        />
      </p>
      <p class="instruction">
        Filtro:
        <select v-model="selectFilter" class="alteInput">
          <option disabled selected> Elija aca... </option>
          <option
            @click="selectFilter = element"
            v-for="element in filters"
            :key="element"
            :value="element"
          >
            {{ element }}
          </option>
        </select>
      </p>
      <div class="instruction">
        <p class="color">
          Color:
          <select class="alteInput" v-model="selectColor">
            <option disabled selected> Elija aca... </option>
              <option value="red">Rojo</option>
              <option value="blue">Azul</option>
              <option value="green">Verde</option>
              <option value="white">Blanco</option>
              <option value="yellow">Amarillo</option>
              <option value="purple">Morado</option>
              <option value="black">Negro</option>
            <option
              @click="selectColor = element"
              v-for="element in colors"
              :key="element"
              :value="element"
            >
              {{ element }}
            </option>
          </select>
        </p>
        <div
          :style="{ 'background-color': this.selectColor }"
          class="roundelColor"
        ></div>
      </div>
      <p class="instruction">
        Tamaño:
        <input
          v-model.number="typeSize"
          class="alteInput"
          type="number"
          min="1"
          placeholder="tamaño entre 100 y 500..."
        />
      </p>
    </div>
    <div class="gif">
      <button @click="kittyCat" class="btnGato"> Obtener mi gatito </button>
      <div>
        <img v-if="imageResol" :src="imageResol" alt="WhereIsMyKittyCat" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
      filters: ["blur", "mono", "sepia", "negative", "paint", "pixel"],
      colors: [" ",],
      selectFilter: "Elija aca... ",
      selectColor: "Elija aca... ",
      typeSize: null,
      imageResol: "",
    };
  },

  methods: {
    kittyCat() {
      this.imageResol = `https://cataas.com/cat/gif/says/${this.message}?filter=${this.selectFilter}&color=${this.selectColor}&size=${this.typeSize}`;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "cabin", sans-serif;
}
.content {
  max-width: 700px;
  margin: auto;
}
.title {
  text-align: center;
  padding: 40px 0 20px 0;
  background-color: #add8e6;
  color: #394854;
  font-size: 18px;
  font-weight: 700;
}
.alteInput {
  padding: 2px 0;
}
.Filters {
  padding: 10px;
  background-color: #f08080;
}
.instruction {
  margin: 20px 0;
  text-align: left;
  padding-left: 50px;
  color: #394854;
  font-size: 16px;
  font-weight: 400;
}
.color {
  display: inline-block;
  align-items: center;
}
.roundelColor {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  display: inline-block;
}
.gif {
  padding: 20px 0 50px 0;
  background-color: #add8e6;
  text-align: center;
}
.btnGato {
  margin-bottom: 20px;
  padding: 5px 10px;
  color: #394854;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  border-color: #f08080;
  cursor: pointer;
}
</style>