<script setup lang="ts">
  /************************** 
  Multiple Headlines component
  todo: fill out this section
  ***************************/
  import { ref } from 'vue'
  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { hashtagBuildTheList } from './helpers/hashtag_buildthelist'
  
  // Define props for the component
  const { count = 4 } = defineProps<{
    count: number
  }>();

  function getRandomNumbersInRange(count:number, min:number, max:number) {
    const numbers = new Set();
    while (numbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(randomNumber);
    }
    return Array.from(numbers);
  }
  
  const articleSet: any[] = getRandomNumbersInRange(count, 0, 19); //eventually get this thing to pick
  
  // Define a reactive object to store the article data
  const articleArray = ref<any>({})
  
  // Fetch article data asynchronously for each number in articleSet
  Promise.all(articleSet.map((number) => chocolateSauce(hashtagBuildTheList(number))))
    .then((results) => {
      results.forEach((result, index) => {
        const articleNumber = articleSet[index]
        articleArray.value[articleNumber] = result
      })
      console.log(articleArray.value) // The complete object with all articles
    })
    .catch((err) => {
      console.log(err)
    })

</script>

<template>
    <article class="card card-single card_multiple-headlines"  v-if="Object.keys(articleArray).length > 0">
      <header class="card-header">
        <h2 class="card-title">Just the Headlines</h2><span class="devtip"> // .card-single .card_multiple-headlines</span>
      </header>
      <span class="article-wrapper" v-for="number in articleSet" :key="number">
        <a class="article-anchor-wrapper" :href="articleArray[number]?.article_url">
          <span class="article-image-wrapper" :style="{ 'background-image': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.5480786064425771) 35%, rgba(0,0,0,1) 100%), url(' + articleArray[number]?.article_image + ')' }">
            <img class="article-logo" :src="articleArray[number]?.article_logo" alt="cows">
            <h4 class="article-title">{{ articleArray[number]?.article_title }}</h4>
          </span>
        </a>
      </span>
    </article>
</template>

<style scoped lang="scss">
  .card_multiple-headlines {
  
    flex: 1 0 300px;
    width: 100%;
    min-height: 27rem;
    max-height: 100rem;
    
    padding-bottom: $card-padding-internal;
  
    background-color: $background-lighter;
    border-radius: 8px;
    position: relative;
    
    .article-wrapper {
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    
    .card-header {
      background-color: darken($headlines-accent, 20%);
      color: lighten($headlines-accent, 45%)
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
      margin: $card-padding-internal $card-padding-internal 0 $card-padding-internal;
      border-radius: $card_border-radius;
      transition: all .5s ease-in-out;
      flex: 1 0 calc(33% - #{$card-padding-internal * 2});
      
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
