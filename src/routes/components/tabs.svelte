<script>
  import Waypoint from 'svelte-waypoint';
  import { fly, fade } from 'svelte/transition';
  import Tabs from 'components/Tabs';
  import Code from 'components/Code';

  let loading = false;

  function lazy(node, src) {
    const loaded = new Map();

		if (loaded.has(src)) {
			node.setAttribute('src', src);
		} else {
				const img = new Image();

				img.src = src;
        loading = true;
				img.onload = () => {
					loaded.set(src, img);
					node.setAttribute('src', src); 
          loading = false;
				};
		}

		return {
			destroy(){}
		};
	}
</script>

<p>
  Tabs can be used as navigation elements like the ones you see on the top right.
  You need to bind current pathname as value prop for active indicator to work correctly.
</p>


<Code code={`<script>
  import { stores } from '@sapper/app';
  const { page } = stores();

  const topMenu = [
      { to: '/components', text: 'Components' },
      { to: '/typography', text: 'Typography' },
      { to: '/color', text: 'Color' },
    ];

  // Or simply use document.location.pathname
  // if your app isn't sapper.
  $: path = $page.path;
</script>

<Tabs items={topMenu} bind:selected={path} />`}
/>


  <blockquote
    class="pl-8 mt-16 mb-10 border-l-8 border-primary-300 text-lg"
    cite="https://material.io/design/components/tabs.html#usage"
  >
    Tabs organize and allow navigation between groups of content that are related
    and at the same level of hierarchy.
  </blockquote>

<Waypoint once>
  <div class="elevation-1" in:fade>
    <Tabs
      selected="1"
      c="bg-black elevation-10 mt-6 text-white rounded-t-lg"
      color="yellow-a200"
      let:selected={selected}
      {loading}
      items={[
        { id: "1", text: 'Cats', icon: 'alarm_on' },
        { id: "2", text: 'Kittens', icon: 'bug_report' },
        { id: "3", text: 'Kitties', icon: 'eject' },
        { id: "4", text: 'Code', icon: 'tab' },
      ]}>
      <div
        slot="content"
        class="flex items-center content-center overflow-hidden w-full bg-gray-900"
        key={selected}
      >
          {#if selected === '1'}
            <img
              alt="kitten 1"
              class="w-full"
              src="http://placekitten.com/400/250"
              use:lazy={"http://placekitten.com/400/250"}
            >
          {:else if selected === '2'}
            <img
              alt="kitten 1"
              class="w-full"
              src="http://placekitten.com/400/250"
              use:lazy={"http://placekitten.com/399/250"}
            >
          {:else if selected === '3'}
            <img
              alt="kitten 3"
              class="w-full"
              src="http://placekitten.com/400/250"
              use:lazy={"http://placekitten.com/401/250"}
            >
          {:else if selected === '4'}
            <Code code={`<Tabs
  selected="1"
  c="bg-black elevation-10 mt-6 text-white rounded-t-lg"
  color="yellow-a200"
  let:selected={selected}
  {loading}
  items={[
    { id: "1", text: 'Cats', icon: 'alarm_on' },
    { id: "2", text: 'Kittens', icon: 'bug_report' },
    { id: "3", text: 'Kitties', icon: 'eject' },
    { id: "3", text: 'Kitty code', icon: 'eject' },
  ]}>
  <div
    slot="content"
    class="flex items-center content-center..."
    key={selected}
  >
    {#if selected === '1'}
      ...`} />
          {/if}
      </div>
    </Tabs>
  </div>
</Waypoint>