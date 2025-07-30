<script lang="ts">
	import Heading from './Heading.svelte';
	import Features from './Features.svelte';
	import HeroCTA from './FeatureBtn.svelte';
</script>

<section
	class="relative flex flex-col-reverse items-center justify-between gap-6 px-2 sm:px-6 md:flex-row md:py-[70px] xl:py-[44px]"
>
	<div class="z-10 max-w-[516px] flex-1 space-y-6 tracking-normal">
		<Heading />
		<Features />
		<HeroCTA />
	</div>

	<div
		class="pointer-events-none relative mt-8 flex h-full w-full flex-1 md:absolute md:-top-7 md:right-[40px] md:mt-0 md:h-full md:w-1/2 xl:block  justify-center items-center"
	>
		<div class="relative mx-auto w-full md:min-h-[673px] xl:w-[666px]">
			<img src="/phone.png" alt="App Preview" class="h-70 w-70 sm:w-full sm:h-full object-cover ml-15 sm:m-0" />
		</div>

	</div>
</section>
