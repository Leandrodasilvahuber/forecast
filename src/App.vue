<template>
<v-app>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <Top></Top>
        </v-col>
      </v-row>
      <v-row>
        <div v-if="weatherData">
        <v-col>
            <v-card class="weather-card" elevation="2">
              <Today :weatherData="weatherData" class="mr-8"></Today>
              <v-divider></v-divider>
              <Partial :weatherData="weatherData"></Partial>
              <v-divider></v-divider>
              <Week :weatherData="weatherData"></Week>
            </v-card>
        </v-col>
      </div>
      </v-row>
      </v-container>  
  </v-main>
</v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import Today from './components/Today.vue';
  import Partial from './components/Partial.vue';
  import Week from './components/Week.vue';
  import Top from './components/Top.vue'
  import axios from 'axios'
  import { onMounted } from 'vue';

  const weatherData = ref(null);

  onMounted(async () => {
    try {
      //const responseToday = await axios.get('http://localhost:3000/forecast');
      const responseToday = await axios.get('https://api.leandrohuber.com.br/forecast');
      weatherData.value = responseToday.data.forecast;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  });
</script>

<style scoped>
  .weather-card {
    border-radius: 12px;
  }
</style>