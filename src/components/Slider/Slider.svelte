<script>
  import { Ripple } from "components/Util";

  export let value = 0;
  export let label = "";
  export let color = "text-primary-500";
  export let disabled = false;
  export let min = 0;
  export let max = 100;
</script>

<style>
.slider {
  -webkit-appearance: none;
  @apply bg-primary-100 w-full rounded cursor-pointer;
  height: 4px;
}
.slider::-ms-thumb {
  margin: 0;
}
.slider:focus {
  outline: none;
}

.slider::range-thumb {
  -webkit-appearance: none;
  @apply rounded-full p-1 w-5 h-5 elevation-3 bg-primary-400;
}

.slider:focus::range-thumb {
  -webkit-appearance: none;
  @apply rounded-full p-1 w-5 h-5 elevation-3 bg-primary-400;
  margin-top: -0.5rem;
}

.slider:focus::range-track {
  @apply bg-primary-100 rounded;
  height: 4px;
}

.slider::range-lower {
  @apply bg-primary-400;
}

</style>

<label for="slider" class="label">{label}</label>
<input type="range" {min} {max} class:disabled bind:value class="slider">
