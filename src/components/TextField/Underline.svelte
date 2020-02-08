<script>
  import filterProps from "../../utils/filter-props.js";

  const props = filterProps([
    'focused',
    'error',
    'outlined',
    'labelOnTop',
    'prepend',
    'bgcolor',
    'color'
  ], $$props);
</script>

<style>
.line {
  height: 1px;
}
</style>

<div
  class={$$props.wrapperClass}
  class:hidden={$$props.noUnderline || $$props.outlined}>
  <div
    class={$$props.class}
    style="height: 2px; transition: width .2s ease" />
</div>