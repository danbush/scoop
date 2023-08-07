<script setup lang="ts">
  /************************** 
  Top story component
  todo: fill out this section
  ***************************/

  import CardFooter from './CardFooter.vue'
  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { hashtagBuildTheList } from './helpers/hashtag_buildthelist'
  import { ref, onMounted } from 'vue';
  import { getRandomNumbersInRange } from './helpers/sprinkle_getRandomNumbersInRange'
  
  const articleNumber: any[] = [getRandomNumbersInRange(1, 0, 24)]; //eventually get this thing to pick
  
  // Define a reactive object to store the article data
  var articleArray = ref<any>({})
  // Use async/await to handle asynchronous behavior
  async function fetchArticleData() {
    try {
      const result = await chocolateSauce(hashtagBuildTheList(articleNumber));
      articleArray.value = result;
      console.log(articleArray.value);
    } catch (err) {
      console.log(err);
    }
  }
  // Fetch the article data when the component is mounted
  onMounted(() => {
    fetchArticleData();
  }); 
</script>

<template>
  <article class="card card-single card_top-story">
    
    <!-- todo: make module -->
    <header class="card-header">
      <h2 class="card-title">Top Story</h2>
    </header>

    <!-- todo: make module -->
    <section class="card-body" v-if="articleArray.article_title">
      <a class="scoop-source-url" :href="articleArray.article_url" target="_blank">
        <span class="article-image-wraper" :style="{ 'background-image': 'url(' + articleArray.article_image + ')' }"></span>
        <img class="article-logo" :src="articleArray.article_logo" :alt="articleArray.article_publisher">
        <span class="article-publisher">{{ articleArray.article_publisher }}</span>
      </a>
      <h3 class="article-title">{{ articleArray.article_title }}</h3>
      <div class="article-body"><pre>{{ articleArray.article_body }}</pre></div>
    </section>

    <!-- todo: update module as needed -->
    <CardFooter :article_url="articleArray.article_url"/>

  </article>
</template>

<style scoped lang="scss">
  .card_top-story {
  
//    flex: 1 0 750px;
//    width: 100%;
//    min-height: 27rem;
  
    background-color: $background-lighter;
    border-radius: 8px;
    position: relative;
    
    pre {
      white-space: pre-wrap;
    }
    
    a.scoop-source-url {
      color: initial;
      text-decoration: none;
    }
    
    .article-title {
      margin-top: 0.4rem;
      margin-right: 1rem;
    }
    
    .article-logo {
      max-width: 30px;
      vertical-align: middle;
    }
    
    .article-publisher {
      margin-left: 0.5rem;
      vertical-align: middle;
      display: inline-block;
      
      font-size: 0.9rem;
      font-weight: 600;
    }
    
    .article-image-wraper {

      display: block;
      width: 100%;
      height: 12rem;
      margin: 0 calc($card_padding-internal * $phi ) 3rem 0;

      background-size: cover; // this is probably temporary
      background-position: center;
      background-repeat: no-repeat;
      
      border-radius: $card_border-radius;

      @include transition;  // move this, maybe make a class that auto-applies it to most clickable things?

      @include mq('small') {
        width: 100%;
        max-height: 14rem;
        margin-bottom: $card_padding-internal;
      }

      @include mq('medium') {
        width: 25vi;
        height: 25vi;
        float: left;
      }

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