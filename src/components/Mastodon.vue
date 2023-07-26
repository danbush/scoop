<script setup lang="ts">
  /************************** 
  Multiple Headlines component
  todo: fill out this section
  ***************************/
  import { ref, onMounted } from 'vue'
  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { listMastodon } from './helpers/list_mastodon'

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
  
  const articleSet: any[] = getRandomNumbersInRange(count, 0, 5); //eventually get this thing to pick
  
  // Define a reactive object to store the article data
  const articleArray = ref<any>({})
  
  async function fetchData() {
    try {
      const results = await Promise.all(articleSet.map((number) => chocolateSauce(listMastodon(number))));
      results.forEach((result, index) => {
        const articleNumber = articleSet[index];
        articleArray.value[articleNumber] = result;
      });
      console.log(articleArray.value); // The complete object with all articles
    } catch (err) {
      console.error(err);
    }
  }
  
  onMounted(() => {
    fetchData();
  });

</script>

<template>
    <article class="card card-single card_multiple-headlines">
      <header class="card-header">
        <h2 class="card-title">Masto Test</h2><span class="devtip"> // .card-single .card_multiple-headlines</span>
      </header>
      <span class="article-wrapper" v-for="number in articleSet" :key="number">
        <a class="article-anchor-wrapper" :href="articleArray[number]?.article_url">
          <span class="article-image-wrapper" :style="{ 'background-image': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.5480786064425771) 35%, rgba(0,0,0,1) 100%), url(' + articleArray[number]?.article_logo + ')' }">
            <span class="blurred-lines">
              <img class="article-logo" :src="articleArray[number]?.article_logo" alt="">
              <h5 class="article-title"><pre>{{ articleArray[number]?.article_body }}</pre></h5>
              <img class="article-image" :src="articleArray[number]?.article_image" alt="">
              <p class="p3 article-publisher">{{ articleArray[number]?.article_publisher }} || {{ articleArray[number]?.article_published_date }}</p>
            </span>
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
    
    p {
      color: $background-lighter;
      text-align: center;
    }
    
    .p3 {
      font-size: 0.8rem;
    }
    
    pre {
      white-space: pre-wrap;
    }
    
    .blurred-lines {
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      border-radius: $card_border-radius;
      display: block;
      padding-top: $card-padding-internal;
    }
    
    .article-wrapper {
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: $card-padding-internal;
    }
    
    .card-header {
      background-color: #2F0C7A;
      color: #858AFA;
    }
    
    .article-title {
      margin: 0.4rem $card-padding-internal $card-padding-internal $card-padding-internal;
      color: $background-lighter;
      text-shadow: 0 0 12px #000000, 0 0 2px $background;
      text-align: center;
      text-decoration: none;
    }
    
    .article-logo {
      max-width: 60px;
      margin: 0 auto calc($card-padding-internal * 3) auto;
      display: block;
      filter: drop-shadow(0 0 12px #000000) drop-shadow(0 0 2px $background);
      background-color: $background-lighter;
    }
    
    .article-image {
      padding: $card-padding-internal;
      max-width: 100%;
      border-radius: 2rem;
    }
    
    .article-publisher {
      margin: 0 $card-padding-internal $card-padding-internal $card-padding-internal;
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
      margin: 0 $card-padding-internal 0 $card-padding-internal;
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
