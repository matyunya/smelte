<script>
  import filterProps from "../../utils/filter-props";

  const props = filterProps([], $$props);
</script>

<style>
.label-top {
  line-height: 0.01;
  font-size: 0.7rem;
}
.label-transition {
  transition: font-size 0.05s, line-height 0.1s;
}

:global(label.text-xs) {
  font-size: 0.7rem;
}

:global(.mode-dense) .label-top {
  display:none;
}
</style>

<label class={$$props.class} {...props}>
  <slot />
</label>
