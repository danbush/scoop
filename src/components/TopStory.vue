<script setup lang="ts">
  /************************** 
  Top story component
  todo: fill out this section
  ***************************/

  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { hashtagBuildTheList } from './helpers/hashtag_buildthelist'
  import { ref, onMounted } from 'vue';
  import CardSingle from './CardSingle.vue'

  // Define props for the component
  const { articleNumber = 4 } = defineProps<{
    articleNumber: number | number[]
  }>(); //eventually get this thing to pick
  
  // Define a reactive object to store the article data
  var articleArray = ref<any>({})
  
  var isYoutube = false
  
  // Use async/await to handle asynchronous behavior
  async function fetchArticleData() {
    try {
      if (typeof articleNumber === "number"){
        const listItem = hashtagBuildTheList(articleNumber)
        if (typeof listItem === "string") {
          const result = await chocolateSauce(listItem);
          articleArray.value = result;
        }
      }
      if (articleArray.value.article_image.includes('youtube.com')) {
        isYoutube = true
      }
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
  <CardSingle class="card_TopStory" card_title="Top Story" v-if="articleArray.article_title">
    <article class="card_top-story">
      <iframe v-if="isYoutube" :src="articleArray.article_image" class="module-tile image-only" />
      <a
        v-else
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
      <h3 class="article-title"><a :href="articleArray.article_url" target="_blank">{{ articleArray.article_title }}</a></h3>
      <div class="article-body"><pre>{{ articleArray.article_body.trim() }}</pre></div>
    </article>
  
    <a :href="articleArray.article_url" target="_blank"><button class="button action_intent-primary" type="button">
      Read More
    </button></a>
  </CardSingle>

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
  
  .article-title {
  
    a {
      color: inherit;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
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
  
  .button {
    margin-top: 2.8rem;
    float: right;
  }
  
</style>