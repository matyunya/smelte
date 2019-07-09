<script>
  import RadioButton from "./RadioButton.svelte";

  export let items = [];
  export let selected = "";
  export let name = "";
  export let disabled = false;
  export let color = "primary";
  export let wrapperClasses = "flex flex-col mb-4 cursor-pointer";
</script>

<div class={wrapperClasses}>
  {#each items as item}
    <slot {item}>
      <RadioButton
        bind:selected
        {...item}
        {color}
        name={name || `radio-${Math.random()}`}
        {disabled} />
    </slot>
  {/each}
</div>
