<script>
  import Code from "docs/Code.svelte";
</script>

<h2>Hi</h2>
<p class="pb-4">
  Smelte is a collection of
  <a class="a" href="https://material.io/">Material design</a>
  components for Svelte built with
  <a class="a" href="https://tailwindcss.com">Tailwind CSS.</a>
  The project was initially inspired by
  <a class="a" href="https://vuetifyjs.com">Vuetify</a>
  , but comes at much lower price. All of this website is only a fraction of
  both JS (670 vs 30 Kb) and CSS (110 vs 10 Kb) payloads of even the most
  <a class="a" href="https://vuetifyjs.com/en/examples/layouts/baseline">
    basic Vuetify example layout
  </a>
  ), and of course has dark mode.
</p>

<p class="pb-4">
  Tailwind resets much of CSS whereas Smelte tries to bring sensible Material
  design defaults in
  <a class="a" href="/typography">typography</a>
  and
  <a class="a" href="/color">color.</a>
</p>

<p>
  Hit up the components
  <a class="a" href="/components">introduction</a>
  or please join our
  <a class="a" href="https://discord.gg/xHGvqj">Discord chat</a>
  for a lovely chat!
</p>

<h4 id="installation" class="mt-8 pb-4">Installation</h4>
To get you started you need to add Smelte to your dependencies with your
favorite package manager.
<Code code="$ npm install smelte or yarn install smelte" />
Then you need to add Smelte Rollup plugin (Webpack is on its way).
<Code
  code={`const smelte = require("smelte/rollup-plugin-smelte");
plugins = [
  ...your plugins,
  smelte({
    purge: production,
    output: "public/global.css" // it defaults to static/global.css which is probably what you expect in Sapper
  }),
]`} />

Then you should add Tailwind utilites CSS in your app component.
<Code code={`import "smelte/src/tailwind.css";`} />

You might also need to include material icons in your template's if you use any:
<Code
  code={`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`} />
Or ship them along with Roboto if you would like to use default material font:
<Code
  code={`<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons&display=swap"
  rel="stylesheet"
/>`} />
And you're good to go and have all the Tailwind CSS power all to yourself! For
treeshaking to work it is recommended to import each component on its own like
this:
<Code
  code={`import Button from "smelte/src/components/Button";
import Treeview from "smelte/src/components/Treeview";`} />
