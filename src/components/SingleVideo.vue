<script setup lang="ts">
  /************************** 
  Single video component
  todo: fill out this section
  ***************************/

  import { chocolateSauce } from './helpers/chocolate_sauce'
  import { listVideos } from './helpers/list_videos'
  import { getPipedEmbed } from './helpers/getPipedEmbed'
  import { timeAgo } from './helpers/sprinkle_timeAgo'
  import { ref, onMounted } from 'vue';
  import CardSingle from './CardSingle.vue'
  
  // Define props for the component
  const { articleNumber = [0] } = defineProps<{
    articleNumber: number
  }>();
  
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
        }
        if (key === 'article_publisher') {
          articleArray.value[key] = articleArray.value[key].replace('Piped - ', '')
        }
        if (key === 'article_published_date') {
          articleArray.value[key] = timeAgo(articleArray.value[key])
        }
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
  <!--  Note: would like to re-evaluate how this functions on the front-end at some point.
        I think ideally, we could load in a screenshot or something so YouTube doesn't actually load unless until the user clicks.
        Also would be handy for the proposed "peek" functionality down the road.
        -->
  <CardSingle class="card_video" card_title="Cool Video" v-if="articleArray.article_url">
    <article class="module-tile video-wrapper">
      <iframe class="video-embed" width="560" height="315" :src="articleArray.article_url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </article>
    <h3 class="video-meta title">{{ articleArray.article_title }}</h3>
    <!-- hiding this for now <img class="video-meta video-profile" src="https://placedog.net/200/200" alt="blah"> -->
    <span class="video-meta text video-author">{{ articleArray.article_publisher }}</span>
    <span class="video-meta text video-timestamp">{{articleArray.article_published_date}}</span>
  </CardSingle>
</template>

<style scoped lang="scss">

  h3 {
    margin: 1rem 0 0 0;
  }
  .video-wrapper {

    padding-bottom: 56.25%; //16:9
    height: 0;
    position: relative;

    cursor: pointer;

    iframe {

      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;

      border-radius: $card_border-radius;

      cursor: pointer;
    }

  }

  .video-meta.text {
      display: block;
  }

  .video-author {
    font-weight: bold;
  }

</style>
