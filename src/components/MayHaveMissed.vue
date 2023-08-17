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

  <article v-if="articleArray.article_title">
    <header class="article-header module-tile has-content">
      <a
        :href="articleArray.article_url"
        :style="{ 'background-image': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.5) 35%, rgba(0,0,0,0.75) 100%), url(' + articleArray.article_image + ')' }"
        >
        <img class="article-logo" :src="articleArray.article_logo" alt="cows">
        <h3 class="article-title">{{ articleArray.article_title }}</h3>
      </a>
    </header>
    <section class="article-body">
      <pre>{{ articleArray.article_body }}</pre>
    </section>
    <footer class="article-footer">
      <a :href="articleArray.article_url" target="_blank">
        <button class="button action_intent-primary" type="button">Read More</button>
      </a>
    </footer>
  </article>

</template>

<style scoped lang="scss">

  .module-tile {
    margin-bottom: $card-padding-internal;
  }

  .article-footer {

    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    margin-top: 1.4rem;

  }

</style>