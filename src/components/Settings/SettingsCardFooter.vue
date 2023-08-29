<script setup lang="ts">
  /************************** 
  Single video component
  todo:
    - fill out this section
    - pass in props from parent (until then, URLS are dummies)
  ***************************/
  defineProps<{
    
  }>()
</script>

<template>
  <footer class="card-footer">
  </footer>
</template>

<style scoped lang="scss">
  .card-footer {

    width: 100%;
    margin-top: auto;
    padding: $card_padding-internal;

    background-color: var(--card-footer-background);

  }
  .card-actions {
  
    display: flex;
    justify-content: flex-end;
  
    .button {
      margin-left: .8rem;
    }
  
  }
</style>
