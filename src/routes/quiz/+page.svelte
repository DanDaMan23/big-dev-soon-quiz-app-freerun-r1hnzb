<script>
	import { onMount } from 'svelte';
	import { questions, currentQuestionIndex, answers } from '../../store';

	const API_ENDPOINT = 'https://opentdb.com/api.php?amount=10';

	onMount(async () => {
		fetch(API_ENDPOINT)
			.then((response) => response.json())
			.then((data) => {
				questions.set(data?.results);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<div class="quiz">
	<div class="container">
		<p>Question {$currentQuestionIndex + 1} / {$questions && $questions.length}</p>
		<h4>{@html $questions && $questions[$currentQuestionIndex]?.question}</h4>
		<div class="answers">
			{#each $answers as answer}
				<button class="answer">{answer}</button>
			{/each}
		</div>
	</div>

	<!-- Sample  -->
	<!-- <ul>
		{#each $questions as { question } (question)}
			<li>{@html question}</li>
		{/each}
	</ul> -->
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

	.answer {
		text-align: left;
		padding: 0.5rem;
		border-radius: 20px;
		font-weight: bolder;
		background: var(--ivory);
		color: var(--black);

		cursor: pointer;
	}

	.answer:hover {
		background: var(--pewter);
	}
</style>
