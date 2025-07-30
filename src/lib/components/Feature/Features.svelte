<script lang="ts">
	import Bullets from './Bullets.svelte';
	const features = [
		'Start growing your influence right away—no waiting required!',
		'Create viral TikToks and Reels step by step with easy-to-follow lessons',
		'Use a Personal AI Worker to boost your content',
		'Learn from expert-led courses designed for aspiring influencers'
	];
</script>

<ul class="font-figtree text-[16px] leading-[22px] font-normal lg:font-semibold space-y-4 mt-5 px-5 sm:px-0">
	{#each features as feature}
		<Bullets text={feature} />
	{/each}
</ul>
