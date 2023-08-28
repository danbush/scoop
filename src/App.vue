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
  <Header msg="scoopy" />
  <section class="module-row">

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
</template>

<style lang="scss">
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
</style>