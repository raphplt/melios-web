<script>
	export let image = 'Phone1';
	export let title = 'Title of section';
	export let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
	export let button = 'Get Started';
	export let buttonColor = '#033CB1';
	export let reverse = false;
</script>

<div class="flex items-center justify-evenly">
	{#if !reverse}
		<img src={image} alt="Screenshot from app" class="w-[12%]" />
	{/if}
	<div class="flex flex-col items-center justify-center gap-5">
		<h3 class="text-4xl font-spectral">
			{title}
		</h3>
		<p class="text-lg text-gray-700">
			{text}
		</p>
		<button
			class="relative mt-2 py-3 px-12 rounded-2xl text-lg text-white transition duration-200 ease-in-out hover:scale-105 transform hover:shadow-lg"
			style="background-color: {buttonColor}"
		>
			{button}
		</button>
	</div>
	{#if reverse}
		<img src={image} alt="Screenshot from app" class="w-[12%]" />
	{/if}
</div>
