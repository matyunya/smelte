<script>
  import { ClassBuilder } from "../../utils/classes.js";
  import { createEventDispatcher } from "svelte";
  import Icon from "../Icon";
  import createRipple from "../Ripple/ripple.js";

  const classesDefault = "focus:bg-gray-50 dark-focus:bg-gray-700 hover:bg-gray-transDark relative overflow-hidden duration-100 p-4 cursor-pointer text-gray-700 dark:text-gray-100 flex items-center z-10";
  const selectedClassesDefault = "bg-gray-200 dark:bg-primary-transLight";
  const subheadingClassesDefault = "text-gray-600 p-0 text-sm";
  const disabledClassesDefault = "text-gray-600";

  export let icon = "";
  export let id = "";
  export let value = "";
  export let text = "";
  export let subheading = "";
  export let disabled = false;
  export let dense = false;
  export let selected = false;
  export let tabindex = null;
  export let selectedClasses = selectedClassesDefault;
  export let subheadingClasses = subheadingClassesDefault;
  export let disabledClasses = disabledClassesDefault;

  export let to = "";
  export const item = null;
  export const items = [];
  export const level = null;

  const ripple = createRipple();
  const dispatch = createEventDispatcher();

  function change() {
    if (disabled) return;
    value = id;
    dispatch('change', id, to);
  }

  export let classes = classesDefault;
  const cb = new ClassBuilder(classes, classesDefault);

  $: c = cb
    .flush()
    .add(selectedClasses, selected, selectedClassesDefault)
    .add("py-2", dense)
    .add(disabledClasses, disabled)
    .add($$props.class)
    .get();
</script>

<li
  use:ripple
  class={c}
  {tabindex}
  on:keypress={change}
  on:click={change}
  on:click>
  {#if icon}
    <Icon
      class="pr-6"
      small={dense}
    >
      {icon}
    </Icon>
  {/if}

  <div class="flex flex-col p-0">
    <div class={$$props.class}>
      <slot>{text}</slot>
    </div>
    {#if subheading}
      <div class={subheadingClasses}>{subheading}</div>
    {/if}
  </div>
</li>
