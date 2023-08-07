<script setup lang="ts">
  /************************** 
  Single Source Row component
  todo: fill out this section
  ***************************/
  import { singleSourceGrabber } from './helpers/singleSourceGrabber'
  import { ref, onMounted } from 'vue';
  
  // Define props for the component
  const { source = 1, count = 5 } = defineProps<{
    source: number,
    count: number
  }>();
  
  
  const rowObject = ref<any>(null);
  
  onMounted(async () => {
    rowObject.value = await singleSourceGrabber(source, count);
  });
</script>

<template>
    <article class="card card-single card_single-source-row"  v-if="rowObject">
      <header class="card-header">
        <h2 class="card-title">Dig In</h2>
      </header>
      <section class="card-content">
        <article class="balls card-tile" v-for="(value, key) in rowObject" :key="key">
        <a class="article-anchor-wrapper" :href="value?.article_url">
          <span class="article-image-wrapper" :style="{ 'background-image': 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.4) 35%, rgba(0,0,0,0.7) 100%), url(' + value?.article_image + ')' }">
            <img class="article-logo" :src="value?.article_logo" alt="cows">
            <h5 class="article-title">{{ value?.article_title }}</h5>
          </span>
        </a>
      </article>
      </section>

    </article>
</template>

<style scoped lang="scss">
  .card_single-source-row {
  
    flex: 4 0 100%;
    width: 100%;
    min-height: 23rem;
    max-height: 100rem;
  
    background-color: $background-lighter;
    border-radius: 8px;
    position: relative;
    
    .balls {
//      display: inline-flex;
//      vertical-align: top;
      .article-anchor-wrapper {
//        flex: 1;

      }
      .article-image-wrapper {
 //       width: 18vw;
 //       height: 23.5vw;

        display: flex;
        flex-direction: column;
        align-items: center;
        
      }
    }
    
    .card-tile {

      /*  todo:
          change this to a swipe on mobile.
          setting it as boring standard 1 item per row for now.
          */
      width: 100%;

    }
  
  }
</style>
