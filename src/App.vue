<script setup lang="ts">
  import Header from './components/Header.vue'
  import TopStory_new from './components/TopStory_new.vue'
  import MultipleHeadlines from './components/MultipleHeadlines.vue'
  import SingleVideo from './components/SingleVideo.vue'
  import SingleSourceRow from './components/SingleSourceRow.vue'
  import MayHaveMissed from './components/MayHaveMissed.vue'
  import Mastodon from './components/Mastodon.vue'
  import { getRandomNumbersInRange } from './components/helpers/sprinkle_getRandomNumbersInRange'
  
  var row1: number = getRandomNumbersInRange(1,0,24)
  var row2: number = getRandomNumbersInRange(1,0,24)
  var row3: number = getRandomNumbersInRange(1,0,24)
  var row4: number = getRandomNumbersInRange(1,0,24)
</script>

<template>
  <Header msg="scoopy" />
  <section class="module-row">

    <TopStory_new headline="" body="" />
    <MultipleHeadlines :count=4 />
    <MultipleHeadlines :count=4 />
    <MayHaveMissed />
    <Mastodon :count=3 />
    <SingleSourceRow :source=0 :count=5 />
    <SingleVideo />
    <SingleVideo />
    <SingleSourceRow :source=row1 :count=5 />
    <SingleSourceRow :source=row2 :count=5 />
    <MultipleHeadlines :count=4 />
    <MayHaveMissed />
    <MultipleHeadlines :count=4 />
    <SingleSourceRow :source=row3 :count=5 />
    <SingleSourceRow :source=row4 :count=5 />
  

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