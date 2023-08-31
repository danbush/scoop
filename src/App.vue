<script setup lang="ts">

  import Header from './components/Header.vue'
  import Modal from './components/Modal.vue'

  /*  Import top-level cards
      */
  import CardSingle from './components/CardSingle.vue'
  import CardGroup from './components/CardGroup.vue'
  import CardSingleSource from './components/CardSingleSource.vue'
  import CardSingleSocial from './components/CardSingleSocial.vue'

  /*  Import modules, components, cards, or whatever Dan wants to call them
      */
  import TopStory from './components/TopStory.vue'
  import MultipleHeadlines from './components/MultipleHeadlines.vue'
  import SingleVideo from './components/SingleVideo.vue'
  import SingleSourceRow from './components/SingleSourceRow.vue'
  import MayHaveMissed from './components/MayHaveMissed.vue'
  import Mastodon from './components/Mastodon.vue'

  import { waffleCone, ContentSource } from './components/helpers/waffle_cone'

  const articleSet = waffleCone(ContentSource.Articles, 24)
  const videoSet = waffleCone(ContentSource.Videos, 2)
  const articleSetForSingleSource = waffleCone(ContentSource.Articles, 6)
  
  var row1: number = articleSetForSingleSource.slice(0, 1)
  var row2: number = articleSetForSingleSource.slice(2, 3)
  var row3: number = articleSetForSingleSource.slice(3, 4)
  var row4: number = articleSetForSingleSource.slice(4, 5)
  var row5: number = articleSetForSingleSource.slice(5, 6)
  
  function toggleSettings() {
    document.querySelector('.modal-container').classList.toggle('settings-on')
    document.querySelector('.modal-container').classList.toggle('settings-off')
    document.querySelector('#app-modal').classList.toggle('settings-on')
    document.querySelector('#app-modal').classList.toggle('settings-off')
    document.querySelector('.app-body').classList.toggle('settings-on')
    document.querySelector('.app-body').classList.toggle('settings-off')
    document.querySelector('html').classList.toggle('lock-scroll')
  }
  
</script>

<template>

  <Header appTitle="scoopy" />

  <section class="app-body module-row settings-off">

    <CardSingle
      class="card_TopStory"
      card_title="Top Story"
      card_description="A single card. Only has one bit of content (article) inside, and adds a card footer."
      >
      <TopStory :article-number="articleSet.slice(0, 1)" />
    </CardSingle>

    <CardGroup
      class="card_headlines"
      card_title="Just the Headlines"
      card_description="A card group. Contains multiple bits of content (articles) inside, NO footer."
      >
      <MultipleHeadlines :count=4 :article-numbers="articleSet.slice(2, 6)" />
    </CardGroup>

    <CardGroup
      class="card_headlines"
      card_title="Just the Headlines"
      card_description=""
      >
      <MultipleHeadlines :count=4 :article-numbers="articleSet.slice(6, 10)" />
    </CardGroup>

    <CardGroup
      class="card_MayHaveMissed"
      card_title="You May Have Missed"
      card_description="I'm not entirely sure what this feed... is."
      >
      <MayHaveMissed :article-number="articleSet.slice(19, 20)" />
      <MayHaveMissed :article-number="articleSet.slice(20, 21)" />
    </CardGroup>

    <CardSingleSocial
      class="card_social mastadon"
      card_title="From Mastodon"
      card_description="Still a test, I guess?"
      >
      <Mastodon :count=3 />
    </CardSingleSocial>

    <CardSingleSource
      class="card_SingleSource"
      card_title="Dig In"
      card_description=""
      >
      <SingleSourceRow :source=row1 :count=10 />
    </CardSingleSource>

    <CardSingle
      class="card_video"
      card_title="Cool Video"
      card_description=""
      >
      <SingleVideo :article-number="videoSet.slice(0, 1)" />
    </CardSingle>

    <CardSingle
      class="card_video"
      card_title="Cool Video"
      card_description=""
      >
      <SingleVideo :article-number="videoSet.slice(1, 2)" />
    </CardSingle>

    <CardSingleSource
      class="card_SingleSource"
      card_title="Dig In"
      card_description=""
      >
      <SingleSourceRow :source=row2 :count=10 />
    </CardSingleSource>

    <CardSingleSource
      class="card_SingleSource"
      card_title="Dig In"
      card_description=""
      >
      <SingleSourceRow :source=row3 :count=10 />
    </CardSingleSource>

    <CardGroup
      class="card_headlines"
      card_title="Just the Headlines"
      card_description=""
      >
      <MultipleHeadlines :count=4 :article-numbers="articleSet.slice(10, 14)" />
    </CardGroup>

    <CardGroup
      class="card_MayHaveMissed"
      card_title="You May Have Missed"
      card_description="I'm not entirely sure what this feed... is."
      >
      <MayHaveMissed :article-number="articleSet.slice(22, 23)" />
      <MayHaveMissed :article-number="articleSet.slice(23, 24)" />
    </CardGroup>
    
    <CardGroup
      class="card_headlines"
      card_title="Just the Headlines"
      card_description=""
      >
      <MultipleHeadlines :count=4 :article-numbers="articleSet.slice(14, 18)" />
    </CardGroup>

    <CardSingleSource
      class="card_SingleSource"
      card_title="Dig In"
      card_description=""
      >
      <SingleSourceRow :source=row4 :count=10 />
    </CardSingleSource>
    
    <CardSingleSource
      class="card_headlines"
      card_title="Dig In"
      card_description=""
      >
      <SingleSourceRow :source=row5 :count=10 />
    </CardSingleSource>

  </section>

  <!-- gonna use this for "peek" as well down the road -->
  <section id="app-modal" class="settings-off">
    <div class="input-toggle toggle_SettingsPanel">
      <label for="toggle_SettingsPanel">Settings</label>
      <button
        id="toggle_SettingsPanel"
        class="input-button"
        v-on:click="toggleSettings"
         tabindex="0">
        <object
          type="image/svg+xml"
          data="src/assets/icon-settings.svg"
          alt="Settings icon"
          class="toggle-image-gear"
        ></object>
          <object
            type="image/svg+xml"
            data="src/assets/icon-close.svg"
            alt="Settings icon"
            class="toggle-close"
          ></object>
      </button>
    </div>
  
  </section>
  
  <Modal
   tabindex="0"
  />

</template>

<style lang="scss">
  
  html.lock-scroll {
    overflow-y: hidden;
    height: 100%;
  }
  
  .app-body.settings-on {
    transform: scale(0.95);
    transition: all 0.2s ease-in-out;
    margin-top: -10vh;
  }
  .app-body.settings-off {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }
  
  .modal-container.settings-off {
    top: -200vh;
    filter: blur(10px);
    opacity: 0;
    pointer-events: none;
  }
  .modal-container.settings-on {
    top: 0;
    filter: blur(0);
    opacity: 100;
    pointer-events:initial;
    transition: top 0.25s ease-in-out;
  }
  .settings-off {
    .toggle-close {
      transition: opacity 0.9s ease-in-out;
      opacity: 0;
    }
    .toggle-image-gear {
      transition: opacity 0.9s ease-in-out;
      opacity: initial;
    }
    button#toggle_SettingsPanel {
      transition: transform 0.6s ease-in-out, opacity 0.3s ease-in-out;
      &:hover {
        transform: rotate(45deg) scale(0.9);
      }
      &:active {
        transform: rotate(180deg) scale(0.7);
      }
    }
  }
  .settings-on {
    .modal-title {
      display: none;
    }
    .toggle-close {
      opacity: initial;
      transition: opacity 0.9s ease-in-out;
    }
    .toggle-image-gear {
      opacity: off;
      transition: opacity 0.9s ease-in-out;
    }
    button#toggle_SettingsPanel {
      transition: transform 0.6s ease-in-out, opacity 0.3s ease-in-out;
      &:hover {
        transform: scale(0.9);
      }
      &:active {
        transform: scale(0.7);
      }
    }
  }

  .app-body {
    position: relative;
    z-index: 10;
  }

  #app {
    position: relative;
    z-index: 10;
  }

  header.main-header {

    display: flex;
    max-width: 100%;
    width: 100%;
    height: auto;
    padding: 1rem 2rem 0 2rem;

    position: relative;
    z-index: 200;

    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .app-title {
      font-family: "BitterPro", 'Courier New', Courier, monospace;
      font-size: 2rem;
      font-weight: 900;
      line-height: 1.3;
      text-align: center;
    }

  }
  
  section.module-row {

    display: flex;
    flex-flow: column wrap;
    gap: $card-padding-internal;

    margin: 1rem;

    > article {
      height: auto;
    }

    @include mq('large') {

      flex-flow: row wrap;

      > article {
        flex: 1 20%;
        min-width: 20%;
      }

      .card_TopStory {
        flex: 1 60%;
      }

      .card_SingleSource {
        flex: 1 100%;
      }

      .card_MayHaveMissed {
        flex: 2 40%;
      }

    }
    
  }

  /* SETTINGS PANEL - RELOCATE ME */
  .input-toggle.toggle_SettingsPanel {

    position: fixed;
    top: 1rem;
    right: 2rem;

    z-index: 1000;

    label {
      display: none;
    }

    button {

      display: block;
      width: 2.6rem;
      height: 2.6rem;
      // padding: .1rem;

      position: relative;

      font-size: 0;
      // color: var(--button-color-primary);
      
      border: none;
      border-radius: 100%;

      // background-color: var(--button-background-primary);
      background-color: #ffffff;

      box-shadow: 0px 0px 15px 0px var(--app-background-color);

      object {

        display: block;
        width: 2.2rem;
      
        position: absolute;
        top: 0.2rem;
        left: 0.15rem;

        background-color: #ffffff;

        border-radius: 100%;

        pointer-events: none;

      }

    }

  }

</style>