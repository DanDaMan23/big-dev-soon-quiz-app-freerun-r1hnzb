<script>
	import { onMount } from 'svelte';
	import { questions, currentQuestionIndex, answers, answeredQuestions } from '../../store';

	import text from './quiz.json';
	import AnswerButton from './AnswerButton.svelte';

	const API_ENDPOINT = 'https://opentdb.com/api.php?amount=10';

	let isAnswered = false;
	let answerPicked = '';

	onMount(async () => {
		fetch(API_ENDPOINT)
			.then((response) => response.json())
			.then((data) => {
				currentQuestionIndex.reset();
				answeredQuestions.clear();
				questions.set(data?.results);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});

	const answerTheQuestionHandler = (answer) => {
		answerPicked = answer;
		if (!isAnswered) {
			answeredQuestions.recordAnswer(
				$questions[$currentQuestionIndex].question,
				$questions[$currentQuestionIndex].correct_answer,
				answer
			);

			console.log($answeredQuestions);
		}

		isAnswered = true;
	};
</script>

<div class="quiz">
	<div class="container">
		<p>{text.question} {$currentQuestionIndex + 1} / {$questions && $questions.length}</p>
		<h4>{@html $questions && $questions[$currentQuestionIndex]?.question}</h4>
		<div class="answers">
			{#each $answers as answer}
				<AnswerButton
					answerTheQuestionHandler={() => answerTheQuestionHandler(answer)}
					{answer}
					isCorrect={isAnswered && answer === $questions[$currentQuestionIndex].correct_answer}
					isWrong={isAnswered &&
						answerPicked === answer &&
						answer !== $questions[$currentQuestionIndex].correct_answer}
				/>
			{/each}
		</div>
		{#if isAnswered && $currentQuestionIndex !== 9}
			<div class="next-question-container">
				<button
					class="next-question"
					on:click={() => {
						currentQuestionIndex.nextQuestion();
						isAnswered = false;
					}}>{text.next}</button
				>
			</div>
		{:else if $currentQuestionIndex === 9}
			<div class="next-question-container">
				<button
					class="next-question"
					on:click={() => {
						// Go to results page
					}}>{text.resultsPage}</button
				>
			</div>
		{/if}
	</div>
</div>

<style>
	.quiz {
		height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.quiz .container {
		background: var(--black);
		padding: 1rem;
		border-radius: 10px;
	}

	.answers {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

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
