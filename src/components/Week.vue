<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps({
    weatherData: Object
  })

  const forecast = computed(() => props.weatherData.forecast);
</script>

<template>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="d-flex flex-wrap forecast-container">
              <div v-for="(day, index) in forecast" :key="index" 
                class="text-center forecast-day" 
                :style="{ border: '1px solid', borderColor: day.color }
              ">
                <div style="font-size: 15px !important" class="text-caption font-weight-smaller mb-1 mt-1">{{ day.weekDay }}</div>
                  <v-divider></v-divider>
                <div style="font-size: 10px !important" class="text-caption font-weight-smaller mb-1 mt-1">{{ day.date }}</div>
                <v-divider></v-divider>
                <div style="font-size: 10px !important"  class="text-caption font-weight-smaller mb-1 mt-1">{{ day.time }}</div>
                
                <v-divider></v-divider>
                <div style="font-size: 18px" class="mb-1">{{ day.condicao.icon }}</div>

                <div style="font-size: 8px !important" class="text-caption font-weight-bold mb-2">
                  {{ day.condicao.text.substring(0, 11) }}
                </div>
                
                <v-divider></v-divider>
                <div style="font-size: 18px" class="mb-1">{{ day.emoji }}</div>
                <div class="text-caption font-weight-bold mb-2">
                  <div v-if="day.currentTemp > 15">
                    <span class="text-red">{{ day.currentTemp }}°</span>
                  </div>
                  <div v-else>
                    <span class="text-blue">{{ day.currentTemp }}°</span> 
                  </div>
                </div>
                <v-divider></v-divider>
                <div class="d-flex flex-column">
                  <div class="d-flex align-center mt-1">
                    <v-icon small class="mr-1">mdi-weather-windy</v-icon>
                    <span class="text-caption">{{ day.windSpeed }} m/s</span>
                  </div>
                  <div class="d-flex align-start mt-1">
                    <span class="text-caption">{{ day.windDirectionIcon }}</span>
                    <span class="text-caption">{{ day.windDirection }}</span>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex align-start mt-1">
                    <v-icon small class="mr-1">mdi-wave</v-icon>
                    <span class="text-caption">{{ day.waveHeight }}m</span>
                  </div>
                  <div class="d-flex align-start">
                    <span class="text-caption">{{ day.waveDirectionIcon }}</span>
                    <span class="text-caption">{{ day.waveDirection }}</span>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </template>

<style scoped>
  .forecast-container {
    gap: 8px;
  }
  .forecast-day {
    width: 82px;
    padding: 4px;
    border-radius: 8px;
    transition: background-color 0.3s;
    font-size: small;
    border: 2px solid #333; 
    border-radius: 4px; 
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2); 
  }
  .forecast-day:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
</style>
