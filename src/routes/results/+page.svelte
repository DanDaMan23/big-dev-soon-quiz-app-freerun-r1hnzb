<script>
	import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
	import FaSkullCrossbones from 'svelte-icons/fa/FaSkullCrossbones.svelte';
	import { correctAnswers, answeredQuestions } from '../../store';
</script>

<div class="results">
	<div class="container">
		<div
			class="progress-pie-bar"
			style={`background: radial-gradient(closest-side, var(--gonmetalGray) 79%, transparent 80% 100%), conic-gradient(var(--black) ${$correctAnswers.percentage}%, var(--ivory) 0)`}
		>
			<p>{$correctAnswers.ratio}</p>
		</div>
		<div class="details">
			<p>You answered</p>
			<p>{$correctAnswers.ratio} questions</p>
		</div>
	</div>
	<div class="answers-summary">
		<p>Your Answers</p>
		{#each $answeredQuestions as { question, correctAnswer, answerPicked }, index (question)}
			<div class="answer">
				<div class="index-area">
					<p class="index">{index + 1}</p>
				</div>
				<div class="answer-details">
					<p>{@html question}</p>
					<div class="evaluation">
						{#if answerPicked !== correctAnswer}
							<p class="wrong-answer">{@html answerPicked}</p>
						{/if}
						<p class="correct-answer">{@html correctAnswer}</p>
					</div>
				</div>
				{#if answerPicked === correctAnswer}
					<div class="icon correct-answer">
						<FaCheck />
					</div>
				{:else if answerPicked !== correctAnswer}
					<div class="icon wrong-answer">
						<FaSkullCrossbones />
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.results {
		height: 90vh;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		@media (min-width: 500px) {
			margin: 0 5rem;
		}
	}

	.answers-summary,
	.container {
		background: var(--pewter);
		padding: 1rem;
		border-radius: 10px;
	}

	.container {
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 1rem;
	}

	.answers-summary {
		background: var(--pewter);
		padding: 1rem;
		border-radius: 10px;
	}

	.progress-pie-bar {
		width: 100px;
		height: 100px;
		border-radius: 50%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.answer {
		background: var(--ivory);
		color: var(--black);
		border-radius: 10px;
		padding: 1rem;
		margin: 0.5rem 0;

		display: grid;
		grid-template-columns: 1fr 12fr 0.5fr;
		gap: 1rem;
	}

	.evaluation {
		display: flex;
		gap: 1rem;
	}

	.correct-answer {
		color: green;
	}

	.wrong-answer {
		color: red;
	}

	.icon {
		width: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.index-area {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.index {
		color: var(--ivory);
		background-color: var(--pewter);
		font-weight: bolder;

		padding: 0.5rem;
		border-radius: 30px;
	}
</style>
