<script>
	export let answerTheQuestionHandler;
	export let answer;
	export let isCorrect;
	export let isWrong;

	import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
	import { questions, currentQuestionIndex } from '../../store';
	import FaSkullCrossbones from 'svelte-icons/fa/FaSkullCrossbones.svelte';
</script>

<button class="answer" on:click={answerTheQuestionHandler}>
	<p>{@html answer}</p>
	{#if isCorrect}
		<div class="result-icon correct">
			<FaCheck />
		</div>
	{:else if isWrong}
		<div class="result-icon wrong">
			<FaSkullCrossbones />
		</div>
	{/if}
</button>

<style>
	.answer {
		padding: 0.5rem;
		border-radius: 20px;
		font-weight: bolder;
		background: var(--ivory);
		color: var(--black);

		display: flex;
		justify-content: space-between;
		align-items: center;

		cursor: pointer;
	}

	.answer:hover {
		background: var(--pewter);
	}

	.result-icon {
		width: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.correct {
		color: green;
	}

	.wrong {
		color: red;
	}
</style>
