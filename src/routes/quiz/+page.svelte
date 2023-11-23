<script>
	import { onMount } from 'svelte';
	import { questions } from '../../store';

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
	Quiz Page
	<ul>
		{#each $questions as { question }}
			<li>{@html question}</li>
		{/each}
	</ul>
</div>

<style>
</style>
