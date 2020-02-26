<script>
  import Treeview from "components/Treeview";
  import Button from "components/Button";
  import Code from "docs/Code.svelte";
  import treeview from "examples/treeview.txt";

  let selected = "nothing";

  let items = [{
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

  let expanded = [];

  function onExpand({ detail }) {
    if (expanded.includes(detail)) {
      expanded = expanded.filter(p => p !== detail);
    } else {
      expanded = [...expanded, detail];
    }
  }

  function addItem() {
    items = [ {text: "New item", items: [{ text: "New item" }] }, ...items];
  }
</script>

<small>I selected {selected}</small>
<Treeview class.listItem="remove:h-4 h-1" {items} let:item>
  <div class="bg-error-500">{item.text}</div>
</Treeview>

<Treeview on:select={i=> (selected = i.detail.text)} {items} />

<small>I expanded {expanded.map(e => e.text).join(', ') || "nothing"}</small>
<Button on:click={addItem}>Add new item</Button>
<Treeview {expanded} controlled on:expand={onExpand} {items} />

<Code code={treeview} />