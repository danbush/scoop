<script setup lang="ts">
  import Header from './components/Header.vue'
  import TopStory_new from './components/TopStory_new.vue'
  import MultipleHeadlines from './components/MultipleHeadlines.vue'
  import SingleVideo from './components/SingleVideo.vue'
  import SingleSourceRow from './components/SingleSourceRow.vue'
</script>

<template>
  <Header msg="scoopy" />
  <section class="module-row">

  <TopStory_new headline="" body="" />
  <MultipleHeadlines />
  <SingleSourceRow />
  <SingleVideo url="https://www.youtube.com/embed/5LWDl5qaQbA" />
  

  </section>
</template>

<style lang="scss">
  section.module-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1rem;
}
</style>