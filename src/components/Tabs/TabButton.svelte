<script>
  import Icon from "../Icon";

  export let icon = "";
  export let id = "";
  export let text = "";
  export let to = "";
  export let selected = "";
  export let color = "primary-500";

  $: isSelected = selected === id;

  const classes =
    "text-center w-40 p-4 cursor-pointer flex mx-auto items-center opacity-75 text-sm h-full";
</script>

{#if to}
  <a
    href={to}
    class="{classes} ripple-{color} text-white {isSelected ? `text-${color}` : ''}"
    on:click
    class:uppercase={icon}>
    <div class="flex flex-col items-center content-center mx-auto">
      {#if icon}
        <Icon c="mb-1" color={isSelected ? `text-${color}` : ''}>{icon}</Icon>
      {/if}

      <div>
        <slot>{text}</slot>
      </div>
    </div>
  </a>
{:else}
  <li
    class="{classes} ripple-{color} text-white {isSelected ? `text-${color}` : ''}"
    on:click={() => {
      selected = id;
    }}
    on:click
    class:uppercase={icon}>
    <div class="flex flex-col items-center content-center mx-auto">
      {#if icon}
        <Icon c="mb-1" color={isSelected ? `text-${color}` : ''}>{icon}</Icon>
      {/if}

      <div>
        <slot>{text}</slot>
      </div>
    </div>
  </li>
{/if}
