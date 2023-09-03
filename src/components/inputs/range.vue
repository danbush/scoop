<script setup lang="ts">

  defineProps<{
    range_name: string
    range_slug: string
    range_min: number
    range_max: number
  }>()

</script>

<template>

  <div class="range">
    <p class="toggle-label">{{range_name}}</p>
    <input type="range" :id="range_slug" :min="range_min" :max="range_max" value="" />
  </div>

</template>

<style scoped lang="scss">

  input[type=range] {

    &:focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      height: .2rem;
      cursor: pointer;
      background: #ccc;
    }

    &::-webkit-slider-thumb {
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 100%;
      background: var(--button-background-primary);
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -0.65rem;
    }

    &:focus::-webkit-slider-runnable-track {
      background: orangered;
    }


  }



/* Revisit this! */
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}

</style>