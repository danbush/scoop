<script setup lang="ts">
  /************************** 
  Single Source Row component
  todo: fill out this section
  ***************************/
  import { singleSourceGrabber } from './helpers/singleSourceGrabber'
  import { ref, onMounted } from 'vue';
  
  // Define props for the component
  const { source = 1, count = 50 } = defineProps<{
    source: number,
    count: number
  }>();
  
  
  const rowObject = ref<any>(null);
  
  onMounted(async () => {
    rowObject.value = await singleSourceGrabber(source, count);
  });
</script>

<template>
    <article class="card card-single card_single-source-row"  v-if="rowObject">
      <section class="card-content">
        <article class="card-tile" v-for="(value, key) in rowObject" :key="key">
          <a class="article-anchor-wrapper" :href="value?.article_url">
            <span class="article-image-wrapper" :style="{ 'background-image': 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.4) 35%, rgba(0,0,0,0.7) 100%), url(' + value?.article_image + ')' }">
              <img class="article-logo" :src="value?.article_logo" alt="cows">
              <h5 class="article-title">{{ value?.article_title }}</h5>
            </span>
          </a>
        </article>
      </section>
    </article>
</template>

<style scoped lang="scss">

  .card_single-source-row {

    position: relative;

    .card-header,
    .card-footer {
      position: relative;
      z-index: 20;
    }

    &::before,
    &::after {

      content: '';

      display: block;
      width: $card-padding-internal;
      height: 100%;

      position: absolute;
      top: 0;
      bottom: 0;

      z-index: 10;

      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);

    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
      transform: rotate(180deg);
    }

  }

  .card-content {

    display: grid;
    height: 100%;

    gap: 1rem;
    grid-auto-columns: minmax(22rem, auto);
    grid-auto-flow: column;

    overflow-x: scroll;
    overflow-y: visible;

    padding: 0;

    > article {
      height: auto;
    }

  }
  .card_single-source-row {
  
//    flex: 4 0 100%;
    width: 100%;
//    min-height: 23rem;
//    max-height: 100rem;

    .card-tile {

      /*  todo:
          change this to a swipe on mobile.
          setting it as boring standard 1 item per row for now.
          */
      width: 100%;
      margin-bottom: 0;

      @include mq('medium') {
        min-height: 30rem;
      }

      > a {
        height: 100%;
      }

      .article-image-wrapper {
        height: 100%;
      }

    }
  
  }
</style>
