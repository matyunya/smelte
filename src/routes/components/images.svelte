<script>
  import Image from "components/Image";
  import Code from "docs/Code.svelte";

  import images from "examples/images.txt";

  const range = [...new Array(50)];
</script>

<p>
  Smelte includes convenience image component which is useful for lazyloading, but generally we recommend
  using <a class="a" href="https://github.com/matyunya/svelte-image">Svelte Image</a>.
</p>

<Code code={images} />

{#each range as _, i}
  <div class="my-8">
    <Image
      src="https://placeimg.com/{400 + i}/{300 + i}/animals"
      alt="Kitty {i}"
      height={400 + 1}
      width={300 + 1} />
  </div>
{/each}
