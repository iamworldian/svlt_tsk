<script lang="ts">
	export let text: string;
</script>

<li class="flex items-start">
	<img
		src="/bullets.png"
		alt="Icon"
		width="22"
		height="22"
		class="flex-shrink-0"
		aria-hidden="true"
	/>
	<p class="leading-[22px]">{text}</p>
</li>
