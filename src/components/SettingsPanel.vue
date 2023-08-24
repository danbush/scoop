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
        options_description=""
        options_experimental=false
        class="card-theme"
      >
        <ThemeSwitcher />
      </SettingsOptions>
  
      <SettingsOptions
        options_title="Readability"
        options_description=""
        options_experimental=true
        class="card-readability"
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
        class="dev-disable"
      >
        #showthelist
      </SettingsOptions>

      <SettingsOptions
        options_title="Paywalled Content"
        options_description="Show or hide content that rests behind a paywall."
        options_experimental=true
        class="dev-disable"
      >
        <Toggle />
      </SettingsOptions>
  
      <SettingsOptions
        options_title="Spoilers!"
        options_description="Show or hide content that may contain spoilers."
        options_experimental=true
        class="dev-disable"
      >
        <Toggle />
      </SettingsOptions>

      <SettingsOptions
        options_title="SvenMode"
        options_description="Show or hide content that may contain politics."
        options_experimental=true
        class="dev-disable"
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
        class="card-about"
      >
        <p><strong>frontpage.today</strong> is a first look at a new dynamic, fun news reader experience that prioritizes personal content discovery over 'inbox zero'.</p>
        <p>This page is open source powered by a system called <strong>scoopy</strong>, and eventually anyone will be able to self-host their own instance with their own news sources.</p>
      </SettingsOptions>

      <SettingsOptions
        options_title="Colophon"
        options_description=""
        options_experimental=false
        class="card-colophon"
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

<style lang="scss">

  .app-settings {

    display: flex;
    flex-direction: column;
    gap: $card-padding-internal;

    @include mq('large') {
      flex-direction: row;
      flex-wrap: wrap;
    }

    @include mq('large') {
      
      #settings_experimental {
        flex: 1 20%;
      }

      #settings_appearance {
        flex: 1 60%;
      
        > .card-body {

          @include mq('large') {

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: $card-padding-internal;

            > * {
              height: auto;
            }

            > .card-description {
              width: 100%;
            }

            .card-theme {
              flex: 1 50%;
            }

            .card-readability {
              flex: 1 25%;
            }

          }

        }
      
      }

      #settings_about {

        .card-body {
          display: flex;
          flex-direction: row;
          gap: $card-padding-internal;
        }

        .card-about,
        .card-colophon {

          .card-body {
            flex: 1 25%;
            flex-direction: column;
          }
          
        }        

      }

      .card-theme .card-body {
        flex: 1 20%;
      }

      .card-readability {

      }

    }


  }

</style>
