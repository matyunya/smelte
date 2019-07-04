<script>
  import { fade } from "svelte/transition";
  import { quadOut, quadIn } from "svelte/easing";

  const inProps = { duration: 200, easing: quadIn };
  const outProps = { duration: 200, easing: quadOut };
</script>

<div
  class="opacity-50 bg-black fixed top-0 left-0 z-10 w-full h-screen"
  in:fade={inProps}
  out:fade={outProps}
  on:click />
