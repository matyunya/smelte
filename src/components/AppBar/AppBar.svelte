<script>
  export let color = "bg-primary-300";
  export let c = "";
  export let classes = "fixed top-0 w-screen items-center flex-wrap flex left-0 z-30 p-0 h-16 elevation-3";
</script>

<header class="{c} {color} {classes}">
  <slot />
</header>
