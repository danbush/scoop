<script setup lang="ts">
  /************************** 
  Multiple Headlines component
  todo: fill out this section
  ***************************/
  import { ref } from 'vue'
  import CardFooter from './CardFooter.vue'
  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { hashtagBuildTheList } from './helpers/hashtag_buildthelist'

  defineProps<{
    //headline: string,
    //body: string
  }>()
  const articleSet: number[] = [1, 2, 3, 4, 5]
  
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
      <span v-for="number in articleSet" :key="number" class="article-image-wraper" :style="{ 'background-image': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.5480786064425771) 35%, rgba(0,0,0,1) 100%), url(' + articleArray[number]?.article_image + ')' }">
        <img class="article-logo" :src="articleArray[number]?.article_logo" alt="cows">
        <h4 class="article-title">{{ articleArray[number]?.article_title }}</h4>
      </span>
      <!-- Other content for each article -->
    </article>
</template>

<style scoped lang="scss">
  .card_multiple-headlines {
  
    flex: 1 0 300px;
    width: 100%;
    min-height: 27rem;
    max-height: 100rem;
  
    background-color: $background-lighter;
    border-radius: 8px;
    position: relative;
    
    .article-title {
      margin: 0.4rem $card-padding-internal $card-padding-internal $card-padding-internal;
      color: $background-lighter;
      text-shadow: 0 0 12px #000000, 0 0 2px $background;
      text-align: center;
    }
    
    .article-logo {
      max-width: 30px;
      margin: $card-padding-internal auto 0 auto;
      display: block;
    }
    
    .article-publisher {
      margin: 0.9rem 0 0 0.5rem;
      vertical-align: middle;
      display: inline-block;
      
      font-size: 0.9rem;
      font-weight: 600;
    }
    
    .article-image-wraper {
      width: calc(100% - 2rem);
      height: 100%;
      display: block;
      float: left;
      background-size: cover; // this is probably temporary
      background-position: center;
      background-repeat: no-repeat;
      margin: $card-padding-internal $card-padding-internal 0 $card-padding-internal;
      border-radius: $card_border-radius;
      //background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%);  
      
      &:last-of-type {
        margin-bottom: $card-padding-internal;
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
