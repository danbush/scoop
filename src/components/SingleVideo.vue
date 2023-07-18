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
  article.single-video {
    flex: 3;
    min-height: 200px;
    min-width: 392px;
    background-color: $background-lighter;
    border-radius: 8px;
    
    .videoWrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
      margin: 1rem;
    }
    .videoWrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .video-profile {
      width: 50px;
      height: 50px;
      border-radius: 100px;
      margin: 0 1rem;
      max-width: 50px;
      float: left;
      margin-top: -0.5rem;
    }
    .video-meta-container {
      height:50px;
      margin-bottom: 1rem;
    }
    .video-meta.text {
        display: block;
    }
    .video-author {
      font-weight: bold;
      margin-top: 0.3rem;
    }
    h2 {
      background-color: $accent-priority-one;
      padding: 0.5rem;
      
      font-family: "BitterPro", 'Courier New', Courier, monospace;
      font-weight: bold;
      font-size: 0.8rem;
      // todo: make these fonts a mixin.
      
      text-align: center;
    }
    h3 {
      margin: 1rem;
      
      font-family: "BitterPro", 'Courier New', Courier, monospace;
      font-weight: bold;
      font-size: 2.2rem;
    }
    p, span {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  }
</style>
