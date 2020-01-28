<script>
  import Icon from "../Icon";
  import Ripple from "../Ripple";

  export let selected = "";
  export let label = "";
  export let color = "primary";
  export let disabled = false;
  export let name = "";
  export let value = "";
  export let wrapperClasses = "inline-flex block items-center mb-2 cursor-pointer z-0";

  function select() {
    if (disabled) return;

    selected = value;
  }

  $: rippleColor = value && !disabled ? color : 'gray';
</script>

<div
  class={wrapperClasses}
  on:click={select}>
  <input
    aria-label={label}
    class="hidden"
    type="radio"
    role="radio"
    {name}
    selected={selected === value} />
  <div class="relative">
    <Ripple color={rippleColor}>
      {#if selected === value}
        <Icon class="text-{disabled ? 'gray' : color}-500">
          radio_button_checked
        </Icon>
      {:else}
        <Icon class={disabled ? 'text-gray-500 dark:text-gray-600' : 'text-gray-600'}>
          radio_button_unchecked
        </Icon>
      {/if}
    </Ripple>
  </div>
  <label
    aria-hidden="true"
    class="pl-2 cursor-pointer {disabled ? 'text-gray-500 dark:text-gray-600' : 'text-gray-700 dark:text-gray-300'}"
   >
    {label}
  </label>
</div>