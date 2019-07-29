<script>
  import Ripple from "../Ripple";

  export let value = false;
  export let label = "";
  export let color = "primary";
  export let disabled = false;
  export let wrapperClasses = "inline-flex items-center mb-2 cursor-pointer z-10";
  export let trackClasses = "relative w-10 h-auto z-0 rounded-full overflow-visible flex items-center justify-center";
  export let thumbClasses = "rounded-full p-2 w-5 h-5 absolute elevation-3 transition-fast";
  export let labelClasses = "pl-2 cursor-pointer";

  function check() {
    if (disabled) return;

    value = !value;
  }
</script>

<div class={wrapperClasses} on:click={check}>
  <input bind:value class="hidden" type="checkbox" on:change />
  <div
    class={trackClasses}
    class:bg-gray-300={!value}
    class:bg-primary-200={value}>
    <div class="w-full h-full absolute" />
    <Ripple color={value && !disabled ? color : 'gray'} noHover>
      <div
        class={thumbClasses}
        class:bg-white={!value}
        class:bg-primary-400={value}
        class:left-0={!value}
        style={value ? 'left: 1.25rem' : ''} />
    </Ripple>
  </div>
  <label
    aria-hidden="true"
    class={labelClasses}
    class:text-gray-500={disabled}
    class:text-gray-700={!disabled}>
    {label}
  </label>
</div>
