<script>
  import Ripple from "../Ripple";
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  export let value = false;
  export let color = "primary";
  export let disabled = false;

  const store = writable(config);

  $: smelte = smelter($store, $$props);

  function check() {
    if (disabled) return;

    value = !value;
  }
</script>

<div class={smelte.wrapper.class} on:click={check}>
  <input bind:value class="hidden" type="checkbox" on:change />
  <div class={smelte.track.class}>
    <div class="w-full h-full absolute" />
    <Ripple color={value && !disabled ? color : 'gray'} noHover>
      <div
        class={smelte.thumb.class}
        style={value ? 'left: 1.25rem' : ""} />
    </Ripple>
  </div>
</div>
