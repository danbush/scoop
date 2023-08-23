<script setup lang="ts">

  import ThemeSwitcher from './GodBar/_ThemeSwitcher.vue'
  import Toggle from './inputs/toggle.vue'
  import Range from './inputs/range.vue'

  import SettingsCard from './Settings/SettingsCard.vue'
  import SettingsCardExperimentalToggle from './Settings/SettingsCardExperimentalToggle.vue'
  import SettingsOptions from './Settings/SettingsOptions.vue'

</script>

<template>

  <article class="app-settings">

    <SettingsCardExperimentalToggle
      card_slug="settings_experimental"
      card_title="Experimental Settings"
      card_description="Enable experimental settings that are not ready for feedback. These settings may be functionally broken or not even started, but exist purely as a placeholder."
      >
    </SettingsCardExperimentalToggle>

    <SettingsCard
      card_slug="settings_appearance"
      card_title="Appearance &amp; Themes"
      card_description="parent description"
      >

      <SettingsOptions
        options_title="Theme"
        options_description="child description"
        options_experimental=false
      >
        <ThemeSwitcher />
      </SettingsOptions>
  
      <SettingsOptions
        options_title="Readability"
        options_description="child description"
        options_experimental=true
      >
        <Range
          range_name="Text Size"
          range_slug="rangeFontSize"
          range_min=1
          range_max="11"
          class="dev-disable"
        />
      </SettingsOptions>

    </SettingsCard>

    <SettingsCard
      card_slug="settings_content"
      card_title="Content &amp; Feeds"
      card_description="A list of feeds. One Feed to Rule Them All for now, with the idea of customizing down the road."
      >

      <SettingsOptions
        options_title="#showthelist"
        options_description=""
        options_experimental=true
      >
        #showthelist
      </SettingsOptions>

      <SettingsOptions
        options_title="Paywalled Content"
        options_description="Show or hide content that rests behind a paywall."
        options_experimental=true
      >
        <Toggle />
      </SettingsOptions>
  
      <SettingsOptions
        options_title="Spoilers!"
        options_description="Show or hide content that may contain spoilers."
        options_experimental=true
      >
        <Toggle />
      </SettingsOptions>

      <SettingsOptions
        options_title="SvenMode"
        options_description="Show or hide content that may contain politics."
        options_experimental=true
      >
        <Toggle />
      </SettingsOptions>      

    </SettingsCard>

    <SettingsCard
      card_slug="settings_account"
      card_title="My Account"
      card_description="Future home of general account info"
      >
      components here
    </SettingsCard>
    
    <SettingsCard
      card_slug="settings_about"
      card_title="About"
      card_description=""
      >
      
      <SettingsOptions
        options_title="About {{ APPTITLE }}"
        options_description=""
        options_experimental=false
      >
        <p><strong>frontpage.today</strong> is a first look at a new dynamic, fun news reader experience that prioritizes personal content discovery over 'inbox zero'.</p>
          <p>This page is open source powered by a system called <strong>scoopy</strong>, and eventually anyone will be able to self-host their own instance with their own news sources.</p>
      </SettingsOptions>

      <SettingsOptions
        options_title="Colophon"
        options_description=""
        options_experimental=false
      >
        <ul class="colophon">
          <li>
            Various icons from <a href="https://iconscout.com" target="_blank">IconScout</a>
          </li>
        </ul>
      </SettingsOptions>

    </SettingsCard>

  </article>

</template>

<style scoped lang="scss">

  .app-settings {

    display: flex;
    flex-direction: column;
    gap: $card-padding-internal;

    @include mq('large') {
      flex-direction: row;
      flex-wrap: wrap;
    }

    > .card {
      height: auto;
      // max-width: initial;
      // min-width: 20%;
      // flex-grow: 1;
      // flex-shrink: 1;
    }

    @include mq('large') {
      
      #settings_experimental {
        flex: 1 20%;
        // max-width: calc( 50% - ($card-padding-internal / 2) );
//        max-width: 30%;
        // flex-shrink: 1;
      }

      #settings_appearance {
        flex: 1 60%;
        // max-width: 50%;
        // flex-grow: 2;
      }


    }


  }

  .app-settings-OLD {

    display: flex;
    flex-direction: column;

    @include mq('large') {
      flex-direction: row;
      flex-wrap: wrap;
      gap: $card-padding-internal;
    }
    
    .settings-panel-section {

      margin-bottom: 2rem;
      padding: 0 0 2rem 0;

      background-color: var(--card-body-background);

      &:last-of-type {
        margin-bottom: 0;
        border-bottom: 0;
      }

      @include mq('large') {
        min-width: 40%;
        flex-grow: 1;
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

    .section-panel-options {

      display: flex;
      flex-direction: column;

      @include mq('large') {

        flex-direction: row;
        flex-wrap: wrap;

        > .settings-panel-group {
          flex-grow: 1;
        }

      }

    }

    #settings-about {
      width: 100%;
/*
      display: flex;
      flex-direction: column;
    
      @include mq('large') {

        flex-direction: row;
        flex-wrap: wrap;

        .section-title {
          width: 100%;
        }



      }

*/

    }
  }

</style>
