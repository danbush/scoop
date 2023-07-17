<script setup lang="ts">
import Header from './components/Header.vue'
import TopStory from './components/TopStory.vue'
</script>

<template>
  <Header msg="scoopy" />
    <section class="module-row">
      <TopStory headline="fuck this" body="Microsoft and Sony have resolved a bitter dispute about the future of Call of Duty on PlayStation. Sony has agreed to a 10-year deal with Microsoft." />
      <div class="item">huds</div>
      <div class="item">camels</div>
      <div class="item">camels</div>
    </section>
</template>

<style lang="scss">
  section.module-row {
    display: flex;
    gap: 1rem;
    margin: 1rem;
    flex-wrap: wrap;
  }
  .item {
    width: 100%;
    background-color: #799461;
    flex: 1;
    min-width: 200px;
    max-width: 400px;
  }
  .item.one {
    flex: 2;
  }
</style>
