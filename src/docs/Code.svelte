<script>
  import Prism from "prismjs";

  export let code = "";
  export let lang = "javascript";

  const html = Prism.highlight(code, Prism.languages[lang], "javascript");
</script>

<pre class="language-{lang} z-0">
  <code>
    {@html html}
  </code>
</pre>
