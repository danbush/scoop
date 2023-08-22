<script setup lang="ts">
  /************************** 
  Single video component
  todo:
    - fill out this section
    - pass in props from parent (until then, URLS are dummies)
  ***************************/
  defineProps<{
    article_url: string
  }>()
</script>

<template>
  <footer class="card-footer">
    <div class="card-actions">
      <div class="button-group">
        <!-- <a href="#"><button class="button" type="button">
          [share]
        </button></a>
        <a href="#"><button class="button" type="button">
          [bookmark]
        </button></a>
        <a href="#"><button class="button" type="button">
          [original]
        </button></a>
        <a href="#"><button class="button" type="button">
          [save]
        </button></a>
        <a href="#"><button class="button" type="button">
          [hide]
        </button></a> -->
        <a :href="article_url" target="_blank"><button class="button action_intent-primary" type="button">
          Read More
        </button></a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .card-footer {

    width: 100%;
    margin-top: auto;
    padding: $card_padding-internal;

    background-color: var(--card-footer-background);

  }
  .card-actions {
  
    display: flex;
    justify-content: flex-end;
  
    .button {
      margin-left: .8rem;
    }
  
  }
</style>
