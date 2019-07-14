<script>
  import RadioButton from "./RadioButton.svelte";

  export let items = [];
  export let selected = "";
  export let name = "";
  export let disabled = false;
  export let color = "primary";
  export let wrapperClasses = "flex flex-col mb-4 cursor-pointer";
  export let buttonClasses = "inline-flex block items-center mb-2 cursor-pointer z-0";
</script>

<div class={wrapperClasses}>
  {#each items as item}
    <slot {item}>
      <RadioButton
        bind:selected
        wrapperClasses={buttonClasses}
        {...item}
        {color}
        name={name || `radio-${Math.random()}`}
        {disabled} />
    </slot>
  {/each}
</div>
