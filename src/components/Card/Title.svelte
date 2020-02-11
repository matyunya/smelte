<script>
  import { writable } from "svelte/store";
  import { title as titleConfig } from "./config";
  import smelter from "../../utils/smelter";

  const store = writable(titleConfig);

  export let title = "";
  export let subheader = "";
  export let avatar = "";

  $: smelte = smelter($store, $$props);
</script>

<div class={smelte.root.class}>
  <div>
    <img
      class="rounded-full"
      width="44"
      height="44"
      src={avatar}
      alt="avatar"
      class:hidden={!avatar} />
  </div>
  <div class="pl-4 py-2">
    <slot name="title">
      {#if title}
        <div class="font-medium text-lg">{title}</div>
      {/if}
    </slot>
    <slot name="subheader">
      {#if subheader}
        <div class="text-sm text-gray-600 pt-0">
          {subheader}
        </div>
      {/if}
    </slot>
  </div>
</div>
