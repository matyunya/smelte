<script>
  import Code from "docs/Code.svelte";
</script>

<h4 class="pb-8">Dark mode</h4>
<p>
  Smelte uses css pseudo-class variant
  <a class="a" href="https://tailwindcss.com/docs/configuring-variants/">
    feature
  </a>
  of Tailwind to enable dark mode.
</p>

<p>
  If you don't need dark mode at all, you can pass
  <span class="code-inline">dark-mode: false</span>
  to the smelte-rollup-plugin and it will generate no extra CSS.
</p>
