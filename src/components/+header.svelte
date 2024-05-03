<script>
	// @ts-nocheck

	import MeliosLogo from '$lib/icons/melios.png';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let showMenu = writable(false);
	let isAtTop = writable(true);

	function toggleMenu() {
		showMenu.update((value) => !value);
	}

	function handleResize() {
		if (typeof window !== 'undefined') {
			showMenu.set(!(window.innerWidth < 768));
		}
	}

	function closeMenu() {
		if (typeof window !== 'undefined' && window.innerWidth < 768) {
			showMenu.set(false);
		}
	}

	function handleScroll() {
		if (typeof window !== 'undefined') {
			isAtTop.set(window.scrollY < 1);
		}
	}
	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
			handleResize();
			window.addEventListener('scroll', handleScroll);
			handleScroll();
			return () => {
				window.removeEventListener('resize', handleResize);
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});

	async function navigateToPhoneSection() {
		await goto('/');
		setTimeout(() => {
			const element = document.getElementById('phone-section');
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
			if (typeof window !== 'undefined' && window.innerWidth < 768) {
				showMenu.set(false);
			}
		}, 0);
	}

	async function navigateToFAQ() {
		await goto('/');
		setTimeout(() => {
			const element = document.getElementById('faq-section');
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
			if (typeof window !== 'undefined' && window.innerWidth < 768) {
				showMenu.set(false);
			}
		}, 0);
	}
</script>

<header
	class="{$isAtTop
		? 'bg-transparent'
		: 'bg-white backdrop-blur'} flex justify-center sm:flex-row flex-col gap-20 sm:gap-0 z-10 font-semibold py-3 top-0 sm:justify-around sm:items-center w-[100vw] fixed"
>
	<div class="flex justify-between w-11/12 mx-auto sm:w-fit sm:mx-0">
		<a
			href="/"
			class="hover:underline hover:font-semibold underline-offset-2 flex items-center flex-col gap-1"
		>
			<a
				href="/"
				class="w-10 h-10 cursor-pointer flex flex-row gap-2 items-center"
				on:click={closeMenu}
			>
				<img src={MeliosLogo} alt="home" />
				Melios
			</a>
		</a>
		<button
			class="flex flex-col h-12 w-12 rounded justify-center items-center group sm:hidden"
			on:click={toggleMenu}
		>
			{#if $showMenu}
				<div
					class="h-1 w-6 my-1 rounded-full bg-black rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
				/>
				<div class="h-1 w-6 my-1 rounded-full bg-black opacity-0" />
				<div
					class="h-1 w-6 my-1 rounded-full bg-black -rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
				/>
			{:else}
				<div class="h-1 w-6 my-1 rounded-full bg-black opacity-50 group-hover:opacity-100" />
				<div class="h-1 w-6 my-1 rounded-full bg-black opacity-50 group-hover:opacity-100" />
				<div class="h-1 w-6 my-1 rounded-full bg-black opacity-50 group-hover:opacity-100" />
			{/if}
		</button>
	</div>
	{#if $showMenu}
		<ul
			in:slide={{ y: 0, duration: 300 }}
			out:slide={{ y: -100, duration: 300 }}
			class="flex gap-20 text-xl sm:text-[16px] sm:gap-20 sm:flex-row flex-col h-[100vh] sm:h-fit w-[100wv] items-center sm:items-start"
		>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="font-semibold" on:click={closeMenu}>Home</a>
			</li>
			<li aria-current={$page.url.pathname === '#about' ? 'page' : undefined}>
				<button
					on:click|preventDefault={navigateToPhoneSection}
					class="font-semibold"
					on:click={closeMenu}>About</button
				>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/faq') ? 'page' : undefined}>
				<button class="font-semibold" on:click|preventDefault={navigateToFAQ}>FAQ</button>
			</li>
		</ul>
	{/if}
</header>
