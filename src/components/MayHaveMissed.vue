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

    <section v-if="articleArray.article_title">
      <article class="card-tile">
        <a class="article-anchor-wrapper" :href="articleArray.article_url">
          <span class="article-image-wrapper" :style="{ 'background-image': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.5) 35%, rgba(0,0,0,0.75) 100%), url(' + articleArray.article_image + ')' }">
            <img class="article-logo" :src="articleArray.article_logo" alt="cows">
            <h3 class="article-title">{{ articleArray.article_title }}</h3>
          </span>
        </a>
      </article>
      <div class="article-body"><pre>{{ articleArray.article_body }}</pre></div>
    </section>

    <!-- todo: update module as needed -->
    <!-- <CardFooter :article_url="articleArray.article_url"/> -->

</template>

<style scoped lang="scss">
  .card_may-have-missed {
  
//    flex: 2 0 600px;
//    width: 100%;
//    min-height: 27rem;
//    max-width: 40rem;
  
    background-color: $background-lighter;
    border-radius: 8px;
    position: relative;
    
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
    }
        
    .article-image-wrapper {
      width: 100%;
      height: 100%;
//      min-height: 15rem;
      display: block;
//      float: left;
      background-color: $background;
      background-size: cover; // this is probably temporary
      background-position: center;
      background-repeat: no-repeat;
      margin: 0 0 $card-padding-internal 0;
      border-radius: $card_border-radius;
      transition: all .5s ease-in-out;
      
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

  .article-body {
      margin-top: 1.4rem;
  }

</style>