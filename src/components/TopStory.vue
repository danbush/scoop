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
  var article_1_url: string = ""
  urlMetadata('http://localhost:8181/https://www.theverge.com/2023/7/17/23798368/neopets-relaunch-website-flash-games', {
    requestHeaders: {
    }
  }).then((metadata: any) => {
    article_1 = metadata
    console.log(article_1)
    article_1_body = article_1.jsonld.articleBody.substring(0,1000) + "..."
    article_1_logo = article_1.jsonld.publisher.logo.url
    article_1_url = article_1.canonical
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
    <a :href="article_1_url"><button class="button read-more" type="button">
      Read More
    </button></a>
  </article>
</template>

<style scoped lang="scss">
  button.button {
    border-radius: 16px;
    background-color: blue;
    border: 0;
    text-align: center;
    background-color: $background-light;
    padding: 0 20px;
    line-height: 2.5;
    font-weight: bold;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    opacity: 75%;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      opacity: 100%;
      transition: all 0.5s ease-in-out;
      filter: drop-shadow(0 0 15px $background-dark);
    }
  }
  article.top-story {
    flex: 3;
    width: 100%;
    min-height: 200px;
    min-width: 800px;
    background-color: $background-lighter;
    border-radius: 8px;
    position: relative;
    
    .article-logo {
      display: block;
      max-height: 20px;
      position: absolute;
      margin: 20px;
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
