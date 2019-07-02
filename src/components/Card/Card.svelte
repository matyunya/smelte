<script>
  export let hover = true;

  export let c = '';
</script>

<div
  class="{c}
    {hover ? 'elevation-1 hover:elevation-8' : ''}
    rounded inline-flex flex-col  overflow-hidden
  ">
  <slot name="title" />
  <slot name="media" />
  <slot />
  <slot name="text" />
  <slot name="actions" />
</div>