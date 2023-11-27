<script>
	import { correctAnswers } from '../../store';
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
</div>

<style>
	.results {
		height: 90vh;
		margin: 0 5rem;
	}

	.container {
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 1rem;

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
</style>
