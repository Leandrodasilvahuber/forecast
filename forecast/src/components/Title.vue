<template>
  <div style="text-align: center;" >
   <h1 class="title">
     <slot></slot>             
   </h1>
   <div class="loading-bar">
     <div class="loading-progress"></div>
   </div>
 </div>
</template>

<style scoped>
   .title {
       font-size: 2.5rem;
       color: var(--primary);
       text-shadow: 4px 4px 0 var(--secondary);
       margin-bottom: 5px;
       letter-spacing: 2px;
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