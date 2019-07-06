<script>
  import Icon from "components/Icon";
  import utils from "utils/classes.js";

  export let c = "";
  export let value = false;
  export let outlined = false;
  export let text = false;
  export let block = false;
  export let disabled = false;
  export let icon = null;
  export let small = false;
  export let light = false;

  const basic = !outlined && !text;
  const fab = text && icon;

  export let color = "primary";
  
  let classes = "";

  const {
    bg,
    border,
    txt,
    ripple,
  } = utils(color);

  $: {
    if (basic) {
      classes = `${bg()} hover:${bg(400)} hover:elevation-5 elevation-3 transition`;
    }

    if (outlined) {
      classes = `${border(400)} ${txt()} ${ripple()} bg-transparent hover:${bg(50)}`;
    }

    if (light) {
      classes = `${bg(200)} hover:${bg(50)}`;
    }

    if (text) {
      classes = `${ripple()} ${txt(400)}`;
    }
  }
</script>

<style>
  .button {
    letter-spacing: 0.0892857143em;
    transition: box-shadow 0.9s ease;
  }

  .outlined {
    @apply border border-solid rounded;
  }

  .icon {
    @apply rounded-full p-4 m-4 flex items-center elevation-10;
  }

  .text {
    @apply bg-transparent border-none ripple-primary px-3;

    &:hover {
      @apply bg-transparent;
    }
  }

  .disabled {
    @apply bg-gray-300 text-gray-500 elevation-0 pointer-events-none;
    &:hover {
      @apply elevation-0 bg-gray-300 cursor-default;
    }
  }

  .fab {
    @apply elevation-0 text-white px-4;
    &:hover {
      @apply bg-transparent;
    }
  }

  .small {
    @apply p-2;
  }
</style>

<button
  class="{c} {classes} button py-2 px-4 rounded text-white border-none uppercase text-sm font-medium"
  class:outlined
  class:icon
  class:text
  class:disabled
  class:w-full={block}
  class:fab
  class:small
  class:light
  class:ripple-white={basic || fab}
  on:click
  on:click={() => (value = !value)}>
  {#if icon}
    <Icon color={light ? `text-${color}-500` : 'white'} {small}>{icon}</Icon>
  {/if}
  <slot />
</button>
