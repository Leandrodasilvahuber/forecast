<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps({
    weatherData: Object
  })

  const currentDate = computed(() => {
    return new Date().toLocaleDateString(
      'pt-BR', 
      { weekday: 'long', day: 'numeric', month: 'long' }
    ).toUpperCase();
  });
</script>

<template>
    <v-card-title class="d-flex justify-space-between align-center">
      <div>
        <span class="text-caption text-grey"><h3>{{ currentDate }}</h3></span>
      </div>
    </v-card-title>
    <v-card-title class="d-flex justify-space-between align-center">
      <div>
        <span class="text-caption mb-5"><h1>{{ props.weatherData.condition }}</h1></span>
      </div>
    </v-card-title>
    <v-card-text class="current-weather">
      <div class="d-flex align-center">
        <div class="text-center mr-6">
          <span style="font-size: 56px">{{ props.weatherData.conditionIcon }}</span>
        </div>
        <div>
          <span class="text-h2">{{ props.weatherData.currentTemp }}°'🌡️'</span>
        </div>
      </div>
    </v-card-text>
</template>

<style scoped>
  .current-weather {
    padding-bottom: 0;
  }
</style>
