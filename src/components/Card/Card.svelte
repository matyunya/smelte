<script>
  export let hover = true;
  export let elevation = 1;
  export let hoverElevation = 8;
  export let wrapperClasses = "rounded inline-flex flex-col overflow-hidden transition";

  export {className as class};
  let className = "";
</script>

<div
  class="{className} {hover ? `elevation-${elevation} hover:elevation-${hoverElevation}` : ""} {wrapperClasses}">
  <slot name="title" />
  <slot name="media" />
  <slot />
  <slot name="text" />
  <slot name="actions" />
</div>
