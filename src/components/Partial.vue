<script setup lang="ts">
    import { computed } from "vue";

    const props = defineProps({
        weatherData: Object,
    });

    const weatherDetails = computed(() => [
        {
            emoji: "🌊",
            label: "Ondas",
            value: `${props.weatherData.waveHeight} m`,
        },
        {
            emoji: props.weatherData.waveDirectionIcon,
            label: "Ondas",
            value: `${props.weatherData.waveDirection}`,
        },
        {
            emoji: "💨",
            label: "Vento",
            value: `${props.weatherData.windSpeed} m/s`,
        },
        {
            emoji: props.weatherData.waveDirectionIcon,
            label: "Vento",
            value: `${props.weatherData.waveDirection}`,
        },
    ]);
</script>

<template>
    <v-card-text>
        <div class="d-flex">
            <div
                v-for="(detail, index) in weatherDetails"
                :key="index"
                class="text-center mr-10"
            >
                <span style="font-size: 28px">{{ detail.emoji }}</span>
                <div class="text-caption">{{ detail.value }}</div>
                <div class="text-caption text-grey">{{ detail.label }}</div>
            </div>
        </div>
    </v-card-text>
</template>
