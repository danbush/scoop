<script setup lang="ts">
  /************************** 
  Top story component
  todo: fill out this section
  ***************************/

  import CardFooter from './CardFooter.vue'

  defineProps<{
    headline: string,
    body: string
  }>()
  
  import urlMetadata from 'url-metadata'
  var article_1: any = {}
  var article_1_body: string = ""
  var article_1_logo: string = ""
  var article_1_url: string = ""
  urlMetadata('http://localhost:8181/https://www.theverge.com/2023/7/17/23798368/neopets-relaunch-website-flash-games', {
    requestHeaders: {
    }
  }).then((metadata: any) => {
    article_1 = metadata
    console.log(article_1)
    console.log(article_1['description'])
    article_1_body = article_1.jsonld.articleBody.substring(0,1000) + "..."
    article_1_logo = article_1.jsonld.publisher.logo.url
    article_1_url = article_1.canonical
    // do stuff with the metadata
  }).catch((err) => {
    console.log(err)
  })
</script>

<template>
  <article class="card card-single card_top-story">
    <header class="card-header">
      <h2 class="card-title">Top Story</h2><span class="devtip"> // .card-single .card_top-story</span>
    </header>
    <div class="card-content">
      <article class="top-story">
        <header class="article-header">
          <img :src="article_1['og:image']" alt="ham">
          <div class="article-meta">
            <span class="item-source">
              <!-- todo: allow for image or text fallback -->
              <img class="article-logo" :src="article_1_logo" alt="llamas">
            </span>
            date, author, readtime, etc.
          </div>
        </header>
        <h3 class="item-title">{{ article_1['og:title'] }}</h3>
        <div class="item-body">{{ article_1_body }}</div>
       </article>
    </div>

    <CardFooter />

  </article>
</template>

<style scoped lang="scss">

</style>
