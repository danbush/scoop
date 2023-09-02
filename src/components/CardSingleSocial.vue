<script setup lang="ts">
  /************************** 
  Top level Social Feed Card container
  todo: fill out this section
  ***************************/
  
  defineProps<{
    card_title: string
    
  }>()

</script>

<template>
  <article class="card card-single card-social">
    
    <header class="card-header">
      <hgroup>
        <h2 class="card-title">{{card_title}}</h2>
        <span class="card-description">{{card_description}}</span>
      </hgroup>
    </header>

    <section class="card-body">
      <slot />
    </section>

  </article>
</template>

<style scoped lang="scss">

</style>