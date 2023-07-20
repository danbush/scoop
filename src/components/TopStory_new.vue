<script setup lang="ts">
  /************************** 
  Top story component
  todo: fill out this section
  ***************************/

  import CardFooter from './CardFooter.vue'
  import { chocolateSauce } from './helpers/chocolate_sauce'

  defineProps<{
    headline: string,
    body: string
  }>()
  
  var articleArray: any = {}
  chocolateSauce('https://techcrunch.com/feed/')
  .then((result) => {
    articleArray = result
    console.log(articleArray)
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<template>
  <article class="card card-single card_top-story">
    <header class="card-header">
      <h2 class="card-title">Top Story</h2><span class="devtip"> // .card-single .card_top-story</span>
    </header>
    <span class="article-image-wraper" :style="{ 'background-image': 'url(' + articleArray.article_image + ')' }"></span>
    <img class="article-logo" :src="articleArray.article_logo" alt="cows">
    <h3 class="article-title">{{ articleArray.article_title }}</h3>
    <div class="article-body">{{ articleArray.article_body }}</div>
    <CardFooter :article_url="articleArray.article_url"/>
   </article>
</template>

<style scoped lang="scss">
  .card_top-story {
  
    flex: 1 0 750px;
    width: 100%;
    min-height: 27rem;
  
    background-color: $background-lighter;
    border-radius: 8px;
    position: relative;
    
    .article-title {
      margin-top: 0.4rem;
    }
    
    .article-logo {
      max-width: 30px;
      margin-top: 1rem;
    }
    
    .article-image-wraper {
      width: 25vi;
      height: 25vi;
      display: block;
      float: left;
      background-size: contain;
      background-repeat: no-repeat;
      margin: 1rem;
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
