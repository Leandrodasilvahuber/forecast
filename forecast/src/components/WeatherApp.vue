<template>
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
</template>


<script>




    export default {
        
        data() {
            return {
            message: 'Hello Vue!'
            };
        },
        async mounted() {


            const url = 'http://servicos.cptec.inpe.br/XML/cidade/228/dia/0/ondas.xml';

            const response = await this.$axios.get(url)

            console.log(
                 this.xmlParaObjeto(response.data)
            )
    
        },
        methods: {
            xmlParaObjeto(xmlString) {

                const parser = new DOMParser();
                const doc = parser.parseFromString(xmlString, "text/xml");
                const root = doc.documentElement;
                
                const resultado = {};
                
                // Processa cada elemento filho
                Array.from(root.children).forEach(elemento => {
                    // Se o elemento tem filhos (segundo nível)
                    if (elemento.children.length > 0) {
                    const subObjeto = {};
                    
                    // Processa os elementos do segundo nível
                    Array.from(elemento.children).forEach(subElemento => {
                        subObjeto[subElemento.tagName] = subElemento.textContent;
                    });
                    
                    resultado[elemento.tagName] = subObjeto;
                    } 
                    // Elemento de primeiro nível sem filhos
                    else {
                    resultado[elemento.tagName] = elemento.textContent;
                    }
                });
                
                return resultado;
            }
        }
    };
</script>

<style scoped>
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
</style>
