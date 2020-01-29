<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { quadOut, quadIn } from "svelte/easing";
  import List from "../List";
  import TextField from "../TextField";
  import { ClassBuilder } from "../../utils/classes.js";

  const classesDefault = "cursor-pointer relative inline-flex";
  const listClassesDefault = "absolute w-full bottom-0";

  export let items = [];
  export let open = false;
  export let value = null;
  export let classes = classesDefault;
  export let listClasses = listClassesDefault;
  export let listProps = {};

  let className = "";
  export {className as class};
  
  const cb = new ClassBuilder(className);

  $: c = cb
    .flush()
    .add(classes, true, classesDefault)
    .add(className)
    .get();

  const lcb = new ClassBuilder(listClasses, listClassesDefault);

  $: l = lcb
      .flush()
      .add(listClasses, true, listClassesDefault)
      .get();

  const dispatch = createEventDispatcher();

  const inProps = { y: 10, duration: 200, easing: quadIn };
  const outProps = { y: -10, duration: 100, easing: quadOut, delay: 100 };
</script>

<svelte:window on:click={() => (open = false)} />

<div class={c} on:click|stopPropagation>
  <slot name="activator" />
  <slot name="menu">
    {#if open}
      <div class={l} in:fly={inProps} out:fly={outProps}>
        <List
          bind:value
          select
          dense
          {items}
          on:change
          on:change={() => open = false}
          {...listProps}
        />
      </div>
    {/if}
  </slot>
</div>