<script setup lang="ts">
  /************************** 
  Single Source Row component
  todo: fill out this section
  ***************************/
  import { singleSourceGrabber } from './helpers/singleSourceGrabber'
  import { ref, onMounted } from 'vue';
  import CardSingleSource from './CardSingleSource.vue'
  
  // Define props for the component
  const { source = 1, count = 10 } = defineProps<{
    source: number,
    count: number
  }>();
  
  
  const rowObject = ref<any>(null);
  
  onMounted(async () => {
    rowObject.value = await singleSourceGrabber(source, count);
    console.log(rowObject.value[0])
  });
</script>

<template>
  <CardSingleSource class="card_SingleSource" card_title="Dig In" v-if="rowObject">
    <section class="swipe-wrapper">
      <template v-for="(value, key) in rowObject" :key="key">
        <article
          v-if="value.article_title"
          class="module-tile has-content"
          :style="{ 'background-image': 'linear-gradient(180deg, color-mix(in srgb, var(--card-accent-color) 0%, transparent) 0%, color-mix(in srgb, var(--card-accent-color) 30%, transparent) 75%, color-mix(in srgb, var(--card-accent-color) 100%, transparent) 100%), url(' + value?.article_image + ')' }"
          >
          <a :href="value?.article_url" target="_blank">
            <img class="article-logo" :src="value?.article_logo || (value?.article_url ? 'https://icon.horse/icon/' + value.article_url.replace(/^https?:\/\/([^\/]+).*$/, '$1') : '')" :alt="value?.article_publisher.replace('&nbsp;', ' ')">
            <h5 class="article-title">{{ value?.article_title }}</h5>
          </a>
        </article>
      </template>
    </section>
  </CardSingleSource>
</template>

<style scoped lang="scss">

  .swipe-wrapper {

    padding: $card-padding-internal;

    // todo: unsure if this'll stay. probably do a smarter implementation later.
    &::-webkit-scrollbar {
      display: none;
    }

    @include mq('medium') {

      display: grid;
      height: 100%;

      gap: 1rem;
      grid-auto-columns: minmax(22rem, auto);
      grid-auto-flow: column;

      overflow-x: scroll;
      overflow-y: hidden;

    }

  }

  .module-tile {
    /* i know we have an scss transition but it didnt seem to actually work. so eventually this will be a part of that instead of manual probably */
    transition: all .38s ease-in-out, background-position 10s ease-in-out;
    &:hover {
      background-position: 0% 0%;
    }
    &.has-content {
      > a {
        min-height: 16rem;
        justify-content: end;
      }
  }

    /*  todo:
        change this to a swipe on mobile.
        setting it as boring standard 1 item per row for now.
        */
    max-width: 100%;
//    width: 400rem;

    @include mq('medium') {

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

  }
  
</style>
