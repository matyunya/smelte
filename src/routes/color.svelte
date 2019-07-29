<script>
  import { TextField } from "smelte";
  import Code from "components/Code";
</script>

<h4 class="pb-8">Color helper classes</h4>
<p>
  Right now Smelte adds very little to what Tailwind
  <a class="a" href="https://tailwindcss.com/docs/background-color/">has</a>
  <a class="a" href="https://tailwindcss.com/docs/text-color/">to offer</a>
  dealing with color except for porting the Material design color
  <a
    class="a"
    href="https://material.io/design/color/#tools-for-picking-colors">
    palette
  </a>
  and adding a few extra utilities like caret color on inputs or colored ripple
  animation effect. Colors themselves are configured in
  <a
    class="a"
    href="https://github.com/matyunya/smelte/blob/master/tailwind.config.js">
    tailwind.config.js
  </a>
  .
</p>

<h5 class="mt-6 mb-2">Background</h5>

<span class="body-2">.bg-{'{color}-{variant}'}</span>
gives element appropriate background color:
<Code
  code={'<div class="bg-deep-purple-500 text-white p-4">This div is deep purple.</div>'} />
<div class="bg-deep-purple-500 text-white p-4">This div is deep purple.</div>

<h5 class="mt-6 mb-2">Text</h5>

<span class="body-2">.text-{'{color}-{variant}'}</span>
changes text color accordingly:
<Code code={'<h4 class="text-lime-500">This header is lime</h4>'} />
<h4 class="text-lime-500">This header is lime</h4>

<h5 class="mt-6 mb-2">Border</h5>
Same principle applies to border, but there are also border width
<span class="body-2">border-{'{n}'}</span>
and type
<span class="body-2">border-{'{solid|dashed|dotted|none}'}</span>
helpers.
<Code
  code={'<div class="border-2 border-amber-600 p-4">This div has amber border</div>'} />

<div class="border-2 border-amber-600 p-4">This div has amber border</div>