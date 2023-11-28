<script>
	import { goto } from '$app/navigation';
</script>

<div class="layout">
	<slot />
	<div class="footer">
		<button class="home" on:click={() => goto('/', { replaceState: false })}>Return to Home</button>
		<button class="new-quiz" on:click={() => goto('/quiz', { replaceState: false })}
			>Start New Quiz</button
		>
	</div>
</div>

<style>
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;

		background: var(--black);
		padding: 1rem 0;

		@media (min-width: 900px) {
			display: flex;
			justify-content: space-around;
		}
	}

	.home,
	.new-quiz {
		padding: 0.5rem 4rem;
		border-radius: 40px;

		cursor: pointer;

		@media (max-width: 900px) {
			width: 100%;
		}
	}
</style>
