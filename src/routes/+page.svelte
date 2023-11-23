<script>
	import text from './home.json';
	import { goto } from '$app/navigation';
</script>

<div class="home-page">
	<div class="container">
		<h1 class="title">
			<div>
				<strong class="first-letter">{text.title.substring(0, 1)}</strong>{text.title.substring(
					1,
					4
				)}
			</div>
			<div>{text.title.substring(4)}</div>
		</h1>
		<h2>{text.header}</h2>
		<p>{text.description}</p>
		<button class="start-quiz" on:click={() => goto('/quiz', { replaceState: false })}
			>{text.button}</button
		>
	</div>
</div>

<style>
	.home-page {
		height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.start-quiz {
		border-radius: 20px;
		padding: 0.5rem 7rem;
		margin: 2rem 0;

		background: var(--black);
		color: var(--ivory);
		box-shadow: 1px 1px 1px var(--pewter);
		border: 1px solid var(--black);
		font-weight: bold;

		cursor: pointer;
	}

	.container {
		text-align: center;
	}

	.title {
		color: black;
	}

	.title strong {
		color: var(--gonmetalGray);
		background-color: var(--black);
		padding: 0.5rem;
		border-radius: 30px;
	}
</style>
