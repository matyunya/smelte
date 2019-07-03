<script>
  import { fly, fade } from 'svelte/transition';
  import Tabs, { Tab } from 'components/Tabs';
  import Code from 'components/Code';
  import Image from 'components/Image';

  let loading = false;
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

<div style="max-width: 400px">
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
    ]}>
    <div
      slot="content"
      class="flex items-center content-center overflow-hidden w-full bg-gray-900 h-full"
      style="height: 250px"
    >
      <Tab id="1" {selected}>
        <Image
          alt="kitten 1"
          c="w-full"
          src="http://placekitten.com/400/250"
          width="400"
          height="250"
        />
      </Tab>
      <Tab id="2" {selected}>
        <Image
          alt="kitten 1"
          c="w-full"
          src="http://placekitten.com/400/251"
          width="400"
          height="250"
        />
      </Tab>
        <Tab id="3" {selected}>
        <Image
          alt="kitten 3"
          c="w-full"
          src="http://placekitten.com/400/253"
          width="400"
          height="250"
        />
      </Tab>
  </Tabs>
</div>

<Code code={`<div style="max-width: 400px">
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
    ]}>
    <div
      slot="content"
      class="flex items-center content-center overflow-hidden w-full bg-gray-900 h-full"
      style="height: 250px"
    >
      <Tab id="1" {selected}>
        <Image
          alt="kitten 1"
          c="w-full"
          src="http://placekitten.com/400/250"
          width="400"
          height="250"
        />
      </Tab>
      <Tab id="2" {selected}>
        <Image
          alt="kitten 1"
          c="w-full"
          src="http://placekitten.com/400/251"
          width="400"
          height="250"
        />
      </Tab>
        <Tab id="3" {selected}>
        <Image
          alt="kitten 3"
          c="w-full"
          src="http://placekitten.com/400/253"
          width="400"
          height="250"
        />
      </Tab>
  </Tabs>
</div>`} />