<script>
	import background from '$lib/images/background.jpg';
	import Button from '../components/+button.svelte';
	import Header from '../components/+header.svelte';
	import AppStore from '$lib/icons/+App_Store.svelte';
	import GooglePlayStore from '$lib/icons/+Google_Play_Store.svelte';
	import Phone1 from '$lib/images/Phone1.png';
	import Phone2 from '$lib/images/Phone2.png';
	import Phone3 from '$lib/images/Phone3.png';
	import Phone from '../components/+phone.svelte';
	import { slide } from 'svelte/transition';
	import Background from '../components/+background.svelte';
	import Footer from '../components/+footer.svelte';
	import Contact from '../components/+contact.svelte';

	const styleH2 = 'sm:text-4xl text-2xl font-spectral text-center';

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
	<section class="min-h-[100vh]">
		<Header />
		<img src={background} alt="background" class="w-[100vw] h-[100vh] absolute top-0" />
		<div class="flex flex-col gap-20 lg:gap-64">
			<div class="relative flex flex-col gap-5 justify-center items-center mt-48">
				<h1 class="text-2xl sm:text-5xl text-center font-spectral w-10/12 sm:w-1/2 mx-auto white">
					Embrace Change, Earn Rewards! Our app turns your habits into triumphs!
				</h1>
				<h2 class="text-center sm:text-xl w-10/12 sm:w-1/3 text-gray-700 mb-5">
					Unlock your potential, cultivate wellness, and thrive with our personalized approach to
					self-improvement and habit-building.
				</h2>
				<a href="#phone-section">
					<Button text="Get Started" />
				</a>
			</div>
			<div class="relative">
				<p class="text-center text-lg mb-8 font-semibold">Soon available on:</p>
				<div class="flex items-center justify-center gap-10">
					<a
						href="https://www.apple.com/fr/app-store/"
						class="sm:w-40 w-24 hover:scale-105 transform transition duration-200 ease-in-out"
					>
						<AppStore />
					</a>
					<a
						href="https://play.google.com/store/apps?hl=fr&gl=US&pli=1"
						class="sm:w-44 w-28 hover:scale-105 transform transition duration-200 ease-in-out"
					>
						<GooglePlayStore />
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="sm:py-24 py-12 flex flex-col gap-24 sm:gap-36 relative" id="phone-section">
		<Background />

		<h2 class={styleH2}>Ready to reclaim your life?</h2>
		<Phone
			title="Habit Tracking"
			text="Track your habits by completing daily tasks and earn rewards for your progress."
			image={Phone1}
			reverse={false}
			button="Start Tracking"
			buttonColor="#32a852"
		/>
		<Phone
			title="See Your Progress"
			text="Visualize your progress and see how far you've come with our easy-to-use interface."
			image={Phone2}
			reverse={true}
			button="View Progress"
			buttonColor="#f0d130"
		/>
		<Phone
			title="Earn Rewards"
			text="Earn rewards for your progress and redeem them for discounts on your favorite products."
			image={Phone3}
			reverse={false}
			button="Get Rewards"
			buttonColor="#033CB1"
		/>
	</section>
	<section class="py-12 sm:py-24" id="faq-section">
		<h2 class={styleH2}>FAQ</h2>

		<div class="flex flex-col items-center gap-5 mt-12">
			{#each faqElement as faq (faq.question)}
				<div class="flex flex-col gap-3 w-11/12 sm:w-1/3 py-3">
					<button
						class="sm:text-2xl text-xl font-spectral cursor-pointer text-left"
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
	<section class="flex items-center justify-around min-h-[30vh] py-12">
		<div class="flex flex-col items-center justify-center">

			<Contact />
			<a href="https://fr.freepik.com/vecteurs-libre/illustration-concept-nettoyage-boite-reception_7769813.htm#fromView=search&page=1&position=21&uuid=64c4cc6c-d300-4c99-a4f5-26df49012018" class="text-gray-400">Image de storyset sur Freepik</a>
		</div>
		<div>
			<h2 class={styleH2}>Nous contacter</h2>
			<div>
				<h3>
					LinkedIn
				</h3>
				
				<h3>
					Instagram
				</h3>
				<h3>
					E-mail
				</h3>
			</div>
			
		</div>
	</section>
	<section>
		<div data-tf-live="01HWTH71K4KDB1PMGA9GDA3R9Z"></div>
		<script src="//embed.typeform.com/next/embed.js"></script>
	</section>

	<Footer />
</div>
