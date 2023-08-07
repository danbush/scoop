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
  
  const articleSet: any[] = getRandomNumbersInRange(count, 0, 24); //eventually get this thing to pick
  
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
    <article class="card card_multiple-headlines"  v-if="Object.keys(articleArray).length > 0">
      <header class="card-header">
        <h2 class="card-title">Just the Headlines</h2>
      </header>
      <section class="card-body">
        <article class="card-tile" v-for="number in articleSet" :key="number">
          <a class="article-anchor-wrapper" :href="articleArray[number]?.article_url">
            <span class="article-image-wrapper" :style="{ 'background-image': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.5480786064425771) 35%, rgba(0,0,0,1) 100%), url(' + articleArray[number]?.article_image + ')' }">
              <img class="article-logo" :src="articleArray[number]?.article_logo" alt="cows">
              <h5 class="article-title">{{ articleArray[number]?.article_title }}</h5>
            </span>
          </a>
        </article>
      </section>
    </article>
</template>

<style scoped lang="scss">

  .card_multiple-headlines {
  
//    flex: 1 0 300px;
//    width: 100%;
//    min-height: 27rem;
//    max-height: 100rem;
    
//    padding-bottom: $card-padding-internal;
  
    background-color: $background-lighter;
    
    .card-header {
      background-color: darken($headlines-accent, 20%);
      color: lighten($headlines-accent, 45%)
    }
    
    .article-title {
    /*
      NOTE: disabling for now, it's what's causing the descenders to get cut off.
      we can find a solution at some point.
      text-overflow: ellipsis;
      overflow: hidden;
    */
    }
    
  }
</style>
