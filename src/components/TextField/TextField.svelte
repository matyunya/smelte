<script>
  import { fly } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import utils, { ClassBuilder } from "../../utils/classes.js";

  import Icon from "../Icon";
  export let c = "";
  export let outlined = false;
  export let value = null;
  export let label = "";
  export let placeholder = "";
  export let hint = "";
  export let error = false;
  export let append = "";
  export let persistentHint = false;
  export let textarea = false;
  export let rows = 5;
  export let select = false;
  export let autocomplete = false;
  export let color = "primary";

  export let labelBaseClasses = `pt-4 absolute top-0 label-transition block pb-2 px-4 pointer-events-none cursor-text`;
  export let inputBaseClasses = `transition pb-2 pt-6 px-4 rounded-t text-black w-full`;

  const {
    bg,
    border,
    txt,
    caret,
  } = utils(color);

  const l = new ClassBuilder();
  const i = new ClassBuilder();

  let focused = false;
  let labelClasses = "";
  let inputClasses = "";

  function toggleFocused() {
    focused = !focused;
  }

  $: showHint = error || (persistentHint ? hint : focused && hint);
  $: labelOnTop = placeholder || focused || value;

  $: {
    labelClasses = l
      .flush()
      .add(labelBaseClasses)
      .add(txt(), focused && !error)
      .add('label-top text-xs', labelOnTop)
      .remove('pt-4 pb-2 px-4 px-1 pt-0', labelOnTop && outlined)
      .add('ml-3 p-1 pt-0 mt-0 bg-white', labelOnTop && outlined)
      .get();
 
    inputClasses = i
      .flush()
      .add(inputBaseClasses)
      .remove('pt-6 pb-2', outlined)
      .add('border rounded bg-transparent py-4 transition', outlined)
      .add('border-error-500', error)
      .add(border(), focused && !error)
      .add('border-gray-600', !error && !focused)
      .add('bg-gray-100', !outlined)
      .get();
  }
</script>

<style>
.line {
  height: 1px;
}

.label-top {
  line-height: 0.05;
}
.select {
  @apply pb-0;
  height: 3.5rem;
}
.label-transition {
  transition: font-size 0.05s, line-height 0.1s;
}
</style>

<svelte:window on:click={() => (select ? (focused = false) : null)} />

<div
  class="mt-2 relative pb-6 text-gray-600"
  class:select={select || autocomplete}
>
  <div class="relative" class:text-error-500={error}>
    <label class={labelClasses}>
      {label}
    </label>

    {#if append}
      <div class="absolute right-0 top-0 pb-2 pr-4 pt-4">
        <Icon c={focused ? txt() : 'text-gray-700'}>
          {append}
        </Icon>
      </div>
    {/if}

    {#if (!textarea && !select) || autocomplete}
      <input
        aria-label={label}
        class={inputClasses}
        class:bg-gray-300={focused && !outlined}
        class:cursor-pointer={select}
        on:focus={toggleFocused}
        on:blur={toggleFocused}
        bind:value
        on:change
        on:input
        on:click
        on:focus
        placeholder={!value ? placeholder : ''} />
    {:else if textarea && !select}
      <textarea
        {rows}
        aria-label={label}
        class={inputClasses}
        class:bg-gray-300={focused && !outlined}
        class:caret-error-500={error}
        on:change
        on:input
        on:click
        on:focus
        bind:value
        on:focus={toggleFocused}
        on:blur={toggleFocused}
        placeholder={!value ? placeholder : ''} />
    {:else if select && !autocomplete}
      <div
        class="select {inputClasses}"
        class:bg-gray-300={focused && !outlined}
        class:cursor-pointer={select}
        on:click={toggleFocused}
        on:change
        on:input
        on:click
        on:focus>
        {value}
      </div>
    {/if}

    <div
      class="line absolute bottom-0 left-0 w-full bg-gray-600"
      class:hidden={outlined}>
      <div
        class="mx-auto w-0 {focused ? bg() : ""}"
        class:w-full={focused || error}
        class:bg-error-500={error}
        style="height: 2px; transition: width .2s ease" />
    </div>
  </div>

  {#if showHint}
    <div
      class="text-xs py-1 pl-4 absolute bottom-0 left-0"
      class:text-gray-600={hint}
      class:text-error-500={error}
      transition:fly={{ y: -10, duration: 100, easing: quadOut }}>
      {showHint}
    </div>
  {/if}
</div>
