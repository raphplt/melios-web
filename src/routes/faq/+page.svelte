<script>
	const styleH2 = 'text-4xl font-spectral text-center';
	import { slide } from 'svelte/transition';
	import Header from '../../components/+header.svelte';
	import Footer from '../../components/+footer.svelte';

	let faqElement = [
		{
			question: 'What is Melios?',
			answer:
				'Melios is a habit-tracking app that helps you build better habits and earn rewards for your progress.',
			showAnswer: false
		},
		{
			question: 'How does Melios work?',
			answer:
				'Melios works by allowing you to track your habits, visualize your progress, and earn rewards for your achievements.',
			showAnswer: false
		},
		{
			question: 'How do I get started with Melios?',
			answer:
				'To get started with Melios, simply download the app from the App Store or Google Play Store and create an account.',
			showAnswer: false
		},
		{
			question: 'Is Melios free to use?',
			answer:
				'Yes, Melios is free to use and offers in-app purchases for additional features and rewards.',
			showAnswer: false
		}
	];
</script>

<div>
	<Header />
	<section class="py-24 h-[80vh]">
		<h2 class={styleH2}>FAQ</h2>

		<div class="flex flex-col items-center gap-5 mt-12">
			{#each faqElement as faq (faq.question)}
				<div class="flex flex-col gap-3 w-1/3 py-3">
					<button
						class="text-2xl font-spectral cursor-pointer text-left"
						on:click={() => (faq.showAnswer = !faq.showAnswer)}
					>
						{faq.question}
					</button>
					{#if faq.showAnswer}
						<p transition:slide={{ duration: 500 }} class="text-lg text-gray-700">
							{faq.answer}
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</section>
	<Footer />
</div>
