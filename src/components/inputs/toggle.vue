<script setup lang="ts">

  defineProps<{
    input_name: string,        // label
    input_class: string,       // custom class
  }>()

</script>

<template>

  <div class="toggle toggle_{{input_class}}">
    <p class="toggle-label">{{input_name}}</p>
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  </div>

</template>

<style scoped lang="scss">

  .toggle-label {
    margin-bottom: .4rem;
  }


  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: $input-size;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: $status-success;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px $status-success;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

</style>