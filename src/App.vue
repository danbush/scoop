<script setup lang="ts">

  import Header from './components/Header.vue'
  import Modal from './components/Modal.vue'

  /*  Import top-level cards
      */
  import CardGroup from './components/CardGroup.vue'

  /*  Import modules, components, cards, or whatever Dan wants to call them
      */
  import TopStory from './components/TopStory.vue'
  import MultipleHeadlines from './components/MultipleHeadlines.vue'
  import SingleVideo from './components/SingleVideo.vue'
  import SingleSourceRow from './components/SingleSourceRow.vue'
  import MayHaveMissed from './components/MayHaveMissed.vue'
  import Mastodon from './components/Mastodon.vue'
  
  import { ToggleKeyCommands } from './components/helpers/toggles'
  
  import { waffleCone, ContentSource } from './components/helpers/waffle_cone'

  const articleSet = waffleCone(ContentSource.Articles, 24)
  const videoSet = waffleCone(ContentSource.Videos, 2)
  const articleSetForSingleSource = waffleCone(ContentSource.Articles, 6)
  
  var row1: number = articleSetForSingleSource.slice(0, 1)
  var row2: number = articleSetForSingleSource.slice(2, 3)
  var row3: number = articleSetForSingleSource.slice(3, 4)
  var row4: number = articleSetForSingleSource.slice(4, 5)
  var row5: number = articleSetForSingleSource.slice(5, 6)
  
  
  
</script>

<template>

  <Header appTitle="scoopy" />

  <section class="app-body module-row settings-off">
    <TopStory :article-number="articleSet.slice(0, 1)" />
    
    <MultipleHeadlines :count=4 :article-numbers="articleSet.slice(2, 6)" />
    
    <MultipleHeadlines :count=4 :article-numbers="articleSet.slice(6, 10)" />
    
    <CardGroup
      class="card_MayHaveMissed"
      card_title="You May Have Missed"
      >
      <MayHaveMissed :article-number="articleSet.slice(19, 20)" />
      <MayHaveMissed :article-number="articleSet.slice(20, 21)" />
    </CardGroup>
    
    <Mastodon :count=3 />
    
    <SingleSourceRow :source=row1 :count=10 />
    
    <SingleVideo :article-number="videoSet.slice(0, 1)" />
      
    <SingleVideo :article-number="videoSet.slice(1, 2)" />
    
    <SingleSourceRow :source=row2 :count=10 />
    
    <SingleSourceRow :source=row3 :count=10 />
    
    <MultipleHeadlines :count=4 :article-numbers="articleSet.slice(10, 14)" />
    
    <CardGroup
      class="card_MayHaveMissed"
      card_title="You May Have Missed"
            >
      <MayHaveMissed :article-number="articleSet.slice(22, 23)" />
      <MayHaveMissed :article-number="articleSet.slice(23, 24)" />
    </CardGroup>
    
    <MultipleHeadlines :count=4 :article-numbers="articleSet.slice(14, 18)" />
    
    <SingleSourceRow :source=row4 :count=10 />
    
    <SingleSourceRow :source=row5 :count=10 />
  </section>

  <Modal tabindex="0" />
    
  <section class="keyboard-commands keyboard-commands-off" v-on:click="ToggleKeyCommands">
    <ul>
      <li>
        <span class="keyboard-key">Escape</span> Toggle settings modal
      </li>
      <li>
        <span class="keyboard-key">T</span> Scroll to top of page
      </li>
      <li>
        <span class="keyboard-key">?</span> Toggle keyboard shortcuts
      </li>
    </ul>
  </section>

</template>

<style lang="scss">
  section.keyboard-commands {
    transition: all 0.3s ease;
    z-index: 20;
  }
  
  section.keyboard-commands.keyboard-commands-off {
    bottom: 1px;
    right: 1px;
    position: fixed;
    opacity: 0;
    transform: scale(0.1);
    transform-origin: bottom right 60px;
  }
  
  section.keyboard-commands.keyboard-commands-on {
      position: fixed;
      bottom: 10px;
      right: 10px;
      border-radius: 24px;
      background-color: #000000b0;
      color: white;
      backdrop-filter: blur(10px);
      padding: 3rem;
      opacity: 1;
      box-shadow: 0px 0px 15px 0px #000000;
      transform: rotate(-0.4deg);
  }
  
  span.keyboard-key {
      border: 2px solid white;
      border-radius: 8px;
      margin: 10px;
      padding: 10px;
      line-height: 4.2rem;
  }
  
  html.lock-scroll {
    overflow-y: hidden;
    height: 100%;
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