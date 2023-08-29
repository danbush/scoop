<script setup lang="ts">
  /************************** 
  Top story component
  todo: fill out this section
  ***************************/

  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { hashtagBuildTheList } from './helpers/hashtag_buildthelist'
  import { ref, onMounted } from 'vue';
  
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

  <article v-if="articleArray.article_title">
    <header class="article-header module-tile has-content">
      <a
        :href="articleArray.article_url"
        :style="{ 'background-image': 'linear-gradient(180deg, color-mix(in srgb, var(--card-accent-color) 0%, transparent) 0%, color-mix(in srgb, var(--card-accent-color) 10%, transparent) 35%, color-mix(in srgb, var(--card-accent-color) 90%, transparent) 100%), url(' + articleArray.article_image + ')' }"
        >
        <img class="article-logo" :src="articleArray.article_logo" alt="cows">
        <h3 class="article-title">{{ articleArray.article_title }}</h3>
      </a>
    </header>
    <section class="article-body">
      <pre>{{ articleArray.article_body.trim() }}</pre>
    </section>
    <footer class="article-footer">
      <a :href="articleArray.article_url" target="_blank">
        <button class="button action_intent-primary" type="button">Read More</button>
      </a>
    </footer>
  </article>

</template>

<style scoped lang="scss">

  .card_MayHaveMissed {
    
    .card-body > article {
      height: initial;
    }

    .module-tile {
      margin-bottom: $card-padding-internal;
      a {
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all .38s ease-in-out, background-position 10s ease-in-out;
      }
      a:hover {
        background-position: 50% 0%;
      }
    }

    .article-footer {

      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      margin-top: 1.4rem;

    }

  }

</style>