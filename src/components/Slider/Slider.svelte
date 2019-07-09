<script>
  import { Ripple } from "components/Util";

  export let value = 0;
  export let label = "";
  export let color = "primary";
  export let disabled = false;
  export let min = 0;
  export let max = 100;
  export let step = null;

  $: style = disabled
    ? ''
    : `background: linear-gradient(to right, #bc47bc 0%, #bc47bc ${value}%, #f6e5f6 ${value}%, #f6e5f6 100%)`;

</script>

<style>
input {
  -webkit-appearance: none;
  @apply bg-primary-50 w-full rounded cursor-pointer;
  height: 4px;

  &:disabled {
    @apply bg-gray-300;
  }

  &::range-thumb {
    -webkit-appearance: none;
    @apply rounded-full p-1 w-5 h-5 elevation-3 bg-primary-500;
  }
  
  &:disabled::range-thumb {
    @apply bg-gray-400;
  }

  &::-ms-thumb {
    margin: 0;
  }
  &:focus {
    outline: none;

    &::range-thumb {
      -webkit-appearance: none;
      @apply rounded-full p-1 w-5 h-5 elevation-3 bg-primary-500;
      margin-top: -0.5rem;
    }

    &::range-track {
      @apply rounded;
      height: 4px;
    }
  }
}
</style>

<label class="label">{label}</label>
<input
  type="range"
  {min}
  {max}
  {step}
  {disabled}
  class:disabled
  bind:value
  on:change
  style={style}
>
