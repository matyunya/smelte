<script>
  import { Tab, Tabs } from "components/Tabs";
  import Image from "components/Image";

  import Code from "docs/Code.svelte";
  import tabs from "examples/tabs.txt";
  import tabsWithContent from "examples/tabs-with-content.txt";

  let loading = false;
</script>

<p>
  Tabs can be used as navigation elements like the ones you see on the top
  right. You need to bind current pathname as value prop for active indicator to
  work correctly.
</p>

<Code code={tabs} />

<blockquote
  class="pl-8 mt-16 mb-10 border-l-8 border-primary-300 text-lg"
  cite="https://material.io/design/components/tabs.html#usage">
  Tabs organize and allow navigation between groups of content that are related
  and at the same level of hierarchy.
</blockquote>

<div style="max-width: 400px">
  <Tabs
    selected="1"
    class="bg-black shadow-sm mt-6 text-white"
    color="secondary"
    let:selected
    {loading}
    items={[
      { id: '1', text: 'Cats', icon: 'alarm_on' },
      { id: '2', text: 'Kittens', icon: 'bug_report' },
      { id: '3', text: 'Kitties', icon: 'eject' }
    ]}>
    <div
      slot="content"
      class="flex items-center content-center overflow-hidden w-full bg-gray-900 shadow h-full"
      style="height: 250px">
      <Tab id="1" {selected}>
        <Image
          alt="kitten 1"
          class="w-full"
          src="https://placekitten.com/400/250"
          width="400"
          height="250" />
      </Tab>
      <Tab id="2" {selected}>
        <Image
          alt="kitten 1"
          class="w-full"
          src="https://placekitten.com/400/251"
          width="400"
          height="250" />
      </Tab>
      <Tab id="3" {selected}>
        <Image
          alt="kitten 3"
          class="w-full"
          src="https://placekitten.com/400/253"
          width="400"
          height="250" />
      </Tab>
    </div>
  </Tabs>
</div>

<Code code={tabsWithContent} />
