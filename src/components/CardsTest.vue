<script setup lang="ts">
  /************************** 
   * All cards. Test use only.
  ***************************/
  defineProps<{
    headline: string,
    body: string,
    url: string,
  }>()
  
  import urlMetadata from 'url-metadata'
  var article_1: any = {}
  var article_1_body: string = ""
  var article_1_logo: string = ""
  var article_1_url: string = ""
  urlMetadata('http://localhost:8181/https://www.theverge.com/2023/7/17/23798368/neopets-relaunch-website-flash-games', {
    requestHeaders: {
    }
  }).then((metadata: any) => {
    article_1 = metadata
    console.log(article_1)
    console.log(article_1['description'])
    article_1_body = article_1.jsonld.articleBody.substring(0,1000) + "..."
    article_1_logo = article_1.jsonld.publisher.logo.url
    article_1_url = article_1.canonical
    // do stuff with the metadata
  }).catch((err) => {
    console.log(err)
  })
</script>

<template>

<!--

media-text
media-video
media-audio

card-single
card-group

-->

  <div class="card card-single card_top-story">
    <header class="card-header">
      <h2 class="card-title">Top Story</h2><span class="devtip"> // .card-single .card_top-story</span>
    </header>
    <div class="card-content">
      <article class="top-story">
        <header class="article-header">
          <img :src="article_1['og:image']" alt="ham">
          <div class="article-meta">
            <span class="item-source">
              <!-- todo: allow for image or text fallback -->
              <img class="article-logo" :src="article_1_logo" alt="llamas">
            </span>
            
            date, author, readtime, etc.
          </div>
        </header>
        <h3 class="item-title">{{ article_1['og:title'] }}</h3>
        <div class="item-body">{{ article_1_body }}</div>
       </article>
    </div>
    <footer class="card-footer">
      <div class="card-actions">
        <div class="card-actions-external">
          <div class="button-group">
            <a :href="article_1_url"><button class="button" type="button">
              [share]
            </button></a>
            <a :href="article_1_url"><button class="button" type="button">
              [bookmark]
            </button></a>
            <a :href="article_1_url"><button class="button" type="button">
              [original]
            </button></a>
          </div>
        </div>
        <div class="actions-internal">
          <div class="button-group">
            <a :href="article_1_url"><button class="button" type="button">
              [save]
            </button></a>
            <a :href="article_1_url"><button class="button" type="button">
              [hide]
            </button></a>
            <a :href="article_1_url"><button class="button action_intent-primary" type="button">
              Read More
            </button></a>
          </div>
        </div>
      </div>
    </footer>
  </div>

  <div class="card card-single card_video">
    <header class="card-header">
      <h2 class="card-title">New Video</h2><span class="devtip"> // .card-single .card_video</span>
    </header>
    <div class="card-content">

      <div class="videoWrapper">
        <iframe class="video-embed" width="560" height="315" src="https://www.youtube.com/embed/5LWDl5qaQbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h3>Ice cream is really delicious... here's why</h3>
      <div class="video-meta-container">
        <img class="video-meta video-profile" src="https://placedog.net/200/200" alt="blah">
        <span class="video-meta text video-author">MKBHD</span>
        <span class="video-meta text video-timestamp">2 million years ago</span>
      </div>
    </div>
  </div>

  <div class="card card-group card_text">
    <header class="card-header">
      <h2 class="card-title">Just the Headlines</h2><span class="devtip"> // .card-group .card_text</span>
    </header>
    <div class="card-content">
      <ul class="card-list">
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div>
  </div>

  <div class="card card-group card_audio">
    <header class="card-header">
      <h2 class="card-title">New Group (audio)</h2><span class="devtip"> // .card-group .card_audio</span>
    </header>
    <div class="card-content">
      <ul class="card-list">
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
      </ul>
    </div>
  </div>

</template>


<style scoped lang="scss">

/*
  article.top-story {
    flex: 3;
    width: 100%;
    min-height: 200px;
    min-width: 800px;
    background-color: $background-lighter;
    border-radius: 8px;
    position: relative;
    
    .article-logo {
      display: block;
      max-height: 20px;
      position: absolute;
      margin: 20px;
    }
    
    img {
      max-width: 50%;
      margin: 1rem 1rem 0 1rem;
      float: left;
    }
    h2 {
      background-color: $accent-priority-one;
      padding: 0.5rem;
      
      
      font-family: "BitterPro", 'Courier New', Courier, monospace;
      font-weight: bold;
      font-size: 0.8rem;
      // todo: make these fonts a mixin.
      
      text-align: center;
    }
    h3 {
      margin: 0.5rem 1rem 1rem 1rem;
      
      font-family: "BitterPro", 'Courier New', Courier, monospace;
      font-weight: bold;
      font-size: 2.2rem;
    }
    */
    p {
      font-family: "Vollkorn", 'Times New Roman', serif;
      margin: 1rem;
      font-size: 1.02rem;
      line-height: 1.4rem;
    }
</style>
