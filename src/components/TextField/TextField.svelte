<script>
  import { createEventDispatcher } from "svelte";
  import filterProps from "../../utils/filter-props.js";
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  import Icon from "../Icon";
  import Label from "./Label.svelte";
  import Hint from "./Hint.svelte";
  import Underline from "./Underline.svelte";

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
  export let bgColor = "white";
  export let disabled = false;
  export let focused = false;

  export let labelProps;
  export let hintProps;
  export let underlineProps;

  function toggleFocused() {
    focused = !focused;
  }

  $: showHint = error || (persistentHint ? hint : focused && hint);
  $: labelOnTop = placeholder || focused || value;

  const props = filterProps([], $$props);

  const dispatch = createEventDispatcher();

  const store = writable(config);

  $: smelte = smelter($store, {
    outlined,
    value,
    label,
    placeholder,
    hint,
    error,
    append,
    prepend,
    persistentHint,
    textarea,
    rows,
    select,
    autocomplete,
    noUnderline,
    appendReverse,
    prependReverse,
    color,
    bgColor,
    disabled,
    focused,
    showHint,
    labelOnTop,
    ...$$props,
  });
</script>

<div class={smelte.wrapper.class}>
  <slot name="label">
    <Label
      class={smelte.label.class}
      {...labelProps}
    >{label}</Label>
  </slot>

  {#if (!textarea && !select) || autocomplete}
    <input
      aria-label={label}
      class={smelte.root.class}
      on:focus={toggleFocused}
      on:blur={toggleFocused}
      on:blur
      bind:value
      on:change
      on:input
      {disabled}
      on:click
      on:keydown
      on:keypress
      on:focus
      {...props}
      placeholder={!value ? placeholder : ""} />
  {:else if textarea && !select}
    <textarea
      {rows}
      aria-label={label}
      class={smelte.root.class}
      on:change
      on:input
      {disabled}
      on:click
      on:keydown
      on:keypress
      on:focus
      on:blur
      bind:value
      {...props}
      on:focus={toggleFocused}
      on:blur={toggleFocused}
      placeholder={!value ? placeholder : ""} />
  {:else if select && !autocomplete}
    <input
      readonly
      class="{smelte.root.class}"
      on:change
      on:input
      {disabled}
      on:click
      on:keydown
      on:keypress
      on:blur
      on:focus
      {value} />
  {/if}

  {#if prepend}
    <div
      class={smelte.prepend.class}
      on:click={() => dispatch("click-prepend")}
    >
      <slot name="prepend">
        <Icon
          reverse={prependReverse}
          class={smelte.icon.class}
        >
          {prepend}
        </Icon>
      </slot>
    </div>
  {/if}

  {#if append}
    <div
      class={smelte.append.class}
      on:click={() => dispatch("click-append")}
    >
      <slot name="append">
        <Icon
          reverse={appendReverse}
          class={smelte.icon.class}
        >
          {append}
        </Icon>
      </slot>
    </div>
  {/if}

  <Underline
    {outlined}
    {noUnderline}
    {...underlineProps}
    class={smelte.underline.class}
    wrapperClass={smelte.underlineWrapper.class} />

  {#if showHint}
    <Hint
      class={smelte.hint.class}
      {...hintProps}
      {error}
      {hint} />
  {/if}
</div>
