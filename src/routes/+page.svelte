<script lang="ts">
	import Promotion from '$lib/components/Promotion.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Feature from '$lib/components/Feature/Feature.svelte';
</script>

<main class="min-h-screen overflow-auto bg-black text-white lg:overflow-hidden">
	<Promotion />
	<article class="container mx-auto max-w-[1020px]">
		<Nav />
		<Feature />
	</article>
</main>
