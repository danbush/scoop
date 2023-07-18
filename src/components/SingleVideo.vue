<script setup lang="ts">
  /************************** 
  Single video component
  todo: fill out this section
  ***************************/
  defineProps<{
    url: string
  }>()
</script>

<template>
  <article class="module single-video">
    <h2>NEW VIDEO</h2>
    <div class="videoWrapper">
      <iframe class="video-embed" width="560" height="315" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <h3>Ice cream is really delicious... here's why</h3>
    <div class="video-meta-container">
      <img class="video-meta video-profile" src="https://placedog.net/200/200" alt="blah">
      <span class="video-meta text video-author">MKBHD</span>
      <span class="video-meta text video-timestamp">2 million years ago</span>
    </div>
  </article>
</template>

<style scoped lang="scss">

</style>
