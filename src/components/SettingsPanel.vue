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

    <section id="settings-SLUG3"  class="settings-panel-section dev-disable">
      <h4 class="section-title">Content &amp; Feeds</h4>
      <div class="section-panel-options">
        #showthelist

        <div class="toggle toggle_{{inputClass}}">
        <p class="toggle-label">Show/Hide Paywalled Content</p>
        <label class="switch">
          <input type="checkbox" v-on:click="toggleLocalStorage" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="toggle toggle_{{inputClass}}">
        <p class="toggle-label">Show/Hide Spoilers</p>
        <label class="switch">
          <input type="checkbox" v-on:click="toggleLocalStorage" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="toggle toggle_{{inputClass}}">
        <p class="toggle-label">Show/Hide Politics</p>
        <label class="switch">
          <input type="checkbox" v-on:click="toggleLocalStorage" />
          <span class="slider"></span>
        </label>
      </div>
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


/* move this */
.toggle {
  
  padding: 0 1.2rem;

  .toggle-label {
    font-size: .8rem;
    font-weight: 300;
  }

}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: $input-size;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


</style>
