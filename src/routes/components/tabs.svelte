<script>
  import Tabs from 'components/Tabs';

  let tab = 0;
</script>

<h4 class="pb-8">Tabs</h4>

<p>
  Tabs can be used as navigation elements like the ones you see on the top right.
  You need to bind current pathname as value prop for active indicator to work correctly.
</p>

<code class="block my-4 bg-gray-200 p-8">
  <pre>
  {
    `
  <script>
    import { stores } from '@sapper/app';
    const { page } = stores();

    const topMenu = [
        { to: "/components", text: 'Components' },
        { to: "/typography", text: 'Typography' },
        { to: "/color", text: 'Color' },
      ];

    // Or simply use document.location.pathname
    // if your app isn't sapper.
    $: path = $page.path;
  </script>
  
  <Tabs items={topMenu} bind:value={path} />
  `
}
  </pre>
</code>

<p>
  Tabs may often contain related content on the same page.
  In this case use slot <span class="body-2">content</span>.
</p>

<div class="bg-black elevation-3">
  <Tabs
    bind:value={tab}
    color="yellow-700"
    items={[
      { value: 0, text: 'Cats', icon: 'alarm_on' },
      { value: 1, text: 'Dogs', icon: 'bug_report' },
      { value: 2, text: 'People', icon: 'eject' },
    ]}>
  </Tabs>
</div>