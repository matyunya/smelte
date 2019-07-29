<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "../Icon";
  import Ripple from "../Ripple";

  let className = "";
  export {className as class};
  export let value = false;
  export let label = "";
  export let color = "primary";
  export let disabled = false;
  export let wrapperClasses = "inline-flex items-center mb-2 cursor-pointer z-10";

  const dispatch = createEventDispatcher();

  function check() {
    if (disabled) return;

    value = !value;
    dispatch('change', value);
  }
</script>

<div class={className}>
  <div class={wrapperClasses} on:click={check}>
    <input bind:checked={value} class="hidden" type="checkbox" on:change />
    <div class="relative w-auto h-auto z-0">
      <Ripple color={value && !disabled ? color : 'gray'}>
        {#if value}
          <Icon class={disabled ? 'text-gray-500' : `text-${color}-500`}>check_box</Icon>
        {:else}
          <Icon class={disabled ? 'text-gray-500' : 'text-gray-600'}>
            check_box_outline_blank
          </Icon>
        {/if}
      </Ripple>
    </div>
    <label
      aria-hidden="true"
      class="pl-2 cursor-pointer"
      class:text-gray-500={disabled}
      class:text-gray-700={!disabled}>
      {label}
    </label>
  </div>
</div>