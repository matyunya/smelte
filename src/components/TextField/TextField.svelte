<script>
  import utils, { ClassBuilder, filterProps } from "../../utils/classes.js";

  import Icon from "../Icon";
  import Label from "./Label.svelte";
  import Hint from "./Hint.svelte";
  import Underline from "./Underline.svelte";

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

  let inputDefault = `transition pb-2 pt-6 px-4 rounded-t text-black w-full`;
  let wrapperDefault = "mt-2 mb-6 relative text-gray-600";
  let appendDefault = "absolute right-0 top-0 pb-2 pr-4 pt-4 pointer-events-none text-gray-700";
  let prependDefault = "absolute left-0 top-0 pointer-events-none text-xs text-gray-700";

  export let add = "";
  export let remove = "";
  export let replace = "";

  export let labelClasses = "";
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

  let classes = new ClassBuilder(inputClasses, inputDefault);

  export let extend = () => {};

  let focused = false;
  let iClasses = "";
  let wClasses = "";
  let aClasses = "";
  let pClasses = "";

  function toggleFocused() {
    focused = !focused;
  }

  $: showHint = error || (persistentHint ? hint : focused && hint);
  $: labelOnTop = placeholder || focused || value;

  $: iClasses = classes
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
      .extend(extend)
      .get();
    
  $: wrapperClasses, wClasses = (new ClassBuilder(wrapperClasses, wrapperDefault))
      .flush()
      .add('select', select || autocomplete)
      .replace({ 'text-gray-600': 'text-error-500' }, error)
      .get();

  $: appendClasses, aClasses = (new ClassBuilder(appendClasses, appendDefault))
      .get();
  $: prependClasses, pClasses = (new ClassBuilder(prependClasses, prependDefault))
      .get();

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
    'onClickAppend',
    'onClickPrepend',
  ], $$props);
</script>

<style>
.line {
  height: 1px;
}

.select {
  @apply pb-0 cursor-pointer;
  height: 3.5rem;
}
</style>

<svelte:window on:click={() => (select ? (focused = false) : null)} />

<div class={wClasses}>
  <slot name="label">
    <Label
      {labelOnTop}
      {focused}
      {error}
      {outlined}
      {prepend}
      {color}
      {bgColor}
    >{label}</Label>
  </slot>

  {#if append}
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
  {/if}

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

  {#if prepend}
    <div class={pClasses}>
      <slot name="prepend">
        <Icon
          reverse={prependReverse}
          class="{focused ? txt() : ''} {iconClass}"
        >
          {prepend}
        </Icon>
      </slot>
    </div>
  {/if}

  <Underline
    {noUnderline}
    {outlined}
    {focused}
    {error} />
  
  {#if showHint}
    <Hint
      {hint}
      {error}
      {hint} />
  {/if}
</div>