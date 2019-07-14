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
  export let noUnderline = false;
  export let appendReverse = false;
  export let color = "primary";


  let labelDefault = `pt-4 absolute top-0 label-transition block pb-2 px-4 pointer-events-none cursor-text`;
  let inputDefault = `transition pb-2 pt-6 px-4 rounded-t text-black w-full`;
  let wrapperDefault = "mt-2 relative pb-6 text-gray-600" + ((select || autocomplete) ? " select" : "");
  let appendDefault = "absolute right-0 top-0 pb-2 pr-4 pt-4 pointer-events-none";

  export let add = "";
  export let remove = "";
  export let replace = "";

  const identity = i => i;

  export let inputBaseClasses = identity;
  export let labelBaseClasses = identity;
  export let wrapperBaseClasses = identity;
  export let appendBaseClasses = identity;

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
  let wrapperClasses = "";

  function toggleFocused() {
    focused = !focused;
  }

  $: showHint = error || (persistentHint ? hint : focused && hint);
  $: labelOnTop = placeholder || focused || value;

  $: {
    labelClasses = l
      .flush()
      .add(labelBaseClasses(labelDefault))
      .add(txt(), focused && !error)
      .add('label-top text-xs', labelOnTop)
      .remove('pt-4 pb-2 px-4 px-1 pt-0', labelOnTop && outlined)
      .add('ml-3 p-1 pt-0 mt-0 bg-white', labelOnTop && outlined)
      .get();
 
    inputClasses = i
      .flush()
      .add(inputBaseClasses(inputDefault))
      .remove('pt-6 pb-2', outlined)
      .add('border rounded bg-transparent py-4 transition', outlined)
      .add('border-error-500 caret-error-500', error)
      .add(border(), focused && !error)
      .add('border-gray-600', !error && !focused)
      .add('bg-gray-100', !outlined)
      .add('bg-gray-300', focused && !outlined)
      .add(add)
      .remove(remove)
      .replace(replace)
      .get();
    
    wrapperClasses = (new ClassBuilder())
      .add(wrapperBaseClasses(wrapperDefault))
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
  @apply pb-0 cursor-pointer;
  height: 3.5rem;
}
.label-transition {
  transition: font-size 0.05s, line-height 0.1s;
}
</style>

<svelte:window on:click={() => (select ? (focused = false) : null)} />

<div
  class={wrapperClasses}
>
  <div class="relative" class:text-error-500={error}>
    <label class={labelClasses}>
      {label}
    </label>

    <div class={appendBaseClasses(appendDefault)}>
      <slot name="append" />
    </div>

    {#if append}
      <div class={appendBaseClasses(appendDefault)}>
        <Icon
          reverse={appendReverse}
          c={focused ? txt() : 'text-gray-700'}>
          {append}
        </Icon>
      </div>
    {/if}

    {#if (!textarea && !select) || autocomplete}
      <input
        aria-label={label}
        class={inputClasses}
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
      class:hidden={noUnderline || outlined}>
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