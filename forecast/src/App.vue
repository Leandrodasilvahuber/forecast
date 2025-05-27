<script setup lang="ts">

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
  <div style="text-align: center;" >
    <h1 class="title">leandro Hüber (8-bits)</h1>
    <div class="loading-bar">
      <div class="loading-progress"></div>
    </div>
  </div>
  
  <!-- Projeto 1: Weather App Vue.js -->
  <div class="project pixel-corners">
      <h2 class="project-title">SURF WEATHER STATION</h2>

      <div class="tech-stack">
          <span class="tech-item">Segunda</span>
          <span class="tech-item">Terça</span>
          <span class="tech-item">Quarta</span>
          <span class="tech-item">Quinta</span>
          <span class="tech-item">Sexta</span>
          <span class="tech-item">Sábado</span>
          <span class="tech-item">Domingo</span>
      </div>
      
      <div class="weather-display">
          <div class="weather-card">
              <div class="weather-icon">☀️</div>
              <div>Temperatura</div>
              <div>24°C</div>
          </div>
          <div class="weather-card">
              <div class="weather-icon">💧</div>
              <div>Precipitação</div>
              <div>10%</div>
          </div>
          <div class="weather-card">
              <div class="weather-icon">🌊</div>
              <div>Ondulação</div>
              <div>1.5m</div>
          </div>
          <div class="weather-card">
              <div class="weather-icon">↘️</div>
              <div>Vento</div>
              <div>12km/h</div>
          </div>
      </div>
      
  </div>
  
  <!-- Projeto 2: Surf Prediction ML -->
  <div class="project pixel-corners">
      <h2 class="project-title">MACHINE LEARNING SURF PREDICTION</h2>
      <div class="tech-stack">
        <span class="tech-item">Hoje</span>
        <span class="tech-item">+1 dias</span>
        <span class="tech-item">+2 dias</span>
        <span class="tech-item">+3 dias</span>
        <span class="tech-item">+4 dias</span>
        <span class="tech-item">+5 dias</span>
      </div>
      
      <div class="surf-prediction">
          <div class="surf-icon">🤙</div>
          <div class="surf-status excellent">CONDIÇÃO: ÓTIMA!</div>
      </div>
      
      <div style="margin-top: 60px;">

          <div style="display: flex; justify-content:flex-start; margin-top: 20px;">
              <div style="text-align: center; margin-right: 17px; border: 2px solid var(--secondary); padding: 7px; ">
                  <div style="font-size: 1rem;">👎</div>
                  <div>RUIM</div>
              </div>
              <div style="text-align: center; margin-right: 17px; border: 2px solid var(--secondary); padding: 7px; ">
                  <div style="font-size: 1rem;">😐</div>
                  <div>REGULAR</div>
              </div>
              <div style="text-align: center; margin-right: 17px; border: 2px solid var(--secondary); padding: 7px; ">
                  <div style="font-size: 1rem;">👍</div>
                  <div>BOA</div>
              </div>
              <div style="text-align: center; margin-right: 17px; border: 2px solid var(--secondary); padding: 7px; ">
                  <div style="font-size: 1rem;">🤙</div>
                  <div>ÓTIMA</div>
              </div>
          </div>
      </div>
  </div>
  
  <div class="footer">
      <p>emaildohuber@gmail.com | (51) 98555-8361</p>
  </div>
  
</template>

<style>
    
    .title {
        font-size: 2.5rem;
        color: var(--primary);
        text-shadow: 4px 4px 0 var(--secondary);
        margin-bottom: 5px;
        letter-spacing: 2px;
    }
    
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
    
    .weather-display {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        margin: 20px 0;
    }
    
    .weather-card {
        border: 2px solid var(--primary);
        padding: 10px;
        text-align: center;
    }
    
    .weather-icon {
        font-size: 2rem;
        margin-bottom: 5px;
    }
    
    .surf-prediction {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0;
    }
    
    .surf-icon {
        font-size: 4rem;
        margin: 10px 0;
    }
    
    .surf-status {
        font-size: 1.5rem;
        padding: 5px 15px;
        border: 3px solid;
    }
    
    .excellent {
        color: var(--success);
        border-color: var(--success);
    }
    
    .good {
        color: var(--secondary);
        border-color: var(--secondary);
    }
    
    .medium {
        color: var(--warning);
        border-color: var(--warning);
    }
    
    .bad {
        color: var(--primary);
        border-color: var(--primary);
    }

    .footer {
        text-align: center;
        margin-top: 30px;
        padding-top: 10px;
    }
    
    .pixel-corners {
        position: relative;
    }
    
    .pixel-corners::before,
    .pixel-corners::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: var(--primary);
    }
    
    .pixel-corners::before {
        top: -5px;
        left: -5px;
    }
    
    .pixel-corners::after {
        bottom: -5px;
        right: -5px;
    }
    
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    
    .loading-bar {
        height: 20px;
        border: 2px solid var(--primary);
        margin: 20px 0;
        position: relative;
        overflow: hidden;
    }
    
    .loading-progress {
        height: 100%;
        background-color: rgb(83, 123, 231);
        width: 0;
        animation: loading 15s forwards;
    }
    
    @keyframes loading {
        to { width: 100%; }
      }
</style>
