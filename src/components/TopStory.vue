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
  urlMetadata('http://localhost:8181/https://www.theverge.com/23796894/john-romero-id-software-commander-keen-autobiography', {
    requestHeaders: {
    }
  }).then((metadata: any) => {
    article_1 = metadata
    console.log(article_1)
    console.log(article_1['description'])
    // do stuff with the metadata
  }).catch((err) => {
    console.log(err)
  })
  
</script>

<template>
  <article class="module top-story">
    <h2>TOP STORY</h2>
    <img :src="article_1['og:image']" alt="ham">
    <h3>{{ article_1['og:title'] }}</h3>
    <p>{{ article_1['description'] }}</p>
  </article>
</template>

<style scoped lang="scss">
  article.top-story {
    flex: 3;
    width: 100%;
    background-color: #ffffff;
    min-height: 200px;
    min-width: 800px;
    img {
      max-width: 40%;
      margin: 1rem;
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
      margin: 1rem;
      
      font-family: "BitterPro", 'Courier New', Courier, monospace;
      font-weight: bold;
      font-size: 2rem;
    }
    p {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  }
</style>
