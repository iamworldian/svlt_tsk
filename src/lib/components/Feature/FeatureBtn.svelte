<div class="flex flex-col-reverse gap-[54px] pb-5 md:flex-col md:gap-[36px] md:pb-0 justify-center items-center md:items-start">
	<div class="flex w-full max-w-full flex-col gap-3 md:max-w-[313px] mx-5 sm:m-0">
		<button class="feature-btn"> GET STARTED  ➤  </button>
		<p class="feature-text">1-minute quiz for personalized Insights</p>
	</div>
	<div class="flex flex-col gap-[27px]">
		<p class="terms mx-10 sm:m-0">
			By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy,
			Subscription Terms
		</p>
		<p class="copy">Fametonic 2025 © All Rights Reserved.</p>
	</div>
</div>


<style>
	@reference "../../../app.css";
	.feature-btn {
			@apply h-[40px] w-full cursor-pointer rounded-[10px] bg-primary font-figtree text-xl leading-none font-bold drop-shadow-[2px_2px_10px_rgb(0,231,249)] transition-all duration-300 hover:bg-primary/90;
		}
	.feature-text {
		@apply text-center align-middle font-figtree text-[12px] leading-[16px] font-normal;
	}

	.terms {
		@apply text-center align-middle font-figtree text-[12px] leading-none font-medium text-tertiary md:text-left;
	}

	.copy {
		@apply text-center align-middle font-nunito text-[10px] leading-none font-medium text-tertiary md:text-left md:font-figtree;
	}
</style>