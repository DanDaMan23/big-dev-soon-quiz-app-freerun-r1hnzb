<script>
	import { goto } from '$app/navigation';
	import text from './text.json';
</script>

<div class="layout">
	<slot />
	<div class="footer">
		<button class="home" on:click={() => goto('/', { replaceState: false })}
			>{text.navigationButtons.home}</button
		>
		<button class="new-quiz" on:click={() => goto('/quiz', { replaceState: false })}
			>{text.navigationButtons.newQuiz}</button
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
		color: var(--ivory);
		font-weight: bolder;

		cursor: pointer;

		@media (max-width: 900px) {
			width: 100%;
		}
	}

	.home {
		background: var(--pewter);
	}
	.new-quiz {
		background: var(--gonmetalGray);
	}
</style>
