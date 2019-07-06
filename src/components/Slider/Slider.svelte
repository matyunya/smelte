<script>
  import { Ripple } from "components/Util";

  export let value = 0;
  export let label = "";
  export let color = "text-primary-500";
  export let disabled = false;
  export let min = 0;
  export let max = 100;
  export let step = null;

</script>

<style>
.slider {
  -webkit-appearance: none;
  @apply bg-primary-50 w-full rounded cursor-pointer;
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
  @apply rounded;
  height: 4px;
}
</style>

<label for="slider" class="label">{label}</label>
<input
  class="slider"
  type="range"
  {min}
  {max}
  {step}
  {disabled}
  style="background: linear-gradient(to right, #bc47bc 0%, #bc47bc {value}%, #f6e5f6 {value}%, #f6e5f6 100%)"
  class:disabled
  bind:value
  on:change
>
