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
  
  const articleSet: any[] = getRandomNumbersInRange(count, 0, 25); //eventually get this thing to pick
  
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
    <article v-if="Object.keys(articleArray).length > 0">

        <article class="module-tile has-content" v-for="number in articleSet" :key="number">
          <a
            :style="{
              'background-image': 'linear-gradient(180deg, color-mix(in srgb, var(--card-accent-color) 0%, transparent) 0%, color-mix(in srgb, var(--card-accent-color) 30%, transparent) 35%, color-mix(in srgb, var(--card-accent-color) 100%, transparent) 100%), url(' + articleArray[number]?.article_image + ')' }"
            :href="articleArray[number]?.article_url"
            target="_blank"
            >
            <img class="article-logo" :src="articleArray[number]?.article_logo" alt="cows">
            <h5 class="article-title">{{ articleArray[number]?.article_title }}</h5>
          </a>
        </article>

    </article>
</template>

<style scoped lang="scss">
  .card_headlines {

    .card-body > article {
      
      display: flex;
      flex-direction: column;

      @include mq('medium') {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
      }

      @include mq('large') {
        flex-direction: column;
        flex-wrap: nowrap;
        column-gap: 0;
      }

    }

    .module-tile {
      a {
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all .38s ease-in-out, background-position 10s ease-in-out, transform 5s ease-in;
      }
      
      a:hover {
        background-position: 0%;
        transform: scale(1.06);
      }
      
      @include mq('medium') {

        flex: 1 calc(50% - $card-padding-internal);
        margin-bottom: 0!important;

        height: auto!important;

      }

      @include mq('large') {

        width: 100%;

        &:nth-last-child(2) {
          margin-bottom: $card-padding-internal;
        }

        &:nth-last-child(-n+2) {
          margin-bottom: 0;
        }

      }

    }

  }
  
</style>
