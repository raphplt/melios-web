<script>
	import Footer from '../../components/+footer.svelte';
	import Header from '../../components/+header.svelte';

	const styleLink = 'hover:italic hover:font-semibold transition duration-300';
</script>

<div class="">
	<Header />
	<ul class="flex flex-col justify-center gap-4 items-center min-h-[90vh] text-lg">
		<li><a href="/" class={styleLink}>Home</a></li>
		<li><a href="/about" class={styleLink}>About</a></li>
		<li><a href="/contact" class={styleLink}>Contact</a></li>
		<li><a href="/faq" class={styleLink}>FAQ</a></li>
		<li><a href="/terms" class={styleLink}>Terms of Service</a></li>
		<li><a href="/privacy" class={styleLink}>Privacy Policy</a></li>
		<li><a href="/cookie" class={styleLink}>Cookie Policy</a></li>
		<li><a href="/sitemap" class={styleLink}>Sitemap</a></li>
	</ul>
	<Footer />
</div>
