<script>
  import Icon from "components/Icon";

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

  // TODO:
  // extract colored styles
  // iterate with variables
</script>

<style>
  .any {
    letter-spacing: 0.0892857143em;
    transition: box-shadow 0.9s ease;
  }

  .basic {
    @apply elevation-3 bg-primary-500;

    &:hover {
      @apply elevation-5 bg-primary-400;
      transition: box-shadow 0.2s ease;
    }
  }

  .outlined {
    background: transparent;
    @apply border border-primary-400 border-solid rounded text-primary-500;

    &:hover {
      @apply bg-primary-50;
    }
  }

  .light:hover {
    @apply bg-primary-200;
  }

  .icon {
    @apply rounded-full p-4 m-4 flex items-center elevation-10;
  }

  .text {
    @apply bg-transparent border-none text-primary-400 ripple-primary px-3;

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
  class:basic
  class:outlined
  class:icon
  class:text
  class:disabled
  class:w-full={block}
  class:fab
  class:small
  class:light
  class="any py-2 px-4 rounded text-white border-none uppercase text-sm
  font-medium"
  class:ripple-primary={outlined || text}
  class:ripple-white={basic || fab}
  on:click
  on:click={() => (value = !value)}>
  {#if icon}
    <Icon color={light ? 'text-primary-500' : 'white'} {small}>{icon}</Icon>
  {/if}
  <slot />
</button>
