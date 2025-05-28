<template>
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
</template>

<style scoped>
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
</style>
