<script>
  import { fly } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import utils, { ClassBuilder, filterProps } from "../../utils/classes.js";

  import Icon from "../Icon";

  let className = "";
  export {className as class};
  export let outlined = false;
  export let value = null;
  export let label = "";
  export let placeholder = "";
  export let hint = "";
  export let error = false;
  export let append = "";
  export let prepend = "";
  export let persistentHint = false;
  export let textarea = false;
  export let rows = 5;
  export let select = false;
  export let autocomplete = false;
  export let noUnderline = false;
  export let appendReverse = false;
  export let prependReverse = false;
  export let color = "primary";
  // for outlined button label
  export let bgColor = "white";
  export let iconClass = "";

  let labelDefault = `pt-4 absolute top-0 label-transition block pb-2 px-4 pointer-events-none cursor-text`;
  let inputDefault = `transition pb-2 pt-6 px-4 rounded-t text-black w-full`;
  let wrapperDefault = "mt-2 relative pb-6 text-gray-600" + ((select || autocomplete) ? " select" : "");
  let appendDefault = "absolute right-0 top-0 pb-2 pr-4 pt-4 pointer-events-none text-gray-700";
  let prependDefault = "absolute left-0 top-0 pointer-events-none text-xs text-gray-700";

  export let add = "";
  export let remove = "";
  export let replace = "";

  export let labelClasses = labelDefault;
  export let inputClasses = inputDefault;
  export let wrapperClasses = wrapperDefault;
  export let appendClasses = appendDefault;
  export let prependClasses = prependDefault;

  const {
    bg,
    border,
    txt,
    caret,
  } = utils(color);

  const l = new ClassBuilder(labelClasses, labelDefault);
  const i = new ClassBuilder(inputClasses, inputDefault);
  const w = new ClassBuilder(wrapperClasses, wrapperDefault);
  const a = new ClassBuilder(appendClasses, appendDefault);
  const p = new ClassBuilder(prependClasses, prependDefault);

  let focused = false;
  let lClasses = "";
  let iClasses = "";
  let wClasses = "";
  let aClasses = "";
  let pClasses = "";

  function toggleFocused() {
    focused = !focused;
  }

  $: showHint = error || (persistentHint ? hint : focused && hint);
  $: labelOnTop = placeholder || focused || value;

  $: lClasses = l
      .flush()
      .add(txt(), focused && !error)
      .add('label-top text-xs', labelOnTop)
      .remove('pt-4 pb-2 px-4 px-1 pt-0', labelOnTop && outlined)
      .add(`ml-3 p-1 pt-0 mt-0 bg-${bgColor}`, labelOnTop && outlined)
      .remove('px-4', prepend)
      .add('pr-4 pl-6', prepend)
      .get();

  $: iClasses = i
      .flush()
      .add(className)
      .remove('pt-6 pb-2', outlined)
      .add('border rounded bg-transparent py-4 transition', outlined)
      .add('border-error-500 caret-error-500', error)
      .remove(caret(), error)
      .add(caret(), !error)
      .add(border(), focused && !error)
      .add('border-gray-600', !error && !focused)
      .add('bg-gray-100', !outlined)
      .add('bg-gray-300', focused && !outlined)
      .remove('px-4', prepend)
      .add('pr-4 pl-6', prepend)
      .add(add)
      .remove(remove)
      .replace(replace)
      .get();
    
  $: wrapperClasses, wClasses = (new ClassBuilder(wrapperClasses, wrapperDefault)).get();
  $: appendClasses, aClasses = (new ClassBuilder(appendClasses, appendDefault)).get();
  $: prependClasses, pClasses = (new ClassBuilder(prependClasses, prependDefault)).get();

  const props = filterProps([
    'outlined',
    'label',
    'placeholder',
    'hint',
    'error',
    'append',
    'prepend',
    'persistentHint',
    'textarea',
    'rows',
    'select',
    'autocomplete',
    'noUnderline',
    'appendReverse',
    'prependReverse',
    'color',
    'bgColor',
  ], $$props);
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

<div class={wClasses}>
  <div class="relative" class:text-error-500={error}>
    <label class={lClasses}>
      {label}
    </label>

    <div class={aClasses}>
      <slot name="append">
        <Icon
          reverse={appendReverse}
          class="{focused ? txt() : ''} {iconClass}"
        >
          {append}
        </Icon>
      </slot>
    </div>

    {#if (!textarea && !select) || autocomplete}
      <input
        aria-label={label}
        class={iClasses}
        on:focus={toggleFocused}
        on:blur={toggleFocused}
        on:blur
        bind:value
        on:change
        on:input
        on:click
        on:focus
        {...props}
        placeholder={!value ? placeholder : ''} />
    {:else if textarea && !select}
      <textarea
        {rows}
        aria-label={label}
        class={iClasses}
        on:change
        on:input
        on:click
        on:focus
        on:blur
        bind:value
        {...props}
        on:focus={toggleFocused}
        on:blur={toggleFocused}
        placeholder={!value ? placeholder : ''} />
    {:else if select && !autocomplete}
      <input
        readonly
        class="{iClasses}"
        on:click={toggleFocused}
        on:change
        on:input
        on:click
        on:blur
        on:focus
        {value} />
    {/if}

      <div class={pClasses}>
        <slot name="prepend">
        {#if prepend}
          <Icon
            reverse={prependReverse}
            class="{focused ? txt() : ''} {iconClass}"
          >
            {prepend}
          </Icon>
        {/if}
        </slot>
      </div>

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