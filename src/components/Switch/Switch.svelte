<script>
  import { Ripple } from "components/Util";

  export let value = false;
  export let label = "";
  export let color = "text-primary-500";
  export let disabled = false;

  function check() {
    if (disabled) return;

    value = !value;
  }
</script>

<div class="inline-flex items-center mb-2 cursor-pointer z-10" on:click={check}>
  <input bind:value class="hidden" type="checkbox" on:change />
  <div
    class="relative w-10 h-auto z-0 rounded-full overflow-visible flex
    items-center justify-center"
    class:bg-gray-300={!value}
    class:bg-primary-200={value}>
    <Ripple color={value && !disabled ? 'primary' : 'gray'}>
      <div class="w-full h-full absolute" />
    </Ripple>
    <div
      class="rounded-full p-2 w-5 h-5 absolute elevation-3 transition-fast"
      class:bg-white={!value}
      class:bg-primary-400={value}
      class:left-0={!value}
      style={value ? 'left: 1.25rem' : ''} />
  </div>
  <label
    aria-hidden="true"
    class="pl-2 cursor-pointer"
    class:text-gray-500={disabled}
    class:text-gray-700={!disabled}>
    {label}
  </label>
</div>
