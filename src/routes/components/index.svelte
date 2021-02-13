<script>
  import Button from "components/Button";
  import Code from "docs/Code.svelte";
</script>

<h4 class="pb-8">Smelte components</h4>

<p>
  Smelte components are built almost exclusively using Tailwind's utility classes
  keeping CSS bundle size as minimal as possible. UI frameworks are notorious for
  being hard to customize and we're still looking for appropriate solution given
  utility-first nature of Tailwind. So for the most part components expose all of
  their elements' classes as strings like, for instance, Button component has
  "disabledClasses" prop defaulting to<br>
  <span class="code-inline">bg-gray-300 text-gray-500 dark:bg-dark-400 pointer-events-none hover:bg-gray-300 cursor-default</span>
</p>

<Code code="<Button disabled>Disabled button</Button>" />

<div class="pt-8 pb-16">
  <Button disabled>Disabled button</Button>
</div>

<p>
  Say you need to adjust that background color, you may the "disabledClasses" prop<br>
  <span class="code-inline">bg-gray-100 text-gray-700 dark:bg-dark-100 pointer-events-none hover:bg-gray-300 cursor-default</span>
</p>

<Code code={`<Button
  disabledClasses="bg-gray-100 text-gray-500 dark:bg-dark-100 pointer-events-none hover:bg-gray-300 cursor-default"
  disabled>Disabled button
</Button>`} />

<div class="pt-8 pb-16">
  <Button
    disabledClasses="bg-gray-100 text-gray-500 dark:bg-dark-100 pointer-events-none hover:bg-gray-300 cursor-default"
    disabled>Disabled button
  </Button>
</div>

<p>
  This feels bulky to say the least but may still be the case if you need to modify those classes heavily.
  Same prop also allows you to pass a function which accepts the same string as argument and returns your modified classes string:
</p>

<Code code={`<Button
  disabledClasses={i => i.replace(/(3|4)00/g, "100")}
  disabled>Disabled button
</Button>`} />

<div class="pt-8 pb-16">
  <Button
    disabledClasses={i => i.replace(/(3|4)00/g, "100")}
    disabled>Disabled button
  </Button>
</div>

<p>
  Using this approach Smelte is also able to imply which classes are actually being used
  even dynamically which helps Purge CSS to get rid of unused classes at build time automatically.
  Still it feels like this is a rather naive way of customizing components so please create an
  <a href="https://github.com/matyunya/smelte/issues/new">issue</a> on Github or <a href="mailto:matyunya@gmail.com">contact me directly</a>
  if you have an idea how to improve on this.
</p>
