<script setup lang="ts">
  /************************** 
  Mastodon component
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

  <article class="card-tile" v-for="number in articleSet" :key="number">
    <a class="article-anchor-wrapper" :href="articleArray[number]?.article_url">
      <span class="article-image-wrapper" :style="{ 'background-image': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.5480786064425771) 35%, rgba(0,0,0,1) 100%), url(' + articleArray[number]?.article_logo + ')' }">
        <img class="article-logo" :src="articleArray[number]?.article_logo" alt="">
        <h5 class="article-title"><pre>{{ articleArray[number]?.article_body }}</pre></h5>
        <img class="article-image" :src="articleArray[number]?.article_image" alt="">
        <p class="p3 article-publisher">{{ articleArray[number]?.article_publisher }} || {{ articleArray[number]?.article_published_date }}</p>
      </span>
    </a>
  </article>

</template>

<style scoped lang="scss">

  .card-tile {
    overflow: hidden;
  }

  .article-image-wrapper {
    position: relative;

    > * {
      position: relative;
      z-index: 10;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 0;
//      background-color: rgba(pink, .5);
    }

  }
  .article-image {
    padding: $card-padding-internal;
    max-width: 100%;
    border-radius: 2rem;
  }
</style>
