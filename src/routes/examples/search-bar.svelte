<script>
  import TextField from "components/TextField";
  import Select from "components/Select";
  import Slider from "components/Slider";
  import Button from "components/Button";
  import Code from "components/Code";

  import searchBar from "examples/search-bar.txt";

  const selectProps = {
    remove:"bg-gray-300 bg-gray-100 select",
    replace: {
      'pt-6': 'pt-3'
    },
    noUnderline: true,
    dense: true,
  };

  const inputProps = {
    replace: {
      'pb-6': 'pb-1',
      'pb-2': 'pb-1',
    },
    remove: 'pt-6 px-4 bg-gray-100 bg-gray-300',
    small: true,
    iconClasses: 'text-sm absolute',
    wrapperClasses: (i) => i.replace('pb-6', ''),
  };

  const buttonProps = {
     color: "gray",
     iconClass: "text-gray-800 absolute",
     text: true,
     add: "mx-auto",
     remove: "m-4",
     small: true,
     light: true,
  };
</script>

<style>
  .bordered {
    @apply w-1/12 border-l border-solid border-gray-300 px-1 items-center flex;
  }
  .full-border {
    @apply border-l border-gray-300 h-full;
  }
  .wrapper {
    @apply rounded-full border-solid border-gray-300 border flex items-center justify-center p-0 m-0 text-xs h-10;
  }
</style>

<div class="wrapper">
  <div class="px-3">
    <TextField
      placeholder="Search fonts"
      {...inputProps}
      noUnderline
      prepend="search" />
  </div>
  <div class="w-1/6 border-r full-border">
    <Select
        value="Sentence"
        {...selectProps}
        inputWrapperClasses={(c) => c.replace('select', 'h-8').replace('mt-2', '')}
        appendClasses={(c) => c.replace('pt-4', 'pt-2').replace('pr-4', 'pr-2')}
        items={["Sentence", "Word"]}
      />
  </div>
  <div class="px-3">
    <TextField
      placeholder="Type something"
      add="w-64"
      {...inputProps}
    />
  </div>
  <div class="w-1/9 full-border">
     <Select
      value="40px"
      class="w-20"
      {...selectProps}
      inputWrapperClasses={(c) => c.replace('select', 'h-8').replace('mt-2', '')}
      appendClasses={(c) => c.replace('pt-4', 'pt-2').replace('pr-4', 'pr-2')}
      items={["40px", "42px"]}
    />
  </div>
  <div class="w-1/6 px-2">
    <Slider />
  </div>
  <div class="bordered">
   <Button icon="vertical_split" {...buttonProps} />
  </div>
  <div class="bordered">
    <Button icon="format_color_fill" {...buttonProps} />
  </div>
  <div class="bordered">
    <Button icon="refresh" {...buttonProps} />
  </div>
</div>


<Code code={searchBar} />