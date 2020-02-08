<script>
  import filterProps from "../../utils/filter-props";

  const props = filterProps([], $$props);
</script>

<style>
.label-top {
  line-height: 0.05;
}
.label-transition {
  transition: font-size 0.05s, line-height 0.1s;
}
</style>

<label class={$$props.class} {...props}>
  <slot />
</label>