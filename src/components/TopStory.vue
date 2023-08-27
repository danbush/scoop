<script setup lang="ts">
  /************************** 
  Top story component
  todo: fill out this section
  ***************************/

  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { hashtagBuildTheList } from './helpers/hashtag_buildthelist'
  import { ref, onMounted } from 'vue';
  import { getRandomNumbersInRange } from './helpers/sprinkle_getRandomNumbersInRange'
  
  // Define props for the component
  const { articleNumber = 4 } = defineProps<{
    articleNumber: number
  }>(); //eventually get this thing to pick
  
  // Define a reactive object to store the article data
  var articleArray = ref<any>({})
  // Use async/await to handle asynchronous behavior
  async function fetchArticleData() {
    try {
      const result = await chocolateSauce(hashtagBuildTheList(articleNumber));
      articleArray.value = result;
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

  <article class="card_top-story" v-if="articleArray.article_title">
    <a
      :href="articleArray.article_url"
      :style="{ 'background-image': 'url(' + articleArray.article_image + ')' }"
      target="_blank"
      class="module-tile image-only"
      >
    </a>

    <a class="scoop-source-url article-source" :href="articleArray.article_url" target="_blank">
      <img class="article-logo" :src="articleArray.article_logo" :alt="articleArray.article_publisher">
      <span class="article-publisher">{{ articleArray.article_publisher }}</span>
    </a>
    <h3 class="article-title">{{ articleArray.article_title }}</h3>
    <div class="article-body"><pre>{{ articleArray.article_body }}</pre></div>
  </article>

  <!--  todo: fix link upstream
    <CardFooter :article_url="articleArray.article_url"/>
  -->

</template>

<style scoped lang="scss">
  
  .module-tile {

    display: block;
    height: 12rem;
    margin: 0 calc($card_padding-internal * $phi ) 3rem 0;

    @include mq('small') {
      width: 100%;
      max-height: 14rem;
      margin-bottom: $card_padding-internal;
    }

    @include mq('medium') {
      width: 25vi;
      height: 25vi;
      float: left;
    }
  }

  .article-source {
    display: flex;
    margin-bottom: $card-padding-internal;
    align-items: center;
  }

  .article-publisher {
    color: var(--app-text-color);
  }

  a.scoop-source-url {
    color: initial;
    text-decoration: none;
  }
      
  .article-logo {

    max-width: initial;
    max-height: initial;
    width: 2.2rem;
    height: 2.2rem;
    margin: 0;
    padding: .25rem;

    vertical-align: middle;

    background-color: var(--app-text-color);

    border-radius: 100%;

    filter: initial;

  }

  .article-body {
    margin-top: 0;
  }

</style>