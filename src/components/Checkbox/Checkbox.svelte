<script>
  import Label from "./Label.svelte";
  import { createEventDispatcher } from "svelte";
  import { ClassBuilder } from "../../utils/classes.js";

  const classesDefault = "inline-flex items-center mb-2 cursor-pointer z-10";

  import Icon from "../Icon";
  import Ripple from "../Ripple";

  export let value = "";
  export let label = "";
  export let color = "primary";
  export let checked = false;
  export let disabled = false;
  export let classes = classesDefault;
  export let labelClasses = i => i;
  export let group = [];

  // for bind:group
  //keep track of group array state;
  let groupstate = group.includes(value);

  $: if (value && !disabled) {
    const groupHasValue = group.includes(value);

    // check if group array has changed, or something else
    if (groupHasValue === groupstate) {
      // add to group array if checked
      if (checked && !groupHasValue) {
        group = group.concat([value]);
        groupstate = true;
        // remove from group array if unchecked
      } else if (!checked && groupHasValue) {
        group = [...group.filter(v => v !== value)];
        groupstate = false;
      }
    } else {
      // group array has changed. Click box
      groupstate = groupHasValue;
      check();
    }
  }
  const dispatch = createEventDispatcher();

  function check() {
    if (disabled) return;

    checked = !checked;
    dispatch("change", checked);
  }

  $: rippleColor = checked && !disabled ? color : "gray";

  const cb = new ClassBuilder(classes, classesDefault);
  $: c = cb
    .flush()
    .add(classes, true, classesDefault)
    .add($$props.class)
    .get();
</script>

<div class={$$props.class}>
  <div class={c} on:click={check}>
    <input bind:checked class="hidden" type="checkbox" on:change {value} />
    <div class="relative w-auto h-auto z-0">
      <Ripple color={rippleColor}>
        {#if checked}
          <Icon
            class={disabled ? 'text-gray-500 dark:text-gray-600' : `text-${color}-500 dark:text-${color}-100`}>
            check_box
          </Icon>
        {:else}
          <Icon
            class={disabled ? 'text-gray-500 dark:text-gray-600' : 'text-gray-600 dark:text-gray-300'}>
            check_box_outline_blank
          </Icon>
        {/if}
      </Ripple>
    </div>
    <slot name="label">
      <Label {disabled} {label} class={labelClasses} />
    </slot>
  </div>
</div>
