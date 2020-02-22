<script>
  import Treeview from "components/Treeview";
  import Code from "docs/Code.svelte";
  import treeview from "examples/treeview.txt";

  let selected = "nothing";

  const items = [{
      text: "test",
      items: [{
          text: "subtest"
        },
        {
          text: "subtest2"
        },
        {
          text: "subtest3"
        },
        {
          text: "subtest4",
          items: [{
              text: "subtest"
            },
            {
              text: "subtest2"
            },
            {
              text: "subtest3"
            },
            {
              text: "subtest4"
            }
          ]
        }
      ]
    },
    {
      text: "test2",
      items: [{
          text: "subtest"
        },
        {
          text: "subtest2"
        },
        {
          text: "subtest3"
        },
        {
          text: "subtest4"
        }
      ]
    },
    {
      text: "test3",
      items: [{
          text: "subtest"
        },
        {
          text: "subtest2"
        },
        {
          text: "subtest3"
        },
        {
          text: "subtest4"
        }
      ]
    }
  ];
</script>

<small>I selected {selected}</small>
<Treeview class.listItem="remove:h-4 h-1" {items} let:item>
  <div class="bg-error-500">{item.text}</div>
</Treeview>

<Treeview on:select={i=> (selected = i.detail.text)} {items} />

  <Code code={treeview} />