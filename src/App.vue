<script setup lang="ts">

  import Header from './components/Header.vue'

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

<template>
  <Header msg="scoopy" />
  <section class="module-row">

    <CardSingle
      card_title="Top Story"
      card_description="A single card. Only has one bit of content (article) inside, and adds a card footer."
      >
      <TopStory />
    </CardSingle>

    <CardGroup
      card_title="Just the Headlines"
      card_description="A card group. Contains multiple bits of content (articles) inside, NO footer."
      >
      <MultipleHeadlines :count=4 />
    </CardGroup>

    <CardGroup
      card_title="Just the Headlines"
      card_description=""
      >
      <MultipleHeadlines :count=4 />
    </CardGroup>

    <CardGroup
      card_title="You May Have Missed"
      card_description="I'm not entirely sure what this feed... is."
      >
      <MayHaveMissed />
      <MayHaveMissed />
    </CardGroup>

    <CardSingleSocial
      card_title="From Mastodon"
      card_description="Still a test, I guess?"
      >
      <Mastodon :count=3 />
    </CardSingleSocial>

    <CardSingleSource
      card_title="Dig In"
      card_description=""
      >
      <SingleSourceRow :source=row1 :count=10 />
    </CardSingleSource>

    <CardSingle
    card_title="New Video"
      card_description=""
      >
      <SingleVideo />
    </CardSingle>

    <CardSingle
      card_title="New Video"
      card_description=""
      >
      <SingleVideo />
    </CardSingle>

    <CardSingleSource
      card_title="Dig In"
      card_description=""
      >
      <SingleSourceRow :source=row2 :count=10 />
    </CardSingleSource>

    <CardSingleSource
      card_title="Dig In"
      card_description=""
      >
      <SingleSourceRow :source=row3 :count=10 />
    </CardSingleSource>

    <CardGroup
      card_title="Just the Headlines"
      card_description=""
      >
      <MultipleHeadlines :count=4 />
    </CardGroup>

    <CardGroup
      card_title="You May Have Missed"
      card_description="I'm not entirely sure what this feed... is."
      >
      <MayHaveMissed />
      <MayHaveMissed />
    </CardGroup>
    
    <CardGroup
      card_title="Just the Headlines"
      card_description=""
      >
      <MultipleHeadlines :count=4 />
    </CardGroup>

    <CardSingleSource
      card_title="Dig In"
      card_description=""
      >
      <SingleSourceRow :source=row4 :count=10 />
    </CardSingleSource>
    
    <CardSingleSource
      card_title="Dig In"
      card_description=""
      >
      <SingleSourceRow :source=row5 :count=10 />
    </CardSingleSource>

  </section>
</template>

<style lang="scss">
  section.module-row {

    display: grid;
    /*
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(9, 1fr);
    */

    grid-column-gap: $card-padding-internal;
    grid-row-gap: 20px;

    margin: 1rem;

    @include mq('uwsmr') {

      max-width: 2600px;
      margin: 1rem auto;

      &::after {

        content: '';

        display: block;
        width: 400px;
        height: 200px;

        position: absolute;
        top: 22px;
        left: -8px;
        z-index: -1;

        background-image: url('src/assets/348FnZZ.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;

      }

    }

    /*  Note
        Yes, I know how silly this is.
        No, I'm not fixing it now.
        */
    @include mq('large') {

      grid-template-columns: repeat(24, 1fr);

      > article:nth-child(1) { grid-area: 1 / 1 / 2 / 17; }
      > article:nth-child(2) { grid-area: 1 / 17 / 2 / 25; }
      > article:nth-child(3) { grid-area: 2 / 1 / 3 / 8; }
      > article:nth-child(4) { grid-area: 2 / 8 / 3 / 18; }
      > article:nth-child(5) { grid-area: 2 / 18 / 3 / 25; }
      > article:nth-child(6) { grid-area: 3 / 1 / 4 / 25; }
      > article:nth-child(7) { grid-area: 4 / 1 / 5 / 13; }
      > article:nth-child(8) { grid-area: 4 / 13 / 5 / 25; }
      > article:nth-child(9) { grid-area: 5 / 1 / 6 / 25; }
      > article:nth-child(10) { grid-area: 5 / 1 / 6 / 25; }
      > article:nth-child(11) { grid-area: 6 / 1 / 7 / 8; }
      > article:nth-child(12) { grid-area: 6 / 8 / 7 / 18; }
      > article:nth-child(13) { grid-area: 6 / 18 / 7 / 25; }
      > article:nth-child(14) { grid-area: 7 / 1 / 8 / 25; }
      > article:nth-child(15) { grid-area: 8 / 1 / 9 / 25; }

    }
  }
</style>