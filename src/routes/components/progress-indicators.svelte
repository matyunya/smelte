<script>
  import ProgressLinear from "components/ProgressLinear";
  import ProgressCircular from "components/ProgressCircular";

  import Code from "docs/Code.svelte";
  import indicators from "examples/progress-indicators.txt";

  let progress = 0;

  function next() {
    setTimeout(() => {
      if (progress === 100) {
        progress = 0;
      }

      progress += 1;
      next();
    }, 100);
  }

  next();
</script>

<h5 class="pb-4">Indefinite linear progress indicator</h5>
<ProgressLinear />

<h5 class="pt-6 pb-4">Definite linear progress indicator</h5>

<small class="mb-3">{progress}%</small>
<ProgressLinear {progress} />

<h5 class="pt-6 pb-4">Indefinite circular progress indicator</h5>
<ProgressCircular />

<h5 class="pt-6 pb-4">Definite circular progress indicator</h5>

<small class="mb-3">{progress}%</small>
<ProgressCircular {progress} />

<Code code={indicators} />
