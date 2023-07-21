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
  <article class="card card-single card_top-story">
    <header class="card-header">
      <h2 class="card-title">New Video</h2><span class="devtip">.card-single .card_video</span>
    </header>
    <div class="videoWrapper">
      <iframe class="video-embed" width="560" height="315" src="https://www.youtube.com/embed/5LWDl5qaQbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <h3 class="video-meta title">Ice cream is really delicious... here's why</h3>
    <img class="video-meta video-profile" src="https://placedog.net/200/200" alt="blah">
    <span class="video-meta text video-author">MKBHD</span>
    <span class="video-meta text video-timestamp">2 million years ago</span>
    <CardFooter article_url="articleArray.article_url"/>
   </article>

</template>

<style scoped lang="scss">
  .card_video {
  
    flex: 1 0 35%;
  
    iframe {
      width: 100%;  // temporary
    }
  }
  h3 {
    margin: 1rem;
  }
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; //16:9
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
  .video-meta.text {
      display: block;
  }
  .video-author {
    font-weight: bold;
    margin-top: 0.3rem;
  }
</style>
