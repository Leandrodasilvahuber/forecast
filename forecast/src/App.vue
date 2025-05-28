<script setup lang="ts">

    import Title from './components/Title.vue';
    import WeatherApp from './components/WeatherApp.vue';
    import SurfPredictionApp from './components/SurfPredictionApp.vue';
    import Footer from './components/Footer.vue';

  // Simular mudança de condições do tempo
  setInterval(() => {
      const weatherCards = document.querySelectorAll('.weather-card div:last-child');
      weatherCards.forEach(card => {
          const randomValue = Math.floor(Math.random() * 10) + 1;
          if (card.textContent.includes('°C')) {
              card.textContent = `${randomValue + 15}°C`;
          } else if (card.textContent.includes('%')) {
              card.textContent = `${randomValue * 10}%`;
          } else if (card.textContent.includes('m')) {
              card.textContent = `${(randomValue / 2).toFixed(1)}m`;
          } else {
              card.textContent = `${randomValue + 5}km/h`;
          }
      });
      
      // Atualizar status do surf aleatoriamente
      const status = document.querySelector('.surf-status');
      const icons = document.querySelectorAll('.surf-icon');
      const statusClasses = ['excellent', 'good', 'medium', 'bad'];
      const statusTexts = ['RUIM', 'REGULAR', 'BOA', 'ÓTIMA'];
      const statusIcons = ['👎', '😐', '👍', '🤙'];
      
      const randomStatus = Math.floor(Math.random() * 4);
      
      status.className = 'surf-status ' + statusClasses[randomStatus];
      status.textContent = `CONDIÇÕES: ${statusTexts[randomStatus]}`;
      
      icons[0].textContent = statusIcons[randomStatus];
  }, 3000);
</script>

<template>
    <Title>leandro Hüber (8-bits)</Title>
    <WeatherApp></WeatherApp>
    <SurfPredictionApp></SurfPredictionApp>
    <Footer>emaildohuber@gmail.com | (51) 98555-8361</Footer>
</template>

<style>
    .project {
        border: var(--border) var(--primary);
        padding: 15px;
        margin-bottom: 30px;
        background-color: rgba(0, 0, 0, 0.7);
        position: relative;
    }
    
    .project-title {
        color: var(--secondary);
        font-size: 1.5rem;
        margin-top: 0;
        border-bottom: 2px solid var(--primary);
        padding-bottom: 5px;
    }
    
    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 31px;
        margin: 15px 0;
    }
    
    .tech-item {
        border: 2px solid var(--secondary);
        padding: 3px 8px;
        font-size: 0.8rem;
    }

</style>
