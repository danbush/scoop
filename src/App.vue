<script setup lang="ts">
import Header from './components/Header.vue'
import TopStory from './components/TopStory.vue'
import SingleVideo from './components/SingleVideo.vue'
</script>

<template>
  <Header msg="scoopy" />
    <section class="module-row">
      <TopStory headline="" body="" />
      <SingleVideo url="https://www.youtube.com/embed/5LWDl5qaQbA" />
      <div class="extra-item">camels</div>
      <div class="extra-item">camels</div>
    </section>
</template>

<style lang="scss">
  section.module-row {
    display: flex;
    gap: 1rem;
    margin: 1rem;
    flex-wrap: wrap;
  }
  .extra-item {
    width: 400px;
    background-color: #799461;
    flex: 1;
    min-width: 200px;
    max-width: 400px;
  }
  .item.one {
    flex: 2;
  }
</style>
