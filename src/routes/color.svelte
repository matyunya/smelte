<script>
  import TextField from 'components/TextField';
</script>

<h4 class="pb-8">Color helper classes</h4>
<p>
  Right now Smelte adds very little to what Tailwind 
  <a class="a" href="https://tailwindcss.com/docs/background-color/">has</a>
  <a class="a" href="https://tailwindcss.com/docs/text-color/">to offer</a> dealing with color except 
  for porting the Material design color
  <a class="a" href="https://material.io/design/color/#tools-for-picking-colors">palette</a> 
  and adding a few extra utilities like caret color on inputs or colored ripple animation effect.
  Colors themselves are configured in <a class="a" href="https://github.com/matyunya/smelte/blob/master/tailwind.config.js">tailwind.config.js</a>.
</p>

<h5 class="mt-6 mb-2">Background</h5>

<span class="body-2">.bg-{'{color}-{variant}'}</span> gives element appropriate background color:
<code class="block my-4 bg-gray-200 p-8">
  {'<div class="bg-deep-purple-500 text-white p-4">This div is deep purple.</div>'}
</code>
<div class="bg-deep-purple-500 text-white p-4">This div is deep purple.</div>

<h5 class="mt-6 mb-2">Text</h5>

<span class="body-2">.text-{'{color}-{variant}'}</span> changes text color accordingly:
<code class="block my-4 bg-gray-200 p-8">
  {'<h4 class="text-lime-500">This header is lime</h4>'}
</code>
<h4 class="text-lime-500">This header is lime</h4>

<h5 class="mt-6 mb-2">Border</h5>
Same principle applies to border, but there are also border width <span class="body-2">border-{'{n}'}</span>
and type <span class="body-2">border-{'{solid|dashed|dotted|none}'}</span> helpers.

<code class="block my-4 bg-gray-200 p-8">
  {'<div class="border-2 border-amber-600 p-4">This div has amber border</div>'}
</code>

<div class="border-2 border-amber-600 p-4">This div has amber border</div>

<h5 class="mt-6 mb-2">Ripple</h5>
This is css only version of the infamous ripple effect taken from
<a class="a" href="https://codeburst.io/create-a-material-design-ripple-effect-without-js-9d3cbee25b3e">this great blog</a>
and turned into a Tailwind utility <span class="body-2">.ripple-{'{color}'}</span>
<code class="block my-4 bg-gray-200 p-8">
  {'<div class="text-center cursor-pointer w-64 p-4 border-pink-200 border-2 ripple-pink">I ripple pink</div>'}
</code>

<div class="text-center cursor-pointer w-64 p-4 border-pink-200 border-2 ripple-pink">I ripple pink</div>