<script setup lang="ts">
  /************************** 
  Multiple Headlines component
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
        <h2 class="card-title">Dig In</h2><span class="devtip"> // .card-single .card_single-source-row</span>
      </header>
      <span class="balls" v-for="number in Object.keys(rowObject)" :key="number">
        <a class="article-anchor-wrapper" :href="rowObject[number]?.article_url">
          <span class="article-image-wrapper" :style="{ 'background-image': 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.4) 35%, rgba(0,0,0,0.7) 100%), url(' + rowObject[number]?.article_image + ')' }">
            <img class="article-logo" :src="rowObject[number]?.article_logo" alt="cows">
            <h5 class="article-title">{{ rowObject[number]?.article_title }}</h5>
          </span>
        </a>
      </span>
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
      display: inline-flex;
      vertical-align: top;
      .article-anchor-wrapper {
        flex: 1;
      }
      .article-image-wrapper {
        width: 18vw;
        height: 23.5vw;
        
      }
    }
    
    .article-title {
      margin: 0.4rem $card-padding-internal $card-padding-internal $card-padding-internal;
      color: $background-lighter;
      text-shadow: 0 0 12px #000000, 0 0 2px $background;
      text-align: center;
      text-decoration: none;
    }
    
    .article-logo {
      max-width: 30px;
      margin: $card-padding-internal auto 0 auto;
      display: block;
      filter: drop-shadow(0 0 12px #000000) drop-shadow(0 0 2px $background);
      background-color: $background-lighter;
    }
    
    .article-publisher {
      margin: 0.9rem 0 0 0.5rem;
      vertical-align: middle;
      display: inline-block;
      
      font-size: 0.9rem;
      font-weight: 600;
    }
    
    .article-image-wrapper {
      width: calc(100% - 2rem);
      height: 100%;
      display: block;
      float: left;
      background-color: $background;
      background-size: cover; // this is probably temporary
      background-position: center;
      background-repeat: no-repeat;
      margin: $card-padding-internal 0 $card-padding-internal 1.3vw;
      padding-bottom: $card-padding-internal;
      border-radius: $card_border-radius;
      transition: all .5s ease-in-out;
      overflow: hidden;
      
      &:hover {
        transform: scale(1.03) rotate(0.5deg);
        filter: brightness(1.08);
        box-shadow: 0px 0px 15px 0px lighten($background, 40%);
      }
      &:active {
        filter: brightness(1.25);
        transform: scale(0.98) rotate(0.5deg);
        transition: all .2s ease-in-out;
      }
    }
    
    span:last-of-type .article-image-wraper {
      margin-bottom: $card-padding-internal;
    }
    
    .article-body {
      margin: 0 $card-padding-internal;
    }
  
    .item-source {
  
      display: block;
  
      img {
        // sloppy, I know
        height: 1.6rem;
        width: auto;
      }
  
    }
  
  }
</style>
