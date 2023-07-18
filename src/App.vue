<script setup lang="ts">
import Header from './components/Header.vue'
import TopStory from './components/TopStory.vue'
import SingleVideo from './components/SingleVideo.vue'
import CardsTest from './components/CardsTest.vue'
</script>

<template>
  <Header msg="scoopy" />
    <section class="module-row">
<!--
      <TopStory headline="" body="" />
      <SingleVideo url="https://www.youtube.com/embed/5LWDl5qaQbA" />
-->
      <CardsTest headline="" body="" url="" />

    </section>
</template>

<style lang="scss">
  section.module-row {
    display: flex;
    gap: 1rem;
    margin: 1rem;
    flex-wrap: wrap;
  }


/*

  article.single-video {
    flex: 3;
    min-height: 200px;
    min-width: 392px;
    background-color: $background-lighter;
    border-radius: 8px;
    
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

*/

    p, span {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }



</style>
