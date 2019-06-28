<script>
	import ProgressLinear from 'components/ProgressLinear';

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

<h4 class="pb-8">Progress indicators</h4>

<h5 class="pb-4">Indefinite linear progress indicator</h5>
<ProgressLinear />

<h5 class="pt-6 pb-4">Definite linear progress indicator</h5>

<caption class="mb-3">{progress}%</caption>
<ProgressLinear {progress} />