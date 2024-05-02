<script>
	import MeliosLogo from '$lib/icons/melios.png';
	import { text } from '@sveltejs/kit';
	const styleH2 = 'text-2xl font-spectral text-center text-white mb-3';
</script>

<footer class="flex flex-row justify-evenly items-center bg-gray-700">
	<div class="flex flex-col items-start justify-start p-20 gap-5">
		<img src={MeliosLogo} alt="Melios Logo" class="w-20 h-20" />
		<span class="font-semibold text-white">
			Melios: Transforming Progress, One Habit at a Time!
		</span>
	</div>
	<div class="flex flex-row gap-20">
		<div>
			<h2 class={styleH2}>Company</h2>
			<ul class="flex flex-col justify-evenly gap-4 items-start text-white">
				<li class="hover:text-gray-300">
					<a href="/about"> About Us </a>
				</li>
				<li class="hover:text-gray-300">
					<a href="/careers"> Careers </a>
				</li>
				<li class="hover:text-gray-300">
					<a href="/contact"> Contact Us </a>
				</li>
				<li class="hover:text-gray-300">
					<a href="/contact"> Community </a>
				</li>
			</ul>
		</div>

		<div>
			<h2 class={styleH2}>Social networks</h2>
			<ul class="flex flex-col justify-evenly gap-4 items-start text-white">
				<li class="hover:text-gray-300">
					<a
						href="https://www.linkedin.com/company/melios"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</li>
				<li class="hover:text-gray-300">
					<a href="https://www.facebook.com/melios" target="_blank" rel="noopener noreferrer">
						Facebook
					</a>
				</li>
				<li class="hover:text-gray-300">
					<a href="https://www.instagram.com/melios" target="_blank" rel="noopener noreferrer">
						Instagram
					</a>
				</li>
				<li class="hover:text-gray-300">
					<a href="https://www.twitter.com/melios" target="_blank" rel="noopener noreferrer">
						Twitter
					</a>
				</li>
			</ul>
		</div>
        <div>
            <h2 class={styleH2}>Ressources</h2>
            <ul class="flex flex-col justify-evenly gap-4 items-start text-white">
                <li class="hover:text-gray-300">
                    <a href="/faq">FAQ</a>
                </li>
                <li class="hover:text-gray-300">
                    <a href="/terms">Terms of Service</a>
                </li>
                <li class="hover:text-gray-300">
                    <a href="/privacy">Privacy Policy</a>
                </li>
                <li class="hover:text
                -gray-300">
                    <a href="/cookie">Cookie Policy</a>
                </li>
                <li class="hover:text-gray-300">
                    <a href="/sitemap">Sitemap</a>
                </li>
            </ul>

        </div>
	</div>
</footer>
