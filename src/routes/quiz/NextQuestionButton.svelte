<script>
	import { goto } from '$app/navigation';
	import { currentQuestionIndex } from '../../store';
	import text from './quiz.json';

	export let isAnswered;
	export let goToNextQuestionHandler;
</script>

{#if isAnswered && $currentQuestionIndex !== 9}
	<div class="next-question-container">
		<button class="next-question" on:click={goToNextQuestionHandler}>{text.next}</button>
	</div>
{:else if isAnswered && $currentQuestionIndex === 9}
	<div class="next-question-container">
		<button class="next-question" on:click={() => goto('/results', { replaceState: false })}
			>{text.resultsPage}</button
		>
	</div>
{/if}

<style>
	.next-question-container {
		display: flex;
		justify-content: center;
		margin: 1rem;
	}

	.next-question {
		padding: 0.5rem;
		border-radius: 30px;
		font-weight: bolder;
		background: var(--ivory);
		color: var(--black);

		cursor: pointer;
	}
</style>
