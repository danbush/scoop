<script setup lang="ts">
  /************************** 
  Top story component
  todo: fill out this section
  ***************************/
  defineProps<{
    headline: string,
    body: string
  }>()
  
  import urlMetadata from 'url-metadata'
  var article_1: any = {}
  var article_1_body: string = ""
  var article_1_logo: string = ""
  urlMetadata('http://localhost:8181/https://www.theverge.com/2023/7/17/23798368/neopets-relaunch-website-flash-games', {
    requestHeaders: {
    }
  }).then((metadata: any) => {
    article_1 = metadata
    console.log(article_1)
    console.log(article_1['description'])
    article_1_body = article_1.jsonld.articleBody.substring(0,1000) + "..."
    article_1_logo = article_1.jsonld.publisher.logo.url
    // do stuff with the metadata
  }).catch((err) => {
    console.log(err)
  })
</script>

<template>
  <article class="module top-story">
    <h2>TOP STORY</h2>
    <img class="article-logo" :src="article_1_logo" alt="llamas">
    <img :src="article_1['og:image']" alt="ham">
    <h3>{{ article_1['og:title'] }}</h3>
    <p>{{ article_1_body }}</p>
  </article>
</template>

<style scoped lang="scss">
  article.top-story {
    flex: 3;
    width: 100%;
    min-height: 200px;
    min-width: 800px;
    background-color: $background-lighter;
    border-radius: 8px;
    
    .article-logo {
      display: block;
      max-height: 20px;
    }
    
    img {
      max-width: 50%;
      margin: 1rem 1rem 0 1rem;
      float: left;
    }
    h2 {
      background-color: $accent-priority-one;
      padding: 0.5rem;
      
      
      font-family: "BitterPro", 'Courier New', Courier, monospace;
      font-weight: bold;
      font-size: 0.8rem;
      // todo: make these fonts a mixin.
      
      text-align: center;
    }
    h3 {
      margin: 0.5rem 1rem 1rem 1rem;
      
      font-family: "BitterPro", 'Courier New', Courier, monospace;
      font-weight: bold;
      font-size: 2.2rem;
    }
    p {
      font-family: "Vollkorn", 'Times New Roman', serif;
      margin: 1rem;
      font-size: 1.02rem;
      line-height: 1.4rem;
    }
  }
</style>
