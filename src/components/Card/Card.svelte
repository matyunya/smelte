<script>
  export let hover = true;
  let className = "";
  export {className as class};
  export let wrapperClasses = "rounded inline-flex flex-col overflow-hidden";
</script>

<div
  class="{className} {hover ? 'elevation-1 hover:elevation-8' : ""} {wrapperClasses}">
  <slot name="title" />
  <slot name="media" />
  <slot />
  <slot name="text" />
  <slot name="actions" />
</div>
