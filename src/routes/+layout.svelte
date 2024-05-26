<script>
	import '../app.css';
	import Analytics from '$lib/analytics.svelte';

	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
</script>

<Analytics />


<slot />
