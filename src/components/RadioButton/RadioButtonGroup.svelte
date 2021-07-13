<script>
  import RadioButton from "./RadioButton.svelte";
  import { ClassBuilder } from "../../utils/classes.js";

  const classesDefault = "flex flex-col mb-4 cursor-pointer";



  export let classes = classesDefault;

  export let items = [];
  export let selected = "";
  export let name = "";
  export let disabled = false;
  export let color = "primary";
  export let small = false;
  export let buttonClasses = "inline-flex block items-center mb-2 cursor-pointer z-0";

  const cb = new ClassBuilder(classes, classesDefault);

  $: c = cb.flush().add($$props.class).get();
</script>

<div class={c}>
  {#each items as item}
    <slot {item}>
      <RadioButton
        bind:selected
        class={buttonClasses}
        {...item}
        {color}
        {small}
        name={name || `radio-${Math.random()}`}
        {disabled} />
    </slot>
  {/each}
</div>
