<script>
  import RadioButton from "./RadioButton.svelte";

  export let items = [];
  export let selected = "";
  export let name = "";
  export let disabled = false;
</script>

<div class="flex flex-col mb-4 cursor-pointer">
  {#each items as item}
    <slot {item}>
      <RadioButton
        bind:selected
        {...item}
        name={name || `radio-${Math.random()}`}
        {disabled} />
    </slot>
  {/each}
</div>
