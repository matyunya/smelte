<script>
  export let color = "bg-primary-300";
  export let c = "";
  export let classes = "fixed w-full top-0 left-0 z-30 flex-wrap flex p-0 h-16 items-center elevation-3";
</script>

<header
  class="{c} {color} {classes}">
  <slot />
</header>
