<script setup lang="ts">

  import Header from './components/Header.vue'
  import Modal from './components/Modal.vue'

  import { useToggle } from '@vueuse/core'
  const [isModalVisible, toggleModal] = useToggle()  

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

</script>

<script lang="ts">

</script>

<template>

  <Header></Header>

  <section class="app-body module-row">

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

  <!-- gonna use this for "peek" as well down the road -->
  <section id="app-modal">

    <div class="input-toggle toggle_SettingsPanel">
      <label for="toggle_SettingsPanel">Settings</label>
      <button
        id="toggle_SettingsPanel"
        class="input-button"
        @click="toggleModal()"
        @keydown.esc="toggleModal()" tabindex="0">
        <object
          type="image/svg+xml"
          data="src/assets/icon-settings.svg"
          alt="Settings icon"
          class="toggle-image-gear"
          v-hide="isModalVisible"
        ></object>
        <transition name="fade">
          <object
            type="image/svg+xml"
            data="src/assets/icon-close.svg"
            alt="Settings icon"
            class="toggle-close"
            v-show="isModalVisible"
          ></object>
        </transition>
      </button>
    </div>

  </section>

  <transition name="fade">
    <Modal
      v-show="isModalVisible"
      @close="toggleModal()"
      @keydown.esc="toggleModal()" tabindex="0"
    />
  </transition>

</template>

<style lang="scss">

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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

</style>