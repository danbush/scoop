<script setup lang="ts">
  /************************** 
  Top level Social Feed Card container
  todo: fill out this section
  ***************************/
  
  defineProps<{
    card_title: string
    card_description: string
  }>()

</script>

<template>
  <article class="card card-single card-social">
    
    <header class="card-header">
      <hgroup>
        <h2 class="card-title">{{card_title}}</h2>
        <span class="card-description">{{card_description}}</span>
      </hgroup>
    </header>

    <section class="card-body">
      <slot />
    </section>

  </article>
</template>

<style scoped lang="scss">

  .article-anchor-wrapper {

    color: #ffffff;

  }

  .article-publisher {
//    margin: 0 $card-padding-internal $card-padding-internal $card-padding-internal;
    color: #ffffff;

    a, p {
      color: #ffffff;
    }

  }

  .p3 {
    font-size: 0.8rem;
    color: #ffffff!important;
  }

  .TMP-card-social {
        
      p {
        color: $background-lighter;
        text-align: center;
      }
      
      .blurred-lines {
        display: block;
  //      width: 100%;
  //      height: 100%;
        backdrop-filter: blur(10px);
  //      padding-top: $card-padding-internal;
  
  
      }
      
      .article-wrapper {
        align-items: flex-start;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: $card-padding-internal;
      }
      
      .article-anchor-wrapper {
        display: block;
        position: relative;
  //      max-width: 100%;
  //      min-width: 100%;
  //      width: 100%;
  //      height: 100px;
  
        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }
  
  
  }
      
      .card-header {
        background-color: #2F0C7A;
        color: #858AFA;
      }
      
      .article-title {
        margin: 0.4rem $card-padding-internal $card-padding-internal $card-padding-internal;
        color: $background-lighter;
        text-shadow: 0 0 12px #000000, 0 0 2px $background;
        text-align: center;
        text-decoration: none;
      }
      
      .article-logo {
  
        display: block;
  //      max-width: 60px;
        height: 60px;
        aspect-ratio: 1/1;
        object-fit: cover;
  
  
        margin: 0 auto calc($card-padding-internal * 3) auto;
        filter: drop-shadow(0 0 12px #000000) drop-shadow(0 0 2px $background);
  
        background-color: $background-lighter;
  
      }


      
      .article-image-wrapper {
  
  //      flex: 1 0 calc(33% - #{$card-padding-internal * 2});
  
        display: block;
        padding: $card-padding-internal;
  
        position: relative;
        z-index: 10;
  
        backdrop-filter: blur(10px);
  
  
    //    width: calc(100% - 2rem);
  
        @include transition;
        
        &:hover {
          transform: scale(1.03) rotate(0.5deg);
          filter: brightness(1.08);
          box-shadow: 0px 0px 15px 0px lighten($background, 40%);
        }
  
        &:active {
          filter: brightness(1.25);
          transform: scale(0.98) rotate(0.5deg);
        }
  
      }
    
      .item-source {
    
        display: block;
    
        img {
          // sloppy, I know
          height: 1.6rem;
          width: auto;
        }
    
      }
    
    }
  
</style>