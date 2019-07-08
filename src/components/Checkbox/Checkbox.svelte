<script>
  import Icon from "components/Icon";
  import { Ripple } from "components/Util";

  export let c = "";
  export let value = false;
  export let label = "";
  export let color = "text-primary-500";
  export let disabled = false;
  export let wrapperClasses = "inline-flex items-center mb-2 cursor-pointer z-10";

  function check() {
    if (disabled) return;

    value = !value;
  }
</script>

<div class="{c} {wrapperClasses}" on:click={check}>
  <input bind:checked={value} class="hidden" type="checkbox" on:change />
  <div class="relative w-auto h-auto z-0">
    <Ripple color={value && !disabled ? 'primary' : 'gray'}>
      {#if value}
        <Icon color={disabled ? 'text-gray-500' : color}>check_box</Icon>
      {:else}
        <Icon color={disabled ? 'text-gray-500' : 'text-gray-600'}>
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
