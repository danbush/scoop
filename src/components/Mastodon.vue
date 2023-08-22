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

  <article
    class="mastodon module-tile has-content has-blur"
    :style="{ 'background-image': 'linear-gradient(180deg, color-mix(in srgb, var(--card-accent-color) 0%, transparent) 0%, color-mix(in srgb, var(--card-accent-color) 30%, transparent) 35%, color-mix(in srgb, var(--card-accent-color) 100%, transparent) 100%), url(' + articleArray[number]?.article_logo + ')' }"
    v-for="number in articleSet" :key="number"
    >
    <a 
      :href="articleArray[number]?.article_url"
      target="_blank"
      >
      <img class="article-logo" :src="articleArray[number]?.article_logo" alt="">
      <h5 class="article-title"><pre>{{ articleArray[number]?.article_body }}</pre></h5>
      <img class="article-image" :src="articleArray[number]?.article_image" alt="">
      <p class="article-publisher">{{ articleArray[number]?.article_publisher }} || {{ articleArray[number]?.article_published_date }}</p>
    </a>
  </article>

</template>

<style scoped lang="scss">

  .article-publisher {
    margin: $card-padding-internal 0 0 0;
    color: #ffffff;
  }
  
  .article-logo {
    height: 4rem;
    max-height: 4rem;
    width: 4rem;
    border-radius: 0;
  }
  
  .mastodon {

    @include mq('medium') {
      
    }

    img.article-image {
      margin-top: calc( $card-padding-internal * $phi );
      border-radius: $card-border-radius;
      max-height: 20rem;
    }

  }

</style>
