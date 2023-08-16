<script setup lang="ts">
  /************************** 
  Single Source Row component
  todo: fill out this section
  ***************************/
  import { singleSourceGrabber } from './helpers/singleSourceGrabber'
  import { ref, onMounted } from 'vue';
  
  // Define props for the component
  const { source = 1, count = 10 } = defineProps<{
    source: number,
    count: number
  }>();
  
  
  const rowObject = ref<any>(null);
  
  onMounted(async () => {
    rowObject.value = await singleSourceGrabber(source, count);
  });
</script>

<template>

  <div class="swipe-wrapper" v-if="rowObject">
    <article class="card-tile" v-for="(value, key) in rowObject" :key="key">
      <a class="article-anchor-wrapper" :href="value?.article_url">
        <span class="article-image-wrapper" :style="{ 'background-image': 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.4) 35%, rgba(0,0,0,0.7) 100%), url(' + value?.article_image + ')' }">
          <img class="article-logo" :src="value?.article_logo" alt="cows">
          <h5 class="article-title">{{ value?.article_title }}</h5>
        </span>
      </a>
    </article>
  </div>

</template>

<style scoped lang="scss">

  .swipe-wrapper {

    padding: $card-padding-internal;

    // todo: unsure if this'll stay. probably do a smarter implementation later.
    &::-webkit-scrollbar {
      display: none;
    }

    @include mq('large') {

      display: grid;
      height: 100%;

      gap: 1rem;
      grid-auto-columns: minmax(22rem, auto);
      grid-auto-flow: column;

      overflow-x: scroll;
      overflow-y: hidden;

    }

  }

  .card-tile {

    /*  todo:
        change this to a swipe on mobile.
        setting it as boring standard 1 item per row for now.
        */
    max-width: 100%;
    width: 400rem;

    @include mq('large') {

      min-height: 30rem;
      margin-right: $card-padding-internal;
      margin-bottom: 0;

      &:last-of-type {
        margin-right: 0;
      }

    }

    > a {
      height: 100%;
    }

    .article-image-wrapper {
      height: 100%;
    }

  }
  
</style>
