<script setup lang="ts">
  /************************** 
  Top story component
  todo: fill out this section
  ***************************/

  import CardFooter from './CardFooter.vue'
  import { chocolateSauce } from './helpers/chocolate_sauce'

  defineProps<{
    headline: string,
    body: string
  }>()
  
  var articleArray: any = {}
  chocolateSauce('https://techcrunch.com/feed/')
  .then((result) => {
    articleArray = result
    console.log(articleArray)
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<template>
  <article class="card card-single card_top-story">
    <header class="card-header">
      <h2 class="card-title">Top Story</h2><span class="devtip"> // .card-single .card_top-story</span>
    </header>
    <div class="card-content">
      <article class="top-story">
        <header class="article-header">
          <img :src="articleArray.article_image" alt="ham">
          <div class="article-meta">
            <span class="item-source">
              <!-- todo: allow for image or text fallback -->
              <img class="article-logo" :src="articleArray.article_logo" alt="llamas">
            </span>
          </div>
        </header>
        <h3 class="item-title">{{ articleArray.article_title }}</h3>
        <div class="item-body">{{ articleArray.article_body }}</div>
       </article>
    </div>

    <CardFooter :article_url="articleArray.article_url"/>

  </article>
</template>

<style scoped lang="scss">

</style>
