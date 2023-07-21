<script setup lang="ts">
  /************************** 
  Top story component
  todo: fill out this section
  ***************************/

  import CardFooter from './CardFooter.vue'
  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { hashtagBuildTheList } from './helpers/hashtag_buildthelist'
  import { ref, onMounted } from 'vue';
  
  // Define a reactive object to store the article data
  var articleArray = ref<any>({})
  // Use async/await to handle asynchronous behavior
  async function fetchArticleData() {
    try {
      const result = await chocolateSauce(hashtagBuildTheList(19));
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
  <article  v-if="articleArray.article_title" class="card card-single card_top-story" >
    <header class="card-header">
      <h2 class="card-title">Top Story</h2><span class="devtip"> // .card-single .card_top-story</span>
    </header>
    <span class="article-image-wraper" :style="{ 'background-image': 'url(' + articleArray.article_image + ')' }"></span>
    <img class="article-logo" :src="articleArray.article_logo" alt="cows">
    <span class="article-publisher">{{ articleArray.article_publisher }}</span>
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
      margin-right: 1rem;
    }
    
    .article-logo {
      max-width: 30px;
      margin-top: 1rem;
      vertical-align: middle;
    }
    
    .article-publisher {
      margin: 0.9rem 0 0 0.5rem;
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
      margin: 1rem 1rem 5rem 1rem;
    }
    
    .article-body {
      margin: 0 1rem;
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
