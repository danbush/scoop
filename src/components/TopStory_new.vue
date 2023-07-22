<script setup lang="ts">
  /************************** 
  Top story component
  todo: fill out this section
  ***************************/

  import CardFooter from './CardFooter.vue'
  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { hashtagBuildTheList } from './helpers/hashtag_buildthelist'
  import { ref, onMounted } from 'vue';
  
  function getRandomNumbersInRange(count:number, min:number, max:number) {
    const numbers = new Set();
    while (numbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(randomNumber);
    }
    return Array.from(numbers);
  }
  
  const articleNumber: any[] = [getRandomNumbersInRange(1, 0, 20)]; //eventually get this thing to pick
  
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
      <h2 class="card-title">Top Story</h2><span class="devtip"> // .card-single .card_top-story</span>
    </header>

    <!-- todo: make module -->
    <section class="card-body" v-if="articleArray.article_title">
      <a class="scoop-source-url" :href="articleArray.article_publisher_url" target="_blank">
        <span class="article-image-wraper" :style="{ 'background-image': 'url(' + articleArray.article_image + ')' }"></span>
        <img class="article-logo" :src="articleArray.article_logo" alt="cows">
        <span class="article-publisher">{{ articleArray.article_publisher }}</span>
      </a>
      <h3 class="article-title">{{ articleArray.article_title }}</h3>
      <div class="article-body">{{ articleArray.article_body }}</div>
    </section>

    <!-- todo: update module as needed -->
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
      width: 25vi;
      height: 25vi;
      display: block;
      float: left;
      background-size: cover; // this is probably temporary
      background-position: center;
      background-repeat: no-repeat;
      margin: 0 calc($card_padding-internal * $phi ) 3rem 0;
    }
    
    .article-body {
      margin-right: 1rem;
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