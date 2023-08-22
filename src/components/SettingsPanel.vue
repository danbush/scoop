<script setup lang="ts">

  import ThemeSwitcher from './GodBar/_ThemeSwitcher.vue'

</script>

<template>

  <article class="app-settings">

    <section id="settings-SLUG2"  class="settings-panel-section">
      <h4 class="section-title">Appearance &amp; Themes</h4>
      <div class="section-description">
        
      </div>
      <div class="section-panel-options">
        <article class="settings-panel-group">
          <h4 class="group-title">Theme</h4>
          <ThemeSwitcher />
        </article>   
        <article class="settings-panel-group dev-disable">
          <h4 class="group-title">Readability Settings</h4>
          things like font size, contrast, etc
        </article>
      </div>
    </section>

    <section id="settings-SLUG1" class="settings-panel-section dev-disable">
      <h4 class="section-title">Account</h4>
      <div class="section-description">
        Future home of general account info
      </div>
      <div class="section-panel-options">
        some components here!
      </div>
    </section>

    <section id="settings-SLUG3"  class="settings-panel-section dev-disable">
      <h4 class="section-title">Content &amp; Feeds</h4>
      <div class="section-panel-options">
        #showthelist
      </div>
    </section>

  </article>

</template>

<style scoped lang="scss">

  .app-settings {

    display: flex;
    flex-direction: column;

    .settings-panel-section {

      margin-bottom: 2rem;
      padding: 0 0 2rem 0;

      background-color: var(--card-body-background);

      &:last-of-type {
        margin-bottom: 0;
        border-bottom: 0;
      }

      .section-title {
        padding-bottom: 1.4rem;
        border-bottom: .2rem solid var(--shadow-color-primary);
      }

    }

    .settings-panel-group {

      margin-bottom: 2rem;
    
      &:last-of-type {
        margin-bottom: 0;
      }

    }

  }

</style>
