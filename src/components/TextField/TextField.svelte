<script>
  import { fly } from 'svelte/transition';
  import { quadOut } from 'svelte/easing';

  import Icon from 'components/Icon';
	export let c = '';
	export let outlined = false;
  export let value = null;
  export let label = '';
  export let placeholder = '';
  export let hint = '';
  export let error = false;
  export let append = '';
  export let persistentHint = false;
  export let textarea = false;
  export let rows = 5;
  export let select = false;
  export let autocomplete = false;


  let focused = false;

  function toggleFocused() {
    focused = !focused;
  }

  $: showHint = error || (persistentHint ? hint : (focused && hint));
  $: notFocused = focused === false;

  const transitionProps = { y: -10, duration: 100, easing: quadOut };
</script>

<style>
  .line {
    height: 1px;
  }

  .label-top {
    line-height: 0.05;
    @apply absolute top-0 label-transition text-xs pt-4;
  }

  /* 
     TODO: Any background.
  */
  .label-top-outlined {
    @apply absolute top-0 label-transition ml-3 px-1 pt-0 mt-0 bg-white;
  }

  .outlined {
    @apply border-gray-600 border rounded bg-transparent py-4;
  }

  .outlined-focused-border {
    @apply border-primary-400 border transition;
  }
  
  .outlined-error {
    @apply border-red-500 border transition;
  }

  .error {
    @apply text-red-500 caret-red-500;
  }

  .select {
    @apply pb-0;
    height: 3.5rem;
  }
</style>

<svelte:window on:click={() => select ? focused = false : null} />

<div
  class="mt-2 relative pb-6"
  class:select={select || autocomplete}
>
  <div
    class="text-gray-600 relative"
    class:error
  >
    <label
      class="label pt-4 absolute top-0 label-transition block pb-2 px-4 pointer-events-none cursor-text"
      class:text-primary-500={focused && !error}
      class:label-top={placeholder || focused || value}
      class:label-top-outlined={(placeholder || focused || value) && outlined}
    >{label}</label>

    {#if append}
      <div
        class="absolute right-0 top-0 pb-2 pr-4 pt-4"
      >
        <Icon color={focused ? 'text-primary-500' : 'text-gray-700'}>{append}</Icon>
      </div>
    {/if}

    {#if (!textarea && !select) || autocomplete}
      <input
        aria-label={label}
        class="transition pb-2 pt-6 px-4 rounded-t text-black w-full caret-primary-500 bg-gray-100"
        class:bg-gray-300={focused}
        class:outlined
        class:outlined-focused-border={focused && outlined}
        class:outlined-error={outlined && error}
        class:error
        class:cursor-pointer={select}
        on:focus={toggleFocused}
        on:blur={toggleFocused}
        bind:value
        on:change
        on:input
        on:click
        on:focus
        placeholder={!value ? placeholder : ''}
      />
    {:else if textarea && !select}
      <textarea
        {rows}
        aria-label={label}
        class="transition pb-2 pt-6 px-4 rounded-t text-black w-full caret-primary-500 bg-gray-100"
        class:bg-gray-300={focused}
        class:outlined
        class:outlined-focused-border={focused && outlined}
        class:outlined-error={outlined && error}
        class:caret-red-500={error}
        on:change
        on:input
        on:click
        on:focus
        on:input={({ target }) => value = target.value}
        on:focus={toggleFocused}
        on:blur={toggleFocused}
        placeholder={!value ? placeholder : ''}
      >{value || ''}</textarea>
    {:else if select && !autocomplete}
      <div
        class="select transition pb-2 pt-6 px-4 rounded-t text-black w-full caret-primary-500 bg-gray-100"
        class:bg-gray-300={focused}
        class:outlined
        class:outlined-focused-border={focused && outlined}
        class:outlined-error={outlined && error}
        class:error
        class:cursor-pointer={select}
        on:click={toggleFocused}
        on:change
        on:input
        on:click
        on:focus
      >{value}
      </div>
    {/if}

    <div
      class="line absolute bottom-0 left-0 w-full bg-gray-600"
      class:hidden={outlined}
    >
      <div
        class="mx-auto w-0"
        class:w-full={focused || error}
        class:bg-red-500={error}
        class:bg-primary-500={focused}
        style="height: 2px; transition: width .2s ease"
      >
      </div>
    </div>
  </div>

  {#if showHint}
    <div
      class="text-xs py-1 pl-4 absolute bottom-0 left-0"
      class:error
      class:text-gray-600={hint}
      transition:fly={transitionProps}
    >{showHint}</div>
  {/if}
</div>