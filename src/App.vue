<script setup lang="ts">
  import Header from './components/Header.vue'
  import TopStory_new from './components/TopStory_new.vue'
  import MultipleHeadlines from './components/MultipleHeadlines.vue'
  import SingleVideo from './components/SingleVideo.vue'
  import SingleSourceRow from './components/SingleSourceRow.vue'
  import MayHaveMissed from './components/MayHaveMissed.vue'
</script>

<template>
  <Header msg="scoopy" />
  <section class="module-row">

    <TopStory_new headline="" body="" />
    <MultipleHeadlines :count=4 />
    <MultipleHeadlines :count=3 />
    <MayHaveMissed />
    <SingleVideo />
    <SingleSourceRow :source=0 :count=5 />
    <SingleVideo />
    <SingleVideo />
    <SingleSourceRow :source=4 :count=5 />
    <SingleSourceRow :source=8 :count=5 />
  

  </section>
</template>

<style lang="scss">
  section.module-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: stretch;
    margin: 1rem;
}
</style>