<script setup lang="ts">

  import Header from './components/Header.vue'
  
  // import SettingsPanel from './components/SettingsPanel/SettingsPanel.vue'
  import Modal from './components/Modal.vue'
  import { useToggle } from '@vueuse/core'

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

  import { getRandomNumbersInRange } from './components/helpers/sprinkle_getRandomNumbersInRange'
  
  var row1: number = getRandomNumbersInRange(1,0,24)
  var row2: number = getRandomNumbersInRange(1,0,24)
  var row3: number = getRandomNumbersInRange(1,0,24)
  var row4: number = getRandomNumbersInRange(1,0,24)
  var row5: number = getRandomNumbersInRange(1,0,24)

  const [isModalVisible, toggleModal] = useToggle()
  
</script>

<script lang="ts">

</script>

<template>

  <header class="main-header">
    <h1 class="app-title">scoopy</h1>
    <div class="input-toggle toggle_SettingsPanel">
      <label for="toggle_SettingsPanel">Settings</label>
      <button
        id="toggle_SettingsPanel"
        class="input-button"
        @click="toggleModal()">
        <object
          type="image/svg+xml"
          data="src/assets/icon-settings.svg"
          alt="Settings icon"
        ></object>
      </button>
    </div>
  </header>

  <section class="module-row">

    <CardSingle
      class="card_TopStory"
      card_title="Top Story"
      card_description="A single card. Only has one bit of content (article) inside, and adds a card footer."
      >
      <TopStory />
    </CardSingle>

    <CardGroup
      class="card_headlines"
      card_title="Just the Headlines"
      card_description="A card group. Contains multiple bits of content (articles) inside, NO footer."
      >
      <MultipleHeadlines :count=4 />
    </CardGroup>

    <CardGroup
      class="card_headlines"
      card_title="Just the Headlines"
      card_description=""
      >
      <MultipleHeadlines :count=4 />
    </CardGroup>

    <CardGroup
      class="card_MayHaveMissed"
      card_title="You May Have Missed"
      card_description="I'm not entirely sure what this feed... is."
      >
      <MayHaveMissed />
      <MayHaveMissed />
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
      card_title="New Video"
      card_description=""
      >
      <SingleVideo />
    </CardSingle>

    <CardSingle
      class="card_video"
      card_title="New Video"
      card_description=""
      >
      <SingleVideo />
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
      <MultipleHeadlines :count=4 />
    </CardGroup>

    <CardGroup
      class="card_MayHaveMissed"
      card_title="You May Have Missed"
      card_description="I'm not entirely sure what this feed... is."
      >
      <MayHaveMissed />
      <MayHaveMissed />
    </CardGroup>
    
    <CardGroup
      class="card_headlines"
      card_title="Just the Headlines"
      card_description=""
      >
      <MultipleHeadlines :count=4 />
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

  <Modal
    v-show="isModalVisible"
    @close="toggleModal()"
  />

  <!-- <SettingsPanel /> -->

</template>

<style lang="scss">

  #app {
    position: relative;
  }

  header.main-header {

    display: flex;
    max-width: 100%;
    width: 100%;
    height: auto;
    padding: 1rem 1rem 0 1rem;

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

    margin-right: 1rem;

    label {
      display: none;
    }

    button {

      display: block;
      width: 2.6rem;
      height: 2.6rem;
      padding: .1rem;

      font-size: 0;
      // color: var(--button-color-primary);
      
      border: none;
      border-radius: 100%;

//      background-color: var(--button-background-primary);

      object {

        display: block;
        width: 100%;
      
        pointer-events: none;

        path { fill:#ffffff!important; }

      }

    }

  }


</style>