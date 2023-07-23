<script setup lang="ts">
  /************************** 
  Single video component
  todo: fill out this section
  ***************************/

  import CardFooter from './CardFooter.vue'
  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { listVideos } from './helpers/list_videos'
  import { getPipedEmbed } from './helpers/getPipedEmbed'
  import { timeAgo } from './helpers/sprinkle_timeAgo'
  import { ref, onMounted } from 'vue';
  import { getRandomNumbersInRange } from './helpers/sprinkle_getRandomNumbersInRange'
  
  const articleNumber: any[] = [getRandomNumbersInRange(1, 0, 4)]; //eventually get this thing to pick
  
  // Define a reactive object to store the article data
  var articleArray = ref<any>({})
  // Use async/await to handle asynchronous behavior
  async function fetchArticleData() {
    try {
      const result = await chocolateSauce(listVideos(articleNumber));
      
      articleArray.value = result;
      // Loop through the articles and set it up for video component.
      for (const key in articleArray.value) {
        if (key === 'article_url') {
          articleArray.value[key] = await getPipedEmbed(articleArray.value[key])
          console.log(articleArray.value[key])
        }
        if (key === 'article_publisher') {
          articleArray.value[key] = articleArray.value[key].replace('Piped - ', '')
        }
        if (key === 'article_published_date') {
          articleArray.value[key] = timeAgo(articleArray.value[key])
        }
      }
      
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
  <article class="card card-single card_top-story">

    <!-- todo: make module -->
    <header class="card-header">
      <h2 class="card-title">New Video</h2><span class="devtip">.card-single .card_video</span>
    </header>

    <!-- todo: make module -->
    <section class="card-body">
      <div class="videoWrapper">
        <iframe class="video-embed" width="560" height="315" :src="articleArray.article_url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h3 class="video-meta title">{{ articleArray.article_title }}</h3>
      <!-- hiding this for now <img class="video-meta video-profile" src="https://placedog.net/200/200" alt="blah"> -->
      <span class="video-meta text video-author">{{ articleArray.article_publisher }}</span>
      <span class="video-meta text video-timestamp">{{articleArray.article_published_date}}</span>
    </section>
  
    <!-- todo: update module as needed -->
    <CardFooter article_url="articleArray.article_url"/>
  
  </article>

</template>

<style scoped lang="scss">
  .card_video {
  
    flex: 2 0 35%;
  
    iframe {
      width: 100%;  // temporary
    }
  }
  
  .card-header {
    background-color: darken($video-accent, 15%);
    color: lighten($video-accent, 45%);
  }
  
  h3 {
    margin: 1rem 0 0 0;
  }
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; //16:9
    height: 0;
    cursor: pointer;
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: $card_border-radius;
    transition: all .5s ease-in-out;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.03) rotate(0.5deg);
      filter: brightness(1.08);
      box-shadow: 0px 0px 15px 0px lighten($background, 40%);
    }
    &:active {
      filter: brightness(1.25);
      transform: scale(0.98) rotate(0.5deg);
      transition: all .2s ease-in-out;
    }
  }
  .video-profile {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    margin: 0 1rem;
    max-width: 50px;
    float: left;
    margin-top: -0.5rem;
  }
  .video-meta.text {
      display: block;
  }
  .video-author {
    font-weight: bold;
  }
  .video-timestamp {
    padding-bottom: 5rem;
  } 
</style>
