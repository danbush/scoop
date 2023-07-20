<script setup lang="ts">
  /************************** 
  Single video component
  todo: fill out this section
  ***************************/

  import CardFooter from './CardFooter.vue'

  defineProps<{
    url: string
  }>()
</script>

<template>

  <article class="card card-single card_video">
    <header class="card-header">
      <h2 class="card-title">New Video</h2><span class="devtip">.card-single .card_video</span>
    </header>
    <div class="card-content">
      <div class="videoWrapper">
        <iframe class="video-embed" width="560" height="315" src="https://www.youtube.com/embed/5LWDl5qaQbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h3>Ice cream is really delicious... here's why</h3>
      <div class="video-meta-container">
        <img class="video-meta video-profile" src="https://placedog.net/200/200" alt="blah">
        <span class="video-meta text video-author">MKBHD</span>
        <span class="video-meta text video-timestamp">2 million years ago</span>
      </div>
    </div>

    <CardFooter />

  </article>

</template>

<style scoped lang="scss">

</style>
