<script>
  import { ClassBuilder } from "../../utils/classes.js";
  import { createEventDispatcher } from "svelte";
  import Select from "../Select";
  import Button from "../Button";
  import { Spacer } from "../Util";
  import Icon from "../Icon";
  import { pagination as config } from "./config";
  import smelter from "../../utils/smelter";
  import { writable } from "svelte/store";

  const paginatorPropsDefault = {
    color: "gray",
    text: true,
    flat: true,
    dark: true,
  };

  export let perPage = 0;
  export let page = 0;
  export let offset = 0;
  export let pagesCount = 0;
  export let perPageOptions = 0;
  export let scrollToTop = false;
  export let table = null;
  export let total = 0;

  export let paginatorProps = false;

  const store = writable($$props.config || config);

  $: smelte = smelter($store, $$props);

  const dispatch = createEventDispatcher();
</script>

<tfoot>
  <tr>
    <td colspan="100%" class="border-none">
      <div class={smelte.root.class}>
        <Spacer />
        <div class="mr-1 py-1">
        Rows per page:
        </div>
        <div class="mode-dense">
          <Select
            class={smelte.rowsSelect.class}
            noUnderline
            dense
            bind:value={perPage}
            items={perPageOptions}
          />
        </div>
        <Spacer />
        <slot
          name="counter"
        >
          <div>{offset}-{offset + perPage > total ? total : offset + perPage} of {total}</div>
        </slot>
        <Button
          disabled={(page - 1) < 1}
          class.icon={smelte.buttonIcon.class}
          class.disabled={smelte.buttonDisabled.class}
          icon="keyboard_arrow_left"
          {...(paginatorProps || paginatorPropsDefault)}
          on:click={() => {
            page -= 1;
            if (scrollToTop) table.scrollIntoView({ behavior: "smooth" });
          }} />
        <Button
          disabled={page === pagesCount}
          icon="keyboard_arrow_right"
          class.icon={smelte.buttonIcon.class}
          class.disabled={smelte.buttonDisabled.class}
          {...(paginatorProps || paginatorPropsDefault)}
          on:click={() => {
            page += 1;
            if (scrollToTop) table.scrollIntoView({ behavior: "smooth" });
          }} />
        </div>
      </td>
    </tr>
  </tfoot>
